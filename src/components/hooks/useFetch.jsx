import { useEffect, useState } from "react";

const UseFetch = (url, initailState) => {
  const [data, setData] = useState(initailState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not connect to server");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return [data, error, loading];
};

export default UseFetch;
