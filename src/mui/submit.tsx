import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectVariants() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 100, marginTop: -2 }}
      >
        <InputLabel id="demo-simple-select-standard-label">payment</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>USD</MenuItem>
          <MenuItem value={20}>K-Won</MenuItem>
          <MenuItem value={30}>UZS</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
