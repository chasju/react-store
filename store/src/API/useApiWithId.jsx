import { useState, useEffect } from "react";

function useApiWithId(url) {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();

        if (response.ok) {
          setPost(json);
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
  return { post, isLoading, isError };
}

export default useApiWithId;
