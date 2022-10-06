import styled from 'styled-components';

export const FeedbackCard = styled.div`
  width: 500px;
  margin: 15px auto;
  padding: 25px 15px;
  border-radius: 10px;
  background-color: lightpink;
  text-align: center;
`;

export const FeedbackControl = styled.button`
  margin: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #25c2a0;
  border: none;
  transition: 200ms linear;

  :hover {
    background-color: #45d2b5;
    box-shadow: 0 0 10px 1px gray;
  }
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
