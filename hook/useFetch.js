import { useEffect, useState } from "react";
import { MESSAGES } from "../constants/data";
import axios from "axios";

/**
 * @param {Object} fetchOptions
 * @param {"GET" | "POST" | "PUT" | "DELETE" } [fetchOptions.method] - CRUD methods
 * @param {String} fetchOptions.endpoint
 * @param {Object} fetchOptions.queries
 */
const useFetch = ({
  method = "GET",
  endpoint = "",
  queries = {},
  ...fetchOptions
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = {
    method: method,
    url: `${process.env.EXPO_PUBLIC_RAPID_API_BASE_PATH}/${endpoint}`,
    params: {
      ...queries,
      //   query: "Python developer in Texas, USA",
      //   page: "1",
      //   num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": process.env.EXPO_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.EXPO_PUBLIC_RAPID_API_HOST,
    },
  };

  const startFetching = async () => {
    setIsLoading(true);
    try {
      const response = await axios(options);

      if (response.status) {
        setData(response.data.data);
      }
    } catch (err) {
      setError(err);
      alert(MESSAGES.error);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    setIsLoading(true);
    startFetching();
  };

  useEffect(() => {
    startFetching();
  }, []);

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useFetch;
