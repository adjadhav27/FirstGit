import React, { useState } from "react";
import { allContext } from './store/AllContext';
import Header from './components/Header';
import SellerForm from './components/SellerForm';
import CustomerForm from './components/CustomerForm';

function App() {

  const [showCard, setShowCard] = useState(false);
  const [sellerFormData, setSellerFormData] = useState([]);
  const [customerFormData, setCustomerFormData] = useState([]);

  return (
    <allContext.Provider value={{showCard, setShowCard, sellerFormData, setSellerFormData, customerFormData, setCustomerFormData}}> 
      <Header/>
      <SellerForm/>
      <CustomerForm/>
    </allContext.Provider>
  );
}

export default App;
