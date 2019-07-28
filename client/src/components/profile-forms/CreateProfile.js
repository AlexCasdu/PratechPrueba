import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
//import Checkbox from '../../utils/Checkbox';

//const HOBBIES = ['Comer', 'Futbol', 'Pintar', 'Programación'];

const CreateProfile = ({
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
  const { idtype, idnumber, birthdate } = formData;
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

  /*const handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    setFormData(prevState => ({
      hobbies: {
        ...prevState.hobbies,
        [name]: !prevState.hobbies[name]
      }
    }));
    console.log(formData.hobbies);
  };

  const createCheckbox = hobbie => (
    <Checkbox
      label={hobbie}
      isSelected={formData.hobbies[hobbie]}
      onCheckboxChange={handleCheckboxChange}
      key={hobbie}
    />
  );

  const createCheckboxes = () => HOBBIES.map(createCheckbox);*/

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
        {/*<div className='form-group'>
          <h4>Hobbies:</h4>
          {createCheckboxes()}
          <small className='form-text'>Seleccione uno o varios</small>
        </div>*/}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Volver
        </Link>
      </form>
    </Fragment>
  );
};
CreateProfile.propTypes = {
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
)(withRouter(CreateProfile));
