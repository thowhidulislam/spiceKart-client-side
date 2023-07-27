import axios from "axios";
import { useEffect, useState } from "react";

const useProductDetail = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://spice-kart-server-side.vercel.app/inventory/${id}`;
    axios.get(url).then(function (response) {
      setProduct(response.data);
    });
  }, [id]);
  return [product, setProduct];
};

export default useProductDetail;
