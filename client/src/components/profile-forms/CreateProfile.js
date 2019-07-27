import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const Createprofile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    idtype: '',
    idnumber: '',
    gender: '',
    birthdate: '',
    hobbies: ''
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const { idtype, idnumber, gender, birthdate, hobbies } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Redirect to='/dashboard' />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Cree su perfil</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Obtengamos alguna información para hacer
        que su perfil destaque
      </p>
      <small>* = campo requerrido</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='idtype' value={idtype} onChange={e => onChange(e)}>
            <option value='0'>* Seleccione...</option>
            <option value='Tarjeta de Identidad'>Tarjeta de Identidad</option>
            <option value='Cédula de Ciudadania'>Cédula de Ciudadania</option>
            <option value='Pasaporte'>Pasaporte</option>
          </select>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Número de Identificación'
            name='idnumber'
            value={idnumber}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Volver
        </Link>
      </form>
    </Fragment>
  );
};
Createprofile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(Createprofile));
