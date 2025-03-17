import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetch = <T>(url: string | string[]): FetchState<T[]> => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSingleUrl = async (singleUrl: string): Promise<T> => {
      const response = await fetch(singleUrl);
      return response.json();
    };

    (async () => {
      try {
        if (Array.isArray(url)) {
          const responseArray = await Promise.all(url.map(fetchSingleUrl));
          setData(responseArray.flat() as T[]);
        } else {
          const singleUrlData  = await fetchSingleUrl(url);
          setData(Array.isArray(singleUrlData) ? [...singleUrlData] : [singleUrlData]);
        }
      } catch (error) {
        setError("Произошла ошибка!");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { data, isLoading, error };
};
