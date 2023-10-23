import React from "react";

export default function Error(error) {
  return (
    <div className="card">
      <div className="card_inside">
        <div>Error: {error.error.message}</div>
      </div>
    </div>
  );
}
