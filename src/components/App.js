import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { css } from "styled-components";

import CurrencyInputContainer from "./CurrencyInputContainer";
const API =
  "http://www.apilayer.net/api/live?access_key=0c8c9795c7dc626c2a9a2284aa38a11e&format=1";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

function App() {
  const [data, setData] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
        let cancel = false;
        const fetchData = async () => {
          setIsError(false);
          setIsLoading(true);
    
          try {
            const result = await axios(API);
    
            if (cancel) {
              return;
            }
            setData(result.data);
          } catch (error) {
            setIsError(true);
            console.log('Something went wrong', isError);
          }
    
          setIsLoading(false);
        };
        setIsLoading(false);
        fetchData();
        return () => {
          cancel = true;
        };
      }, [setData]);

  return (
    <div>
      <h1>Currency Converter</h1>
      {!isLoading && data !== undefined ? (
      <CurrencyInputContainer {...data} />
      ) : (
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={100}
          color={"#123abc"}
          loading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
