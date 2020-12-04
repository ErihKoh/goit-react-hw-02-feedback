import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={s.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Section.protoType = {
  children: PropTypes.node,
};

export default Section;
