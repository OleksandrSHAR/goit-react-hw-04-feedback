import PropTypes, { arrayOf } from 'prop-types';
import {
  BtFetbeck,
  FetbeckItem,
  FetbeckEl,
  WrapFetbeck,
} from './PleseLeave.style';

export const PleseLeave = ({ setBad, setNeutral, setGoog }) => {
  return (
    <WrapFetbeck>
      <FetbeckEl>
        <FetbeckItem>
          <BtFetbeck type="button" onClick={() => setGoog(prev => prev + 1)}>
            Good
          </BtFetbeck>
        </FetbeckItem>
        <FetbeckItem>
          <BtFetbeck type="button" onClick={() => setNeutral(prev => prev + 1)}>
            Neutral
          </BtFetbeck>
        </FetbeckItem>
        <FetbeckItem>
          <BtFetbeck type="button" onClick={() => setBad(prev => prev + 1)}>
            Bad
          </BtFetbeck>
        </FetbeckItem>
      </FetbeckEl>
    </WrapFetbeck>
  );
};

PleseLeave.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
