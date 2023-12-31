import React from "react";

function Card({ image, name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <img
        width={100}
        height={100}
        style={{ objectFit: "cover", borderRadius: "100px" }}
        src={image}
        alt="this is nothing"
      />
      <h5>{!name ? "Name" : name}</h5>
      <button>Follow</button>
    </div>
  );
}

export default Card;
