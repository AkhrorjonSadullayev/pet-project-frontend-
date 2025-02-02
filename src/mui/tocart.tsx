import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const label = { inputProps: { "aria-label": "Add to Cart" } };

export default function ToCart() {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        {...label}
        checked={checked}
        onChange={handleChange}
        icon={<ShoppingCartOutlined  sx={{color:"grey"}}/>}
        checkedIcon={<ShoppingCart sx={{ color: "#7F4D4F" }} />} // Use #7F4D4F for checked state
        disableRipple // Disable ripple effect
        sx={{
          display: "flex",
          justifyContent: "end",
          paddingRight: "20px",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "transparent", // Disable hover effect
          },
          "&:focus-visible": {
            outline: "none", // Remove blue focus ring
          },
          "& .MuiTouchRipple-root": {
            display: "none", // Completely disable ripple effect
          },
        }}
      />
    </div>
  );
}
