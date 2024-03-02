import React, { useContext } from "react";
import { allContext } from "../store/AllContext";
import { createPortal } from "react-dom";

const Card = () => {
  const { setShowCard, customerFormData, setCustomerFormData } =
    useContext(allContext);

  //   let totalQty = customerFormData.reduce((acc, curr) => {
  //     console.log(`current item: ${JSON.stringify(curr)}`);
  //     const lQty = Number(curr.lQty) || 0;
  //     const mQty = Number(curr.mQty) || 0;
  //     const sQty = Number(curr.sQty) || 0;

  //     return acc + lQty + mQty + sQty
  // }, 0);

  const handleDecrease = (id, size) => {
    setCustomerFormData(prev => 
      prev.map(each => each.id === id ? { 
        ...each, 
        [`${size}Qty`]: each[`${size}Qty`] > 0 ? each[`${size}Qty`] - 1 : 0 
      } : each)
    );
  };
  
  const handleIncrease = (id, size) => {
    setCustomerFormData(prev => 
      prev.map(each => each.id === id ? { 
        ...each, 
        [`${size}Qty`]: each[`${size}Qty`] + 1 
      } : each)
    );
  };

  // const handleDecrease =(id)=>{
  //   setCustomerFormData(prev=>prev.map((each)=>each.id ===id ? {...each,qty: each.qty > 0 ? each.qty-1 : 0} : each))
  // }

  // const handleIncrease =(id)=>{

  //   setCustomerFormData(prev=>prev.map((each)=>each.id===id ? {...each, qty:each.qty+1} : each))
  // }

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-medium bg-backdrop">
      <div className="border-2 w-96  bg-gray-500 text-gray-50 shadow-lg z-50 rounded-lg">
        <header className="p-2 ml-2 text-2xl font-semibold" id="modal-title">
          Your Cart
        </header>
        <div className="text-xl ml-4 max-h-80 overflow-auto">
          {customerFormData.map((item) => (
            <li key={item.id}>
              <div className="bg-slate-400 p-3 rounded-lg m-2">
                <h2>{item.name}</h2>
                <p>Quantity: </p>
                <p>
                  {" "}
                  L-{item.lQty}
                  <button
                    className="px-4 py-2 rounded-md mr-4 mt-4 bg-green-600"
                    onClick={() => handleIncrease(item.id, "l")}
                  >
                    +
                  </button>
                  <button
                    className="px-4 py-2 rounded-md ml-4 mt-4 bg-red-600"
                    onClick={() => handleDecrease(item.id, "l")}
                  >
                    -
                  </button>
                </p>
                <p>
                  {" "}
                  M-{item.mQty}
                  <button
                    className="px-4 py-2 rounded-md mr-4 mt-4 bg-green-600"
                    onClick={() => handleIncrease(item.id, "m")}
                  >
                    +
                  </button>
                  <button
                    className="px-4 py-2 rounded-md ml-4 mt-4 bg-red-600"
                    onClick={() => handleDecrease(item.id, "m")}
                  >
                    -
                  </button>
                </p>
                <p>
                  S-{item.sQty}
                  <button
                    className="px-4 py-2 rounded-md mr-4 mt-4 bg-green-600"
                    onClick={() => handleIncrease(item.id, "s")}
                  >
                    +
                  </button>
                  <button
                    className="px-4 py-2 rounded-md ml-4 mt-4 bg-red-600"
                    onClick={() => handleDecrease(item.id, "s")}
                  >
                    -
                  </button>
                </p>
                <p>Item Total:${item.price}</p>
                <p>
                  Amount : $
                  {item.price * item.lQty +
                    item.price * item.mQty +
                    item.price * item.sQty}
                </p>

                {/* <button
                  className="px-4 py-2 rounded-md mr-4 mt-4 bg-green-600"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>

                <button
                  className="px-4 py-2 rounded-md ml-4 mt-4 bg-red-600"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button> */}
              </div>
            </li>
          ))}
        </div>

        <footer className="mt-4 mb-4 bg-gray-700 p-3 rounded-b-lg">
          <div className="bg-slate-400 p-3 rounded-lg m-2">
            Total Amount: $
            {customerFormData.reduce(
              (total, item) =>
                total +
                item.price * item.lQty +
                item.price * item.sQty +
                item.price * item.mQty,
              0
            )}
          </div>
          <button
            className="px-2 ml-2 mr-2 border-red-500 bg-red-500 text-white rounded-xl"
            onClick={() => setShowCard(false)}
          >
            Close
          </button>

          <button className="px-2 ml-2 mr-2 border-blue-500 bg-blue-500 text-white rounded-xl">
            Order
          </button>
        </footer>
      </div>
    </div>,
    document.getElementById("overlay")
  );
};

export default Card;
