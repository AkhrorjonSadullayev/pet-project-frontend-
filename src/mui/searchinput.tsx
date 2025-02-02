import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

interface Film {
  title: string;
  year: number;
}

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Film[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      await sleep(1e3); // For demo purposes.
      setLoading(false);

      setOptions([...topFilms]);
    })();
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  return (
    <Autocomplete
      sx={{ width: 200 }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Pet Food"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props}>
          <Link
            to={`/${option.title.toLowerCase().replace(/\s+/g, "-")}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {option.title}
          </Link>
        </li>
      )}
    />
  );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
  { title: "Dog Food", year: 1994 },
  { title: "Cat Food", year: 1972 },
  { title: "Fish Food", year: 1974 },
  { title: "Pet Toys", year: 2008 },
  { title: "Parrot Food", year: 1957 },
  { title: "Rabbit Food", year: 1993 },
  { title: "Accessories", year: 1994 },
  { title: "Small Pet", year: 2003 },
];
