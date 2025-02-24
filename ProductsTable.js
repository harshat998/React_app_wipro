// ProductsTable.js
import React, { useState } from "react";

// Sample product data
const initialProducts = [
  {
    id: 1,
    name: "Blue Denim Jacket",
    tags: ["Winter", "Fashion"],
    mrp: "$60",
    stock: 12,
  },
  {
    id: 2,
    name: "Leather Brown Jacket",
    tags: ["Winter", "Premium"],
    mrp: "$120",
    stock: 5,
  },
  {
    id: 3,
    name: "Army Green Jacket",
    tags: ["Outdoor"],
    mrp: "$80",
    stock: 20,
  },
  {
    id: 4,
    name: "Black Bomber Jacket",
    tags: ["Winter"],
    mrp: "$90",
    stock: 0,
  },
];

function ProductsTable() {
  const [products] = useState(initialProducts);
  const [showActive, setShowActive] = useState(true);

  // Toggle active/inactive (dummy example)
  const toggleActive = () => {
    setShowActive(!showActive);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header and filter button */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Products</h1>
        <button
          onClick={toggleActive}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showActive ? "Active" : "All"}
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Tags</th>
            <th className="p-2 border">MRP</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">
                {product.tags.join(", ")}
              </td>
              <td className="p-2 border">{product.mrp}</td>
              <td className="p-2 border">
                {product.stock > 0 ? product.stock : "Out of Stock"}
              </td>
              <td className="p-2 border text-blue-500 cursor-pointer">
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
