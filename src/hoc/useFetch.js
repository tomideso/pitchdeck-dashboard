import { useEffect, useState } from "react";

const useFetch = ({ url, type = [], httpClient, method = "GET", body }) => {
  const [data, setData] = useState(type);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const fetchData = () => {
    switch (true) {
      case /post/i.test(method):
        return httpClient.post(url, body);
      default:
        return httpClient.get(url);
    }
  };

  useEffect(() => {
    let unmounted = false;

    !unmounted && setLoading(true);
    setStatus("loading");
    fetchData()
      .then((data) => {
        if (!unmounted) {
          setLoading((l) => false);
          setStatus("complete");
          setData((d) => data);
          setError((l) => null);
        }
      })
      .catch((error) => {
        if (!unmounted) {
          setLoading((l) => false);
          setStatus("error");
          setData((t) => type);
          setError((l) => error);
        }
      });

    return () => {
      unmounted = true;
    };
  }, [url, body, refresh]);

  const reFetch = () => {
    setRefresh((n) => n + 1);
  };

  return { data, setData, loading, error, status, reFetch };
};

export default useFetch;
