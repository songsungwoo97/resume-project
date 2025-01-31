import { useState, useEffect } from "react";
import { fetchApiData } from "../api/apiService";

export const useApiData = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchApiData();
        setApiData(data);
      } catch (e) {
        setError(e.maessage);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { apiData, loading, error };
};
