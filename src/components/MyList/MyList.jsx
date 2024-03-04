import React, { useState } from "react";
import ListCard from "../ListCard/ListCard";
import "./MyList.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
function MyList() {
  const [status, setStatus] = useState('');
  return (
    <div className="ListingWrapper">
       <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Status</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={status}
        label="status"
        onChange={e=>setStatus(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"sold"}>sold</MenuItem>
        <MenuItem value={"unsold"}>unsold</MenuItem>
      </Select>
    </FormControl>
      <div className="listings">
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
}

export default MyList;
