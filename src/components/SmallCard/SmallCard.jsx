import React from "react";
import styles from "./smallCard.module.css"

function SmallCard() {
  const details = [
    {
      title: "Total Employees",
      count: "1562",
    },
    {
      title: "Total WH",
      count: "625K",
    },
    {
      title: "Total Managers",
      count: "26",
    },
    {
      title: "Total Executive",
      count: "25",
    },
  ];

  return (
    <div className={styles.container}>
      {details?.map((detail) => (
        <div className={styles.childBox}>
    
        <div style={{position : "absolute" , zIndex : 111 , color : 'red' }}>

          <p>{detail.title}</p>
          <h2>{detail.count}</h2>
        </div>
        </div>
      ))}
    </div>
  );
}

export default SmallCard;
