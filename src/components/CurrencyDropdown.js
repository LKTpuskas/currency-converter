import React from "react";
import { Dropdown } from "semantic-ui-react";
import { convertCountryCode } from "../Utils";
import styled from "styled-components";

const GREY_BLUE = "#30455e";
const WHITE = "#fff";
// Overriding semantic-ui-react styles
// source: https://github.com/styled-components/styled-components/issues/501
const CustomDropdown = styled(Dropdown)`
  &&& {
    color: ${WHITE};
    background: ${GREY_BLUE};
    padding: 10px 15px;
    &.item {
      background: ${GREY_BLUE};
      border: 0;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  grid-gap: 48px;
`;

function getCurrency(quotes) {
  const currencies = Object.keys(quotes).map(key => key.slice(3));
  return currencies.map(currency => ({
    key: currency,
    text: convertCountryCode(currency),
    value: currency
  }));
}

export default function CurrencyDropdown(props) {
  const [value, setValue] = React.useState();
  const handleChange = (e, { value }) => {
    setValue(value);
    const originalCurrency = Object.keys(props.quotes).find(currency =>
      currency.includes(value)
    );
    props.getSelectedCurrency(originalCurrency);
  };
  const options = getCurrency(props.quotes);
  return (
    <Container>
      <CustomDropdown
        key={props.source}
        placeholder="Select a currency"
        fluid
        onChange={() => {}}
        value={props.source}
        selection
        options={[
          {
            key: props.source,
            text: props.source,
            value: props.source
          }
        ]}
      />
      <CustomDropdown
        placeholder="Select a currency"
        fluid
        onChange={handleChange}
        value={value}
        search
        selection
        options={options}
      />
    </Container>
  );
}
