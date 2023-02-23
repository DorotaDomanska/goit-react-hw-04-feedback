import css from './Counter.module.css';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div>
      <p className={css.statistics}>Good: {good}</p>
      <p className={css.statistics}>Neutral: {neutral}</p>
      <p className={css.statistics}>Bad: {bad}</p>
      <p className={css.statistics}>Total: {total}</p>
      <p className={css.statistics}>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};
