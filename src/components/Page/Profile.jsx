import React from 'react';
import { connect } from 'react-redux';
import ProfilePrintable from './ProfilePrintable';
import ProfileNonPrintable from './ProfileNonPrintable';
import { getProfile } from '../../store/Page/selectors';

function Profile({ name, specialization }) {
  return (
    <section className="Section HeadingSection" aria-label={`${name.value} CV (${specialization.value} Developer)`}>
      <div className="H H_level_1">
        {name.value}
        {' '}
        CV (
        {specialization.value}
        {' '}
        Developer)
      </div>
      <div className="print">
        <ProfilePrintable />
      </div>
      <div className="no-print lte-s">
        <ProfileNonPrintable />
      </div>
      <div className="no-print gte-m">
        <ProfileNonPrintable />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => getProfile(state).profile;

export default connect(mapStateToProps, null)(Profile);
