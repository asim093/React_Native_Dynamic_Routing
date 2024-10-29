import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

interface UseFetchResponse<T> {
  data: T | null;
  error: string;
  loading: boolean;
}

const UseFetch = <T,>(url: string): UseFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, [url]); // URL change hone par fetch call dobara hoga

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const prData = await res.json();
      setData(prData);
    } catch (error) {
      setError((error as Error).message); // Type assertion for error
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading };
};

export default UseFetch;
