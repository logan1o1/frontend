import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Sell.css";
const Sell = () => {
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  return (
    <div>
      <h1 className="h1">
        Sell Your Used Books,Let Your Junior Learn more better Than You
      </h1>
      <div className="sellForm">
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField id="outlined-basic" label="Author" variant="outlined" />
        <TextField id="outlined-basic" label="Price" variant="outlined" />
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Category</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={category}
            label="status"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"CS"}>CS</MenuItem>
            <MenuItem value={"ECE"}>ECE</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Condition</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={condition}
            label="status"
            onChange={(e) => setCondition(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Good"}>Good</MenuItem>
            <MenuItem value={"Bad"}>Bad</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Sell;
