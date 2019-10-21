import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CurrencyDropdown from "./CurrencyDropdown";
import { currencyFormatter } from "../Utils";

const WHITE = "#f6f7f8";
const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  grid-gap: 48px;
`;

const LabelContainer = styled(Container)`
  color: ${WHITE};
  font-size: 16px;
`;

const Input = styled.input`
  padding: 40px 15px;
  background: #2b3950;
  border: 0;
  color: white;
  font-size: 40px;
  font-weight: normal;
`;

const Text = styled.p`
  color: ${WHITE};
  font-size: 16px;
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
      : currencyFormatter["/"](inputValue, quotes[currencySelected]);
  }
  if (currencySelected in quotes) {
    return isSourceActive
      ? currencyFormatter["*"](inputValue, quotes[currencySelected])
      : Number(inputValue);
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

  const otherConvert = !activeInputUSD
    ? amountOther
    : convertCurrency(
        quotes,
        currencySelected,
        amountUSD,
        false,
        activeInputUSD
      );
      
  return (
    <Container>
      <Input type="number" value={usdConvert} onChange={usd} />
      <Input type="number" value={otherConvert} onChange={cur} />
    </Container>
  );
}
export const displayExchangeRate = (source, otherCurrency, quotes) => {
  const selectedCurrency =
    otherCurrency !== undefined ? otherCurrency.slice(3) : "Select currency";
  const currencyValue = otherCurrency ? quotes[otherCurrency] : "";
  const ifNoCurrencySelected = selectedCurrency === "Select currency";
  return (
    <React.Fragment>
      {ifNoCurrencySelected ? (
        <Text>Please select your currency</Text>
      ) : (
        <LabelContainer>
          <p>{`1 ${source} = ${currencyFormatter["/"](
            1,
            currencyValue
          )} ${selectedCurrency}`}</p>{" "}
          <p>{`1 ${selectedCurrency} = ${currencyFormatter["*"](
            1,
            currencyValue
          )} ${source}`}</p>
        </LabelContainer>
      )}
    </React.Fragment>
  );
};
export default function CurrencyInputContainer(props) {
  const [currencySelected, setCurrency] = useState();
  const getSelectedCurrency = value => setCurrency(value);
  return (
    <React.Fragment>
      {displayExchangeRate(props.source, currencySelected, props.quotes)}
      <div>
        <CurrencyDropdown
          {...props}
          getSelectedCurrency={getSelectedCurrency}
        />
        <CurrencyInput
          quotes={props.quotes}
          currencySelected={currencySelected}
        />
      </div>
    </React.Fragment>
  );
}
