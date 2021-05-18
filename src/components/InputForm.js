import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import { yearDifference, calculateBrand, calculatePlan } from "./helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const InputForm = ({ setResume, setLoading }) => {
  const [data, setSata] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);

  // destructuring data
  const { brand, year, plan } = data;

  // read data from form and set then in state
  const getInfo = (e) => {
    setSata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // when the user clicks submit
  const handleSumbit = (e) => {
    e.preventDefault();

    if (!brand.trim() || !year.trim() || !plan.trim()) {
      setError(true);
      return;
    }
    setError(false);

    // base 2000
    let result = 2000;

    // get the difference of years
    const difference = yearDifference(year);

    // for each year you have to subtract 3%
    result -= (difference * 3 * result) / 100;

    // Asian 5%, American 15%, European 30%
    result = calculateBrand(brand) * result;

    // basic increases 20% and premium 50%
    const incrementPlan = calculatePlan(plan);
    result = parseInt(incrementPlan * result).toFixed(2);

    // add spiner
    setLoading(true);

    // emulating api call
    setTimeout(() => {
      // remove spiner
      setLoading(false);

      // set info to the principal component
      setResume({
        quotation: Number(result),
        data,
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSumbit}>
      {error ? <Error>All the fields are required</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={getInfo}>
          <option value="">-- Select One --</option>
          <option value="Asian">Asian</option>
          <option value="American">American</option>
          <option value="European">European</option>
        </Select>
      </Field>
      <Field>
        <Label>year</Label>
        <Select name="year" value={year} onChange={getInfo}>
          <option value="">-- Select One --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="Premium"
          checked={plan === "Premium"}
          onChange={getInfo}
        />
        Premium
        <InputRadio
          type="radio"
          name="plan"
          value="Basic"
          checked={plan === "Basic"}
          onChange={getInfo}
        />
        Basic
      </Field>

      <Button type="submit">Quote</Button>
    </form>
  );
};

InputForm.propTypes = {
  setResume: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default InputForm;
