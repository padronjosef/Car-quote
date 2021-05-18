import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spiner from "./components/Spiner";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const WrapperForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    quotation: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, setLoading] = useState(false);

  // destructuring data
  const { quotation, data } = resume;

  return (
    <Wrapper>
      <Header title="Insurance Quote" />
      <WrapperForm>
        <InputForm setResume={setResume} setLoading={setLoading} />
        {loading ? (
          <Spiner />
        ) : (
          <>
            <Resume data={data} />
            <Result quotation={quotation} />
          </>
        )}
      </WrapperForm>
    </Wrapper>
  );
}

export default App;
