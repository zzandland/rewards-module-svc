import React from 'react';
import styled from 'styled-components';

const MiniPledgeForm = (props) => (
  <div className='miniPledgeForm'>
    <form>
      <LabelWrapper>Pledge amount</LabelWrapper>
      <div>
        <CurrencyWrapper htmlFor={`${props.projectId}pledgeForm`}>$</CurrencyWrapper>
        <InputWrapper type='text' id={`${props.projectId}pledgeForm`} defaultValue={`${props.pledgeAmount}`} min={`${props.pledgeAmount}`}></InputWrapper>
      </div>
      <div>
        <Continue>Continue</Continue>
      </div>
    </form>
  </div>
);

//styled Components for MiniPledgeForm component
const LabelWrapper = styled.label`
  font-family: 'Barlow', sans-serif;
  font-size: 12px;
`;

const CurrencyWrapper = styled.label`
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  border: solid 1px;
  border-color: rgb(192, 192, 192);
  display: flex inline-block;
  align-items: center;
  justify-content: center;
  padding-top: 1.1%;
  padding-bottom: 2.2%;
  padding-right: 3%;
  padding-left: 3%;
`;

const InputWrapper = styled.input`
  box-sizing: border-box;
  padding: 1.5%;
  width: 90%;
`;

const Continue = styled.button`
  display: flex;
  justify-content: center;
  background-color: rgb(0, 158, 116);
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  color: rgb(255, 255, 255);

  :hover {
    background-color: rgb(3, 115, 98);
  }
`;

export default MiniPledgeForm;
