import { CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className="card">
      <div className="card_inside">
        <div>
          <CircularProgress />
        </div>
        Loading...
      </div>
    </div>
  );
}
