import { useState, useCallback, useMemo } from "react";
import axios from "axios";

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [requestConfig, setRequestConfig] = useState({});

  const fecthData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios[method.toLowerCase()](url, {
        ...requestConfig,
      });
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [method, url, requestConfig]);

  const value = useMemo(() => {
    return {
      response,
      error,
      loading,
      url,
      method,
      requestConfig,
      fecthData,
      setResponse,
      setError,
      setLoading,
      setUrl,
      setMethod,
      setRequestConfig,
    };
  }, [response, error, loading, url, method, requestConfig, fecthData]);

  return value;
};

export default useAxios;
