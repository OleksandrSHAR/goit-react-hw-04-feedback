import PropTypes, { arrayOf } from 'prop-types';
import {
  BtFetbeck,
  FetbeckItem,
  FetbeckEl,
  WrapFetbeck,
} from './PleseLeave.style';

export const PleseLeave = ({ onLeaveFeedback, options }) => {
  return (
    <WrapFetbeck>
      <FetbeckEl>
        {options.map(option => {
          return (
            <FetbeckItem option={option} key={option}>
              <BtFetbeck
                key={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </BtFetbeck>
            </FetbeckItem>
          );
        })}
      </FetbeckEl>
    </WrapFetbeck>
  );
};

PleseLeave.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
