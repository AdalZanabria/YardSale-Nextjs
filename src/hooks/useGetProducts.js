import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(API);
      setProducts(result.data);
    }
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
