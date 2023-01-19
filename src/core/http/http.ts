export class HttpClient {
  async request(url: string, method: string, body: any): Promise<any> {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
    });
  }
}
