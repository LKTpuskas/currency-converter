import React from "react";
import { Dropdown } from "semantic-ui-react";

function getCurrency(quotes) {
  const currencies = Object.keys(quotes).map(key => key.slice(3));
  return currencies.map(currency => ({
    key: currency,
    text: currency,
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
  const options = getCurrency(props.quotes)
  return (
    <div>
      <Dropdown
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
      <Dropdown
        placeholder="Select a currency"
        fluid
        onChange={handleChange}
        value={value}
        search
        selection
        defaultValue={options[49]}
        options={options}
      />
    </div>
  );
}

