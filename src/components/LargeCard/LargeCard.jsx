import React from "react";
import styles from "./largeCard.module.css";
function LargeCard() {
  const details = [
    {
      title: "Total Present Days",
    },
    {
      title: "Work break balance",
    },
    {
      title: "Top 5 Days by Break hours",
    },
    {
      title: "Emotional Profiling by work hours",
    },
  ];

  return (
    <div className={styles.container}>
      {details?.map((detail) => (
        <div className={styles.childBox}>
          <div style={{ position: "absolute", zIndex: 111, color: "red" }}>
            <h2>{detail.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LargeCard;
