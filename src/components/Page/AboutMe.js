import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../store/Page/selectors';

function AboutMe({ title, facts }) {
  return (
    <section className="Section" aria-label={title}>
      <h2 className="H H_level_2">{title}</h2>
      {facts.map((fact, index) => (
        <p key={index}>
          {'- '}
          {fact}
        </p>
      ))}
    </section>
  );
}

const mapStateToProps = (state) => getProfile(state).aboutMe;

export default connect(mapStateToProps, null)(AboutMe);
