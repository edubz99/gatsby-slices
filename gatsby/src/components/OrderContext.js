import React, { useState } from 'react';

// Create a order context
const OrderContext = React.createContext();

// Create a provider for our state to accessed at a higher level
export function OrderProvider({ children }) {
  // We need to add our state in here
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
