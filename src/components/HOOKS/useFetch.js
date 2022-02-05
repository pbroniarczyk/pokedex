import { useEffect, useState } from "react";

export const useFetch = ({ url, init }) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const response = await fetch(url, init);

      if (response.status === 200) {
        const rawData = await response.json();
        setLoading(false);
        setData(rawData);
      } else {
        console.error(`Error ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error ${error}`);
    }
  }, []);

  return { data, isLoading };
};
