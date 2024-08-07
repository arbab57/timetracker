import { useEffect, useState } from "react";

const UseFetch = (url, initailState, dependencies) => {
  const AccessToken = localStorage.getItem("accessToken");
  const [data, setData] = useState(initailState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
      // console.log("Dep ==>", dependencies);
      const fetchData = async () => {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              authentication: `Bearer ${AccessToken}`,
            },
          });
          const data = await response.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          console.log(error.message);
          setLoading(false);
        }
      };

      fetchData();
    },
    dependencies ? dependencies : []
  );

  return [data, error, loading];
};

export default UseFetch;
