import PropTypes from 'prop-types';
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
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
