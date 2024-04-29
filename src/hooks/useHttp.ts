import { useEffect, useState } from "react";
import { http } from "../api";

export default function useHttp<T>(request: string, deps: unknown[]) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await http<T>(request);
      setData(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "some error");
    } finally {
      setIsLoading(false);
    }
  };

  const repeatRequest = () => {
    setError(null);
    getData();
  };

  useEffect(() => {
    getData();
  }, deps);

  return { data, isLoading, error, repeatRequest };
}
