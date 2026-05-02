export default {
  async fetch(request) {
    const target = new URL(request.url);
    target.protocol = "https:";
    target.hostname = "lifehandoffkit.pages.dev";

    const response = await fetch(target.toString(), request);
    const headers = new Headers(response.headers);
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
