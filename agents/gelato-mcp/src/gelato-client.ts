const ORDER_API_BASE = "https://order.gelatoapis.com";
const PRODUCT_API_BASE = "https://product.gelatoapis.com";

export class GelatoClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async request<T>(
    baseUrl: string,
    path: string,
    method: string = "GET",
    body?: unknown
  ): Promise<T> {
    const url = `${baseUrl}${path}`;
    const headers: Record<string, string> = {
      "X-API-KEY": this.apiKey,
      "Content-Type": "application/json",
    };

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gelato API error ${response.status}: ${errorText}`);
    }

    return response.json() as Promise<T>;
  }

  // ── Catalog ────────────────────────────────────────────────────────────────

  async listCatalogs() {
    return this.request<unknown>(PRODUCT_API_BASE, "/v3/catalogs");
  }

  async getCatalog(catalogUid: string) {
    return this.request<unknown>(PRODUCT_API_BASE, `/v3/catalogs/${catalogUid}`);
  }

  async searchProducts(catalogUid: string, filters: unknown) {
    return this.request<unknown>(
      PRODUCT_API_BASE,
      `/v3/catalogs/${catalogUid}/products:search`,
      "POST",
      filters
    );
  }

  async getProduct(productUid: string) {
    return this.request<unknown>(PRODUCT_API_BASE, `/v3/products/${productUid}`);
  }

  async listEcommerceProducts(storeId: string) {
    return this.request<unknown>(
      ORDER_API_BASE,
      `/v3/ecommerce/stores/${storeId}/products`
    );
  }

  // ── Orders ─────────────────────────────────────────────────────────────────

  async quoteOrder(orderData: unknown) {
    return this.request<unknown>(ORDER_API_BASE, "/v4/orders:quote", "POST", orderData);
  }

  async createOrder(orderData: unknown) {
    return this.request<unknown>(ORDER_API_BASE, "/v4/orders", "POST", orderData);
  }

  async getOrder(orderId: string) {
    return this.request<unknown>(ORDER_API_BASE, `/v4/orders/${orderId}`);
  }

  async searchOrders(params: Record<string, string>) {
    const query = new URLSearchParams(params).toString();
    return this.request<unknown>(ORDER_API_BASE, `/v4/orders/search?${query}`);
  }

  async cancelOrder(orderId: string) {
    return this.request<unknown>(ORDER_API_BASE, `/v4/orders/${orderId}:cancel`, "POST");
  }

  // ── Shipment ───────────────────────────────────────────────────────────────

  async getShipmentMethods() {
    return this.request<unknown>(ORDER_API_BASE, "/v3/shipment-methods");
  }
}
