import {
  WrapStat,
  StatEl,
  El,
  StatCoefficient,
  ElGood,
  ElNeutral,
  ElBad,
} from './Statistics.style';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <WrapStat>
      <StatEl>
        <ElGood>Good:{good}</ElGood>
        <ElNeutral>Neutral:{neutral}</ElNeutral>
        <ElBad>Bad:{bad}</ElBad>
      </StatEl>
      <StatCoefficient>
        <El>Total:{total}</El>
        <El>Positive:{positivePercentage}%</El>
      </StatCoefficient>
    </WrapStat>
  );
};
