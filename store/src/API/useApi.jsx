import { useState, useEffect } from "react";

function useApi(url) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();

        if (response.ok) {
          setPosts(json);
          setIsLoading(false);
        }
        setIsError(true);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    }

    getData();
  }, [url]);
  return { posts, isLoading, isError };
}

export default useApi;
