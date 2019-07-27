import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    idtype: '',
    idnumber: '',
    sex: '',
    birthdate: '',
    hobbies: 'hola'
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      idtype: loading || !profile.idtype ? '' : profile.idtype,
      idnumber: loading || !profile.idnumber ? '' : profile.idnumber,
      sex: loading || !profile.sex ? '' : profile.sex,
      birthdate: loading || !profile.birthdate ? '' : profile.birthdate,
      hobbies: loading || !profile.hobbies ? '' : profile.hobbies
    });
  }, [loading, getCurrentProfile]);

  const { idtype, idnumber, sex, birthdate, hobbies } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

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
          <small className='form-text'>
            Dinos que tipo de documento tienes
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Número de Identificación'
            name='idnumber'
            value={idnumber}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Ingresa tu documento de identificación
          </small>
        </div>
        <div className='form-group'>
          <h4>Sexo</h4>
          <div className='form-check'>
            <label>
              <input
                type='radio'
                name='sex'
                value='Masculino'
                checked={sex == 'Masculino'}
                onChange={e => onChange(e)}
                className='form-check-input'
              />{' '}
              Masculino
            </label>
          </div>
          <div className='form-check'>
            <label>
              <input
                type='radio'
                name='sex'
                value='Femenino'
                checked={sex == 'Femenino'}
                onChange={e => onChange(e)}
                className='form-check-input'
              />{' '}
              Femenino
            </label>
          </div>
        </div>
        <div className='form-group'>
          <h4>Fecha de nacimiento</h4>
          <input
            type='date'
            name='birthdate'
            value={birthdate}
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
EditProfile.propTypes = {
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
)(withRouter(EditProfile));
