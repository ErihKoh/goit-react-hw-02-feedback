import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ labels, onLeaveFeedback }) {
  return (
    <div className={s.optionsBtn}>
      {labels.map(label => (
        <button
          key={label}
          type="button"
          className={s.option}
          onClick={() => onLeaveFeedback(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  option: PropTypes.string,
};

export default FeedbackOptions;
