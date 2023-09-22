import PropTypes, { arrayOf } from 'prop-types';
import {
  BtFetbeck,
  GoodBut,
  NeutralBut,
  BadBut,
  FetbeckEl,
  WrapFetbeck,
} from './PleseLeave.style';

export const PleseLeave = ({ setBad, setNeutral, setGoog }) => {
  return (
    <WrapFetbeck>
      <FetbeckEl>
        <GoodBut>
          <BtFetbeck type="button" onClick={() => setGoog(prev => prev + 1)}>
            Good
          </BtFetbeck>
        </GoodBut>
        <NeutralBut>
          <BtFetbeck type="button" onClick={() => setNeutral(prev => prev + 1)}>
            Neutral
          </BtFetbeck>
        </NeutralBut>
        <BadBut>
          <BtFetbeck type="button" onClick={() => setBad(prev => prev + 1)}>
            Bad
          </BtFetbeck>
        </BadBut>
      </FetbeckEl>
    </WrapFetbeck>
  );
};

PleseLeave.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
