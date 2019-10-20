import React, { useState, useEffect, useRef } from "react";
import { css } from "styled-components";

import CurrencyDropdown from "./CurrencyDropdown";
import { currencyFormatter } from '../Utils'

const inputStyle = css`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export function convertCurrency(
  quotes,
  currencySelected,
  inputValue,
  isSource,
  isSourceActive
) {
  if (isSource) {
    return isSourceActive
      ? Number(inputValue)
      : currencyFormatter['/'](inputValue, quotes[currencySelected]);
  }
  if (currencySelected in quotes) {
    return isSourceActive
      ? currencyFormatter['*'](inputValue, quotes[currencySelected])
      : Number(inputValue) 
  }
}

function CurrencyInput({ currencySelected, quotes }) {
  const [amountUSD, setUSD] = useState(0);
  const [amountOther, setCurrency] = useState(0);
  const [activeInputUSD, setActiveInputUSD] = useState(false);

  useEffect(() => {
    setActiveInputUSD(true);
  }, [amountUSD]);
  useEffect(() => {
    setActiveInputUSD(false);
  }, [amountOther]);

  const usd = e => setUSD(e.target.value);
  const cur = e => setCurrency(e.target.value);

  const usdConvert = activeInputUSD
    ? amountUSD
    : convertCurrency(
        quotes,
        currencySelected,
        amountOther,
        true,
        activeInputUSD
      );
  const otherConvert = !activeInputUSD ? amountOther : convertCurrency(
        quotes,
        currencySelected,
        amountUSD,
        false,
        activeInputUSD
      );
  return (
    <div>
        <input
          className={inputStyle}
          type="number"
          value={usdConvert}
          onChange={usd}
        />
        <input
          className={inputStyle}
          type="number"
          value={otherConvert}
          onChange={cur}
        />
    </div>
  );
}

export const displayExchangeRate = (source, otherCurrency, quotes) => {
  const selectedCurrency = otherCurrency !== undefined ? otherCurrency.slice(3) : 'Select currency'
  const currencyValue = otherCurrency ? quotes[otherCurrency] : ''
  return (
    <React.Fragment>
      <span>{`1 ${source} = ${currencyFormatter['/'](1, currencyValue)} ${selectedCurrency}`}</span> -
      <span>{`1 ${selectedCurrency} = ${currencyFormatter['*'](1, currencyValue)} ${source}`}</span>
    </React.Fragment>
  );
};

export default function CurrencyInputContainer(props) {
  const [currencySelected, setCurrency] = useState();

  const getSelectedCurrency = value => setCurrency(value);

  return (
    <div style={{ background: "#C2BBFA", margin: 20, padding: 20 }}>
      <h2>input container</h2>
      <React.Fragment>
        {displayExchangeRate(props.source, currencySelected, props.quotes)}
        <CurrencyDropdown
          {...props}
          getSelectedCurrency={getSelectedCurrency}
        />
        <CurrencyInput
          quotes={props.quotes}
          currencySelected={currencySelected}
        />
      </React.Fragment>
    </div>
  );
}
