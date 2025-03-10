import { useState, useEffect } from "react";
import apiConfig from "../services/config";

interface FetchResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const BASE_URL = apiConfig.baseURL;
const AUTH_HEADER = {
  Accept: apiConfig.Accept,
  Authorization: apiConfig.Authorization,
};

const useFetchData = <T>(endpoint: string): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: "GET",
          headers: AUTH_HEADER,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: T = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;
