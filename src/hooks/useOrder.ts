import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]); //genere

  const addItem = (item : MenuItem) => {

    const itemExist = order.find(orderItem => orderItem.id === item.id)
    if(itemExist){
        const updateOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: +1} : orderItem)
        setOrder(updateOrder)
    }else{
        const newItem : OrderItem = {...item, quantity:1}
        setOrder([...order, newItem])
    }

    
  };

  return {
    order,
    addItem,
  };
}
