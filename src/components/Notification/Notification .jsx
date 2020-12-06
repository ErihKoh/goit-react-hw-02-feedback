import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <span className={s.notify}>{message}</span>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
