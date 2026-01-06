import { createContext, useContext, useState } from 'react'

const OrderContext = createContext(null)

export const OrderProvider = ({ children }) => {
  const [ order, setOrder ] = useState(null)

  const openOrder = (payload = {}) => {
    setOrder(payload)
  }

  const closeOrder = () => {
    setOrder(null)
  }

  return (
      <OrderContext.Provider value={ { order, openOrder, closeOrder } }>
        { children }
      </OrderContext.Provider>
  )
}

export const useOrder = () => useContext(OrderContext)
