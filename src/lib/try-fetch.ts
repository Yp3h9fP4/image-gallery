import { tryCatch } from "./try-catch";

export async function tryFetch<T>(
  fetcher: () => Promise<Response>
): Promise<[T | null, Error | null]> {
  const [response, fetchError] = await tryCatch<Response>(fetcher());

  if (fetchError) {
    console.error("API request failed:", fetchError);
    throw new Error(`API request failed.`);
  }

  if (!response.ok) {
    return [
      null,
      new Error(`API request failed with status ${response.status}`),
    ];
  }

  const [json, jsonError] = await tryCatch<T>(response.json());

  if (jsonError) {
    return [null, jsonError];
  }

  return [json, null];
}
