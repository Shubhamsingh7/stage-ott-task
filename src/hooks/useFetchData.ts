import { useEffect, useState } from "react";
import { Story } from "../types/story";
import { axiosInstance } from "../utils/axios";


const useFetchData = (url: string) => {
    const [data, setData] = useState<Story[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axiosInstance.get<Story[]>(url);
          setData(response.data);
          setLoading(false);
        } catch (error:any) {
          setError(error?.message);
          setLoading(false);
        }
      };
  
      fetchData();
  
    }, [url]); 
  
    return { data, loading, error };
  };
  
  export default useFetchData;