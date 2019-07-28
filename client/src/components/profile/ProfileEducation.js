import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, degree, finishdate, description }
}) => (
  <div>
    <h3 className='text-dark'>{school}</h3>
    <p>
      {!finishdate ? (
        'Cursando'
      ) : (
        <Moment format='YYYY/MM/DD'>{moment.utc(finishdate)}</Moment>
      )}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
