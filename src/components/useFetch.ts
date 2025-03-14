import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
        setError("Произошла ошибка!");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { posts, isLoading, error };
};
