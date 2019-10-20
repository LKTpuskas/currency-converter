import React from "react";
import { shallow, mount } from "enzyme";

import { currencyFormatter } from "../../src/Utils";
import CurrencyInputContainer, {
  convertCurrency, displayExchangeRate
} from "../../src/components/CurrencyInputContainer";
import { Item } from "semantic-ui-react";

const quotes = {
  USDAED: 3.673204,
  USDAFN: 78.250404,
  USDALL: 110.950403,
  USDAMD: 476.340403
};

const setup = (extraProps = {}) => {
  const props = {
    source: 'USD',
    quotes,
    ...extraProps
  };
  return {
    props,
    wrapper: shallow(<CurrencyInputContainer {...props} />)
  };
};

describe("CurrencyInputContainer", () => {
  describe("convertCurrency", () => {
  
    describe("Other currencies input field", () => {
      it("should return the expected currency rate", () => {
        expect(convertCurrency(quotes, "USDAFN", 1, false, true)).toBe(
          "78.250"
        );
      });
      it("should return the expected input value", () => {
        expect(convertCurrency(quotes, "USDAFN", 1, false, false)).toBe(1);
      });
    });
    describe("USD input field", () => {
      it("should return the expected input value", () => {
        expect(convertCurrency(quotes, "USDAFN", 1, true, true)).toBe(1);
      });
      it("should return the expected currency rate", () => {
        expect(convertCurrency(quotes, "USDAFN", 1, true, false)).toBe("0.013");
      });
    });
    it('TEST', () => {
      const exchangeRate = displayExchangeRate('USD', 'USDAED', quotes);
      expect(exchangeRate.props.children.length).toBe(3)
    })
  });
});
