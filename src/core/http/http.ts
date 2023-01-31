export class HttpClient {
  async request<T>(url: string, method: string, body: any): Promise<HttpResponse<T>> {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
    });
    let json = await response.json();
    if (response.ok) {
      console.log(json);
      const res: HttpResponse<T> = {
        success: json.success,
        error: json.error,
        value: json.value,
      };
      return res;
    } else {
      const err: HttpResponse<T> = { success: false, error: json.error, value: null };
      return err;
    }
  }
}

interface HttpResponse<T> {
  success: boolean;
  error: string;
  value: T | null;
}
