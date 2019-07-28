import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name },
    idtype,
    idnumber,
    sex
  }
}) => {
  return (
    <div className='profile bg-light'>
      <div>
        <h2>{name}</h2>
        <p>
          {idtype} {idnumber && <span> número {idnumber}</span>}
        </p>
        <p className='my-1'>{sex && <span>{sex}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          Ver Perfil
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
