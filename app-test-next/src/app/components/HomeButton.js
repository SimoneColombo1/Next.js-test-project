'use client';

import { useState } from "react";
import style from "../style/home/counter.scss"
export default function Counter() {
  const [count, setCount] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(true);

 //! Funzione che incrementa il counter fino a 10 e una volta superato il 10 inizia a rimuovere numeri fino all'1
  const updateCount = () => {
    if (isIncrementing) {
     
      if (count < 10) {
        setCount(count + 1);
      } else {
       
        setIsIncrementing(false);
        setCount(count - 1);
      }
    } else {
     
      if (count > 1) {
        setCount(count - 1);
      } else {
        
        setIsIncrementing(true);
        setCount(count + 1);
      }
    }
  };
  return (
  <section class="ButtonSection">


    <button onClick={updateCount}>click me</button>
   {count}
  </section>
  )
}