import { TextField } from "@mui/material";
import React from "react";
import './Sell.css'
const Sell = () => {
  return (
    <div className="container">
      <h1 className="h1">Sell  Your Used Books,Let Your Junior Learn more better Than You</h1>
      <div className="sell">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </div>
  );
};

export default Sell;
