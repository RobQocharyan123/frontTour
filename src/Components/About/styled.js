import { Button, Col } from 'antd';
import styled from 'styled-components';

export const AboutGeneralBlock = styled(Col)`
  width: 100%;
  height: calc(100vh - 250px);
  background-color: rgba(247, 247, 247, 1);
  display: grid;
  place-items: center;
  margin-top: 80px;
`;

export const AboutInfoBlock = styled(Col)`
  width: 80%;
  height: 500px;
  background-color: rgba(255, 255, 255, 1);
  padding: 59px 75px;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
  overflow: auto;
`;

export const AboutItemBlock = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40%;
`;

export const AboutTitleBlock = styled(Col)`
  font-weight: 700;
  font-size: 50px;
  color: #000000;
  text-align: center;
`;

export const AboutButtonBlock = styled(Col)`
  height: 40px;
  border-radius: 60px;
  font-weight: 700;
  font-size: 18px;
  background-color: #39ba39;
  border-color: #39ba39;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutTextBlock = styled(Col)`
  p {
    margin-top: 10px;
  }
`;
