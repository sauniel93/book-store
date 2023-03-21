import { useState, useCallback, useMemo } from "react";
import axios from "axios";
import { useBookContext } from "../contexts/BookContext";

const useAxios = () => {
  const { setBooks } = useBookContext();
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [requestConfig, setRequestConfig] = useState({});

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios[method.toLowerCase()](url, {
        ...requestConfig,
      });
      setResponse(res.data);
      if (method.toLowerCase() === "get") setBooks(res.data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [method, url, requestConfig, setBooks]);

  const value = useMemo(() => {
    return {
      response,
      error,
      loading,
      url,
      method,
      requestConfig,
      fetchData,
      setResponse,
      setError,
      setLoading,
      setUrl,
      setMethod,
      setRequestConfig,
    };
  }, [response, error, loading, url, method, requestConfig, fetchData]);

  return value;
};

export default useAxios;
