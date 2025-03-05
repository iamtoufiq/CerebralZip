import { useState, useEffect } from "react";

interface ApiResponse {
  [key: string]: unknown; // Update with a specific type based on API response structure
}

const BASE_URL = "http://3.111.196.92:8020/api/v1/";
const AUTH_HEADER = {
  Accept: "application/json",
  Authorization: "Basic dHJpYWw6YXNzaWdubWVudDEyMw==",
};

const useFetchMultipleApis = (endpoints: string[]) => {
  const [data, setData] = useState<Record<string, ApiResponse | null>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);

      try {
        const requests = endpoints.map(async (endpoint) => {
          const response = await fetch(`${BASE_URL}${endpoint}`, { method: "GET", headers: AUTH_HEADER });

          if (!response.ok) {
            throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
          }

          const result: ApiResponse = await response.json();
          return { endpoint, result };
        });

        const results = await Promise.all(requests);

        const formattedData: Record<string, ApiResponse | null> = {};
        results.forEach(({ endpoint, result }) => {
          formattedData[endpoint] = result;
        });

        setData(formattedData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [endpoints]);

  return { data, loading, error };
};

export default useFetchMultipleApis;
