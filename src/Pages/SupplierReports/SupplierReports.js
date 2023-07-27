import axios from "axios";
import React, { useEffect, useState } from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const SupplierReports = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const url = `https://spicekert-server.onrender.com/inventory/`;
      const { data } = await axios.get(url);
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className="container my-5">
      <div className="tiny-chart">
        <h1 className="text-center mb-5">Supplier Reports</h1>
        <LineChart
          width={450}
          height={400}
          data={products}
          className="w-50 mx-auto  table-responsive"
        >
          <Line
            type="monotone"
            dataKey="quantity"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <XAxis dataKey="supplierName" />
          <YAxis />
          <Tooltip />
          <Legend></Legend>
        </LineChart>
      </div>
    </div>
  );
};

export default SupplierReports;
