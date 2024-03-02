import React, { useState, useEffect, useContext } from "react";
import { allContext } from "../store/AllContext";

export const SellerForm = () => {
  const { sellerFormData, setSellerFormData } = useContext(allContext);

  const [sellerDataObject, setSellerDataObject] = useState({
    name: "",
    id: "",
    description: "",
    price: "",
    l: "",
    m: "",
    s: "",
  });

  const handleChange = (event) => {
    setSellerDataObject({
      ...sellerDataObject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSellerFormData((arr) => [...arr, sellerDataObject]);
  };

  useEffect(() => {
    if (sellerFormData.length > 0)
      localStorage.setItem("prod", JSON.stringify(sellerFormData));
  }, [sellerFormData]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("prod"));
    if (savedData) setSellerFormData(savedData);
  }, [setSellerFormData]);    // Updation

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap w-full p-4 bg-gray-200 shadow rounded-lg"
    >
      <div className="flex flex-col border-b-2 pb-4 w-full md:w-1/3">
        <label htmlFor="productName" className="font-bold text-gray-600 mb-1">
          Brand Name
        </label>
        <input
          id="productName"
          name="name"
          placeholder="T-shirt Brand Name"
          className="p-2 border rounded"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col border-b-2 pb-4 w-full md:w-1/3">
        <label htmlFor="productId" className="font-bold text-gray-600 mb-1">
          Product Id
        </label>
        <input
          id="productId"
          type="text"
          name="id"
          placeholder="Product Id"
          className="p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col border-b-2 pb-4 w-full md:w-1/3">
        <label
          htmlFor="productDescription"
          className="font-bold text-gray-600 mb-1"
        >
          Product Description
        </label>
        <input
          id="productDescription"
          name="description"
          placeholder="Product Description"
          className="p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col border-b-2 pb-4 w-full md:w-1/3">
        <label htmlFor="productPrice" className="font-bold text-gray-600 mb-1">
          Product Price
        </label>
        <input
          id="productPrice"
          name="price"
          placeholder="Product Price"
          className="p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      <div className="flex border-b-2 pb-4 w-full gap-2 md:gap-4">
        <div>
          <label htmlFor="largeQty" className="font-bold text-gray-600 mb-1">
            Large
          </label>
          <input
            id="largeQty"
            name="l"
            type="number"
            placeholder="Large Size Quantity"
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="mediumQty" className="font-bold text-gray-600 mb-1">
            Medium
          </label>
          <input
            id="mediumQty"
            name="m"
            type="number"
            placeholder="Medium Size Quantity"
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="smallQty" className="font-bold text-gray-600 mb-1">
            Small
          </label>
          <input
            id="smallQty"
            name="s"
            type="number"
            placeholder="Small Size Quantity"
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-400 w-full rounded-md p-2 text-white font-bold mt-4"
      >
        Add Product
      </button>
    </form>
  );
};

export default SellerForm;
