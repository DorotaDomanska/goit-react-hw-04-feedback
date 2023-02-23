import css from './Counter.module.css';

export const FeedbackOptions = props => {
  
  const handleFeedbackOption = evt => {
    const { onLeaveFeedback } = props;
    const { name } = evt.target;

    onLeaveFeedback(name);
  };

  const { options } = props;

  return (
    <div className={css.feedbackOptions}>
      {options.map(option => (
        <button
          key={option}
          className={css.button}
          name={option}
          type="button"
          onClick={handleFeedbackOption}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
