import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import CurrencyInputContainer from "./CurrencyInputContainer";

const WHITE = '#f6f7f8'
const DEEP_BLUE= '#202e46'

const API =
  "http://www.apilayer.net/api/live?access_key=0c8c9795c7dc626c2a9a2284aa38a11e&format=1";

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${DEEP_BLUE};
  padding: 20px 20px 0;
`;

const Header = styled.h1`
  color: ${WHITE};
  font-size: 32px;
  margin-bottom: 32px;
`;

function App() {
  const [data, setData] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(API);

        if (cancel) {
          return;
        }
        setData(result.data);
      } catch (error) {
        setIsError(true);
        console.log("Something went wrong", isError);
      }

      setIsLoading(false);
    };
    setIsLoading(false);
    fetchData();
    return () => {
      cancel = true;
    };
  }, [setData]);

  return (
    <Wrapper>
      <Header>Currency Converter</Header>
      {!isLoading && data !== undefined ? (
        <CurrencyInputContainer {...data} />
      ) : (
        <ClipLoader
          css={`
            display: block;
            margin: 0 auto;
            border-color: ${WHITE};
          `}
          sizeUnit={"px"}
          size={100}
          loading={isLoading}
        />
      )}
    </Wrapper>
  );
}

export default App;
