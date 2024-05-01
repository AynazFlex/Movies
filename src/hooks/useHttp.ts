import { useEffect, useState } from "react";
import { http } from "../api";

const cache = new Map<string, unknown>();

export default function useHttp<T>(request: string, deps: unknown[]) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await http<T>(request);
      cache.set(request, data);
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
    if (cache.has(request)) {
      setData(cache.get(request) as T);
      return;
    }

    getData();
  }, deps);

  return { data, isLoading, error, repeatRequest };
}
