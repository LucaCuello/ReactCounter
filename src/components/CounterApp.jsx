import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f4a261",
    },
    error: {
      main: "#e63946",
    },
  },
});

export const CounterApp = ({ value, stock }) => {
  const [counter, setCounter] = useState(0);

  const handdleSum = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  const handdleSubstract = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const handdleReset = () => setCounter(value);

  return (
    <div className="counter-app--container">
      <ThemeProvider theme={theme}>
        <h1>CounterApp</h1>
        <p>Current stock: {stock}</p>
        <h2> {counter} </h2>
        <div className="controllers">
          <Button
            variant="contained"
            onClick={handdleSubstract}
            disabled={counter === 0 ? true : false}
          >
            -
          </Button>
          <Button
            variant="contained"
            onClick={handdleSum}
            disabled={counter >= stock ? true : false}
          >
            +
          </Button>
        </div>
        <div className="reset">
          <Button variant="contained" color="error" onClick={handdleReset}>
            Reset
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};
