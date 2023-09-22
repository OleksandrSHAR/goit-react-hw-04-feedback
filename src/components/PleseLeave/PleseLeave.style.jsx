import styled from 'styled-components';

export const WrapFetbeck = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  text-align: center;
  background-color: ${p => p.theme.colors.aqua};
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  box-shadow: 3px 3px ${p => p.theme.colors.aquaDarck};
`;

export const FetbeckEl = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const FetbeckItem = styled.li`
  :hover {
    background-color: ${props => {
      switch (props.option) {
        case 'good':
          return '#04FF20';
        case 'neutral':
          return '#E0EB54';
        case 'bad':
          return '#FF050B';
        default:
          return null;
      }
    }};
  }
`;
export const BtFetbeck = styled.button`
  font-family: Epilogue;

  font-style: normal;
  font-weight: 500;
  padding: 3px;
  border-radius: 10px;
  border: none;
  background-color: ${p => p.theme.colors.wite};
`;
