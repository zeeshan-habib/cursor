#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { GelatoClient } from "./gelato-client.js";

const apiKey = process.env.GELATO_API_KEY;
if (!apiKey) {
  console.error("Error: GELATO_API_KEY environment variable is required");
  process.exit(1);
}

const client = new GelatoClient(apiKey);

const server = new Server(
  { name: "gelato-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

// ── Tool definitions ──────────────────────────────────────────────────────────

const TOOLS = [
  // Catalog
  {
    name: "list_catalogs",
    description: "List all available Gelato product catalogs (e.g. apparel, wall art, mugs).",
    inputSchema: { type: "object", properties: {}, required: [] },
  },
  {
    name: "get_catalog",
    description: "Get details about a specific Gelato catalog by its UID.",
    inputSchema: {
      type: "object",
      properties: {
        catalogUid: { type: "string", description: "The catalog UID" },
      },
      required: ["catalogUid"],
    },
  },
  {
    name: "search_products",
    description: "Search for products within a Gelato catalog. Optionally filter by attributes like color, size, etc.",
    inputSchema: {
      type: "object",
      properties: {
        catalogUid: { type: "string", description: "The catalog UID to search within" },
        filters: {
          type: "object",
          description: "Optional filters such as { attributeFilters: [{ name: 'color', values: ['white'] }] }",
        },
      },
      required: ["catalogUid"],
    },
  },
  {
    name: "get_product",
    description: "Get full details for a specific Gelato product by its UID, including variants and pricing.",
    inputSchema: {
      type: "object",
      properties: {
        productUid: { type: "string", description: "The product UID" },
      },
      required: ["productUid"],
    },
  },
  {
    name: "list_ecommerce_products",
    description: "List products linked to a specific Gelato ecommerce store (e.g. Shopify store).",
    inputSchema: {
      type: "object",
      properties: {
        storeId: { type: "string", description: "The Gelato ecommerce store ID" },
      },
      required: ["storeId"],
    },
  },

  // Orders
  {
    name: "quote_order",
    description: "Get a price quote for an order before placing it. Useful for calculating total cost including shipping.",
    inputSchema: {
      type: "object",
      properties: {
        orderReferenceId: { type: "string", description: "Your unique reference ID for this order" },
        customerReferenceId: { type: "string", description: "Your unique reference ID for the customer" },
        currency: { type: "string", description: "Currency code, e.g. USD, EUR, GBP" },
        items: {
          type: "array",
          description: "Array of order items",
          items: {
            type: "object",
            properties: {
              itemReferenceId: { type: "string" },
              productUid: { type: "string" },
              quantity: { type: "number" },
              files: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: { type: "string" },
                    url: { type: "string" },
                  },
                },
              },
            },
          },
        },
        shipmentMethodUid: { type: "string", description: "Shipping method UID, e.g. 'standard' or 'express'" },
        shippingAddress: {
          type: "object",
          description: "Delivery address",
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
            addressLine1: { type: "string" },
            addressLine2: { type: "string" },
            city: { type: "string" },
            state: { type: "string" },
            postCode: { type: "string" },
            country: { type: "string" },
            email: { type: "string" },
            phone: { type: "string" },
          },
        },
      },
      required: ["orderReferenceId", "customerReferenceId", "currency", "items", "shipmentMethodUid", "shippingAddress"],
    },
  },
  {
    name: "create_order",
    description: "Create and place a new print order with Gelato. Gelato will print and ship the item(s) directly to the customer.",
    inputSchema: {
      type: "object",
      properties: {
        orderType: { type: "string", description: "'order' for a live order or 'draft' to save without placing", default: "order" },
        orderReferenceId: { type: "string", description: "Your unique reference ID for this order" },
        customerReferenceId: { type: "string", description: "Your unique reference ID for the customer" },
        currency: { type: "string", description: "Currency code, e.g. USD, EUR, GBP" },
        items: {
          type: "array",
          description: "Array of order items with productUid, files (design URLs), and quantity",
          items: {
            type: "object",
            properties: {
              itemReferenceId: { type: "string" },
              productUid: { type: "string" },
              quantity: { type: "number" },
              files: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: { type: "string", description: "'default' for the main print file" },
                    url: { type: "string", description: "Publicly accessible URL to the print-ready design file" },
                  },
                },
              },
            },
          },
        },
        shipmentMethodUid: { type: "string", description: "Shipping method UID, e.g. 'standard' or 'express'" },
        shippingAddress: {
          type: "object",
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
            addressLine1: { type: "string" },
            addressLine2: { type: "string" },
            city: { type: "string" },
            state: { type: "string" },
            postCode: { type: "string" },
            country: { type: "string" },
            email: { type: "string" },
            phone: { type: "string" },
          },
        },
      },
      required: ["orderReferenceId", "customerReferenceId", "currency", "items", "shipmentMethodUid", "shippingAddress"],
    },
  },
  {
    name: "get_order",
    description: "Get the status and details of an existing Gelato order by its order ID.",
    inputSchema: {
      type: "object",
      properties: {
        orderId: { type: "string", description: "The Gelato order ID" },
      },
      required: ["orderId"],
    },
  },
  {
    name: "search_orders",
    description: "Search/list orders with optional filters like status, date range, or reference ID.",
    inputSchema: {
      type: "object",
      properties: {
        orderReferenceId: { type: "string", description: "Filter by your reference ID" },
        status: { type: "string", description: "Filter by status: created, passed, failed, cancelled, etc." },
        startDate: { type: "string", description: "Start date filter (ISO 8601)" },
        endDate: { type: "string", description: "End date filter (ISO 8601)" },
        limit: { type: "string", description: "Max results to return (default 10)" },
        offset: { type: "string", description: "Pagination offset" },
      },
      required: [],
    },
  },
  {
    name: "cancel_order",
    description: "Cancel an existing Gelato order. Only possible before it enters production.",
    inputSchema: {
      type: "object",
      properties: {
        orderId: { type: "string", description: "The Gelato order ID to cancel" },
      },
      required: ["orderId"],
    },
  },

  // Shipment
  {
    name: "get_shipment_methods",
    description: "List all available Gelato shipment methods (standard, express, etc.) with their details.",
    inputSchema: { type: "object", properties: {}, required: [] },
  },
];

// ── List tools handler ────────────────────────────────────────────────────────

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS,
}));

// ── Call tool handler ─────────────────────────────────────────────────────────

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;

  try {
    let result: unknown;

    switch (name) {
      // Catalog
      case "list_catalogs":
        result = await client.listCatalogs();
        break;

      case "get_catalog": {
        const { catalogUid } = z.object({ catalogUid: z.string() }).parse(args);
        result = await client.getCatalog(catalogUid);
        break;
      }

      case "search_products": {
        const { catalogUid, filters } = z
          .object({ catalogUid: z.string(), filters: z.unknown().optional() })
          .parse(args);
        result = await client.searchProducts(catalogUid, filters ?? {});
        break;
      }

      case "get_product": {
        const { productUid } = z.object({ productUid: z.string() }).parse(args);
        result = await client.getProduct(productUid);
        break;
      }

      case "list_ecommerce_products": {
        const { storeId } = z.object({ storeId: z.string() }).parse(args);
        result = await client.listEcommerceProducts(storeId);
        break;
      }

      // Orders
      case "quote_order":
        result = await client.quoteOrder(args);
        break;

      case "create_order":
        result = await client.createOrder({ orderType: "order", ...args });
        break;

      case "get_order": {
        const { orderId } = z.object({ orderId: z.string() }).parse(args);
        result = await client.getOrder(orderId);
        break;
      }

      case "search_orders": {
        const params = z.record(z.string()).parse(
          Object.fromEntries(
            Object.entries(args as Record<string, unknown>).map(([k, v]) => [k, String(v)])
          )
        );
        result = await client.searchOrders(params);
        break;
      }

      case "cancel_order": {
        const { orderId } = z.object({ orderId: z.string() }).parse(args);
        result = await client.cancelOrder(orderId);
        break;
      }

      case "get_shipment_methods":
        result = await client.getShipmentMethods();
        break;

      default:
        return {
          content: [{ type: "text", text: `Unknown tool: ${name}` }],
          isError: true,
        };
    }

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      content: [{ type: "text", text: `Error: ${message}` }],
      isError: true,
    };
  }
});

// ── Start ─────────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Gelato MCP server running on stdio");
