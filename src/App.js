import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Resume from "./components/Resume";

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
    quotation: '',
    data: {
      brand: "",
      year: "",
      plan: "",
    }
  });

  const { data } = resume

  return (
    <Wrapper>
      <Header title="Insurance Quote" />
      <WrapperForm>
        <InputForm setResume={setResume} />
        <Resume data={data} />
      </WrapperForm>
    </Wrapper>
  );
}

export default App;
