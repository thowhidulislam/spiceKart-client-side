import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./ProductReport.css";

const ProductReport = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const url = `https://spice-kart-server-side.vercel.app/inventory/`;
      const { data } = await axios.get(url);
      setProducts(data);
      console.log(data);
    };
    getProducts();
  }, []);
  return (
    <div className="container my-5 text-center">
      <h1 className="mb-5">Product Reports</h1>
      <BarChart
        className="w-50 mx-auto  table-responsive"
        width={500}
        height={300}
        data={products}
        margin={{
          top: 20,
          right: 30,
          left: 25,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="email" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="name" stackId="a" fill="#8884d8" />
        <Bar dataKey="quantity" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ProductReport;
