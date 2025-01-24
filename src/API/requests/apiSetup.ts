import { getCookie } from "@/services/getCookie";

export const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body }: { body: string | FormData }) => {
    const csrfToken = getCookie('csrftoken');

    const headers: HeadersInit = {};
    let fetchOptions: RequestInit = {
      method: "POST",
      credentials: 'include',
    };

    if (typeof body === 'string') {
      headers["Content-Type"] = "application/json";
      fetchOptions.body = body;
    } else {
      fetchOptions.body = body;
    }

    headers["X-CSRFToken"] = csrfToken || "";
    fetchOptions.headers = headers;

    const response = await fetch(baseUrl, fetchOptions);
    const json = await response.json();

    if (json.errors) {
      return { error: json.errors[0] };
    }

    return { data: json.data };
  };