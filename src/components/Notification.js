import css from './Counter.module.css';

export const Notification = ({ message }) => (
  <div>
    <p className={css.notification}>{message}</p>
  </div>
);
