import css from './Counter.module.css';

export const Notification = props => {
  const { message } = props;

  return (
    <div>
      <p className={css.notification}>{message}</p>
    </div>
  );
};
