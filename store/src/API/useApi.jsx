import { useState, useEffect } from "react";

function useApi(url) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [url]);
  return { posts };
}

export default useApi;
