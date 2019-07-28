import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileAbout = ({
  profile: {
    idtype,
    idnumber,
    sex,
    birthdate,
    user: { name }
  }
}) => (
  <div className='profile-about bg-light p-2'>
    <Fragment>
      <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
      <p>
        {idtype} {' número'} {idnumber}
      </p>
      <p>
        <Moment format='YYYY/MM/DD'>{moment.utc(birthdate)}</Moment>
      </p>
      <p>{sex}</p>
      <div className='line' />
    </Fragment>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
