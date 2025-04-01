// TODO: move to .env
const API_URL = "https://api.pexels.com/v1";
const API_KEY = "mdKQ1aRIcbODaNZoqfoKHzYhGojWmnBOJtLlsiWRKKLxQVtrkvUaDqXa";

export async function fetchPexelsImages(
  page: number = 1,
  perPage: number = 15
): Promise<Response> {
  return await fetch(`${API_URL}/curated?page=${page}&per_page=${perPage}`, {
    headers: {
      Authorization: API_KEY,
    },
  });
}
