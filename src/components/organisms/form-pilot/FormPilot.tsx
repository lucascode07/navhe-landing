import { useForm } from 'react-hook-form';
import './FormPilot.scss';
import { useState } from 'react';
import ResponseMessage from '../../molecules/response-message/ResponseMessage';

interface Props {
  sendType: (type: string) => void
}

const FormPilot = ({ sendType }: Props) => {

  const [showResponseMessage, setShowResponseMessage] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors, touchedFields }, watch } = useForm({
    mode: "onBlur"
  });

  const onSubmit = handleSubmit((data) => {
    setShowResponseMessage(true);
  });

  return (
    <div className='main-container o-form-pilot'>
      <div className='form-header'>
        <h1>Formulario de Piloto</h1>
        <p>Por favor complete todos los espacios requeridos para tener presente su información y asi poder ubicarlo dentro del horario disponible y dentro  del perímetro cercano de su domicilio.</p>
      </div>
      {
        showResponseMessage
          ? (<ResponseMessage />)
          : (
            <form className='form-body' onSubmit={onSubmit}>

              <div className="form-body__group">
                <div className="subgroup">

                  <div className='form-group'>
                    <input
                      className={`
                        ${watch('name') ? 'active' : ''} 
                        ${(!errors.name && touchedFields.name) ? 'valid' : ''} 
                        ${errors.name ? 'invalid' : ''}
                      `}
                      id='name'
                      type="text"
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                      })} />
                    <label htmlFor='name'>Nombre</label>
                    {
                      errors.name && <small>{errors.name.message as string}</small>
                    }
                  </div>

                  <div className='form-group'>
                    <input className={`
                        ${watch('lastname') ? 'active' : ''} 
                        ${(!errors.lastname && touchedFields.lastname) ? 'valid' : ''}
                        ${errors.lastname ? 'invalid' : ''}
                      `} id='lastname' type="text" {...register('lastname', {
                      required: {
                        value: true,
                        message: 'Campo requerido'
                      },
                    })} />
                    <label htmlFor='lastname'>Apellidos</label>
                    {
                      errors.lastname && <small>{errors.lastname.message as string}</small>
                    }
                  </div>

                  <div className='form-group'>
                    <input className={`
                        ${watch('birthday') ? 'active' : ''} 
                        ${(!errors.birthday && touchedFields.birthday) ? 'valid' : ''}
                        ${errors.birthday ? 'invalid' : ''}
                      `} id='birthday' type="date" {...register('birthday', {
                      required: {
                        value: true,
                        message: 'Campo requerido'
                      },
                      validate: (value) => {
                        const fechaNacimiento = new Date(value);
                        const fechaActual = new Date();
                        const edad =
                          fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                        return edad >= 18 || "Debes ser mayor de edad";
                      }
                    })} />
                    <label htmlFor='birthday'>Nacimiento</label>
                    {
                      errors.birthday && <small>{errors.birthday.message as string}</small>
                    }
                  </div>

                  <div className='form-group'>
                    <input className={`
                        ${watch('dni') ? 'active' : ''} 
                        ${(!errors.dni && touchedFields.dni) ? 'valid' : ''}
                        ${errors.dni ? 'invalid' : ''}
                      `} id='dni' type="text" maxLength={8} {...register('dni', {
                      required: {
                        value: true,
                        message: 'Campo requerido'
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: 'Solo se acepta números'
                      },
                    })} />
                    <label htmlFor='dni'>DNI</label>
                    {
                      errors.dni && <small>{errors.dni.message as string}</small>
                    }
                  </div>

                  <div className='form-group'>
                    <select className={`
                        ${watch('city') ? 'active' : ''} 
                        ${(!errors.city && touchedFields.city) ? 'valid' : ''}
                        ${errors.city ? 'invalid' : ''}
                      `} id='city' {...register('city', {
                      required: {
                        value: true,
                        message: 'Campo requerido'
                      },
                    })}>
                      <option value=""></option>
                      <option value="Chachapoyas">Chachapoyas</option>
                      <option value="Lima">Lima</option>
                      <option value="Trujillo">Trujillo</option>
                    </select>
                    <label htmlFor='city'>Ciudad</label>
                    {
                      errors.city && <small>{errors.city.message as string}</small>
                    }
                  </div>

                  <div className='form-group'>
                    <input className={`
                        ${watch('phone') ? 'active' : ''} 
                        ${(!errors.phone && touchedFields.phone) ? 'valid' : ''}
                        ${errors.phone ? 'invalid' : ''}
                      `} id='phone' type="text" {...register('phone', {
                      required: {
                        value: true,
                        message: 'Campo requerido'
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: 'Solo se acepta números',
                      }
                    })} />
                    <label htmlFor='phone'>Celular</label>
                    {
                      errors.phone && <small>{errors.phone.message as string}</small>
                    }
                  </div>
                </div>

                <div className='form-group'>
                  <input className={`
                        ${watch('address') ? 'active' : ''} 
                        ${(!errors.address && touchedFields.address) ? 'valid' : ''}
                        ${errors.address ? 'invalid' : ''}
                      `} id='address' type="text" {...register('address', {
                    required: {
                      value: true,
                      message: 'Campo requerido'
                    },
                  })} />
                  <label htmlFor='address'>Dirección</label>
                  {
                    errors.address && <small>{errors.address.message as string}</small>
                  }
                </div>

                <div className='form-group'>
                  <input className={`
                        ${watch('email') ? 'active' : ''} 
                        ${(!errors.email && touchedFields.email) ? 'valid' : ''}
                        ${errors.email ? 'invalid' : ''}
                      `} id='email' type="email" {...register('email', {
                    required: {
                      value: true,
                      message: 'Campo requerido'
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Formato de correo no válido'
                    }
                  })} />
                  <label htmlFor='email'>Email</label>
                  {
                    errors.email && <small>{errors.email.message as string}</small>
                  }
                </div>
              </div>

              <div className='form-body__group'>
                <div className="subgroup">
                  <div className='form-group'>
                    <select className={`
                        ${watch('vehicleType') ? 'active' : ''} 
                        ${(!errors.vehicleType && touchedFields.vehicleType) ? 'valid' : ''}
                        ${errors.vehicleType ? 'invalid' : ''}
                      `} id='vehicleType' {...register('vehicleType', {
                      required: {
                        value: true,
                        message: 'Campo requerido'
                      },
                    })}>
                      <option value=""></option>
                      <option value="Moto Lineal">Moto Lineal</option>
                      <option value="Bicicleta">Bicicleta</option>
                    </select>
                    <label htmlFor='vehicleType'>Vehículo</label>
                    {
                      errors.vehicleType && <small>{errors.vehicleType.message as string}</small>
                    }
                  </div>
                  <div className='form-group'>
                    <select className={`
                        ${watch('schedule') ? 'active' : ''} 
                        ${(!errors.schedule && touchedFields.schedule) ? 'valid' : ''}
                        ${errors.schedule ? 'invalid' : ''}
                      `} id='schedule'  {...register('schedule', {
                      required: {
                        value: true,
                        message: 'Campo requerido'
                      },
                    })}>
                      <option value=""></option>
                      <option value="Mañana">Mañana</option>
                      <option value="Noche">Noche</option>
                    </select>
                    <label htmlFor='schedule'>Horario</label>
                    {
                      errors.schedule && <small>{errors.schedule.message as string}</small>
                    }
                  </div>
                </div>
                <div className='radio-group'>
                  <div className="radio-group__item">
                    <p>¿Cuentas con soat?</p>
                    <label>
                      Sí
                      <input type="radio" value="sí" {...register('soat', {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                      })} />
                    </label>
                    <label>
                      No
                      <input type="radio" value="no" {...register('soat', {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                      })} />
                    </label>
                    {
                      errors.soat && <small>{errors.soat.message as string}</small>
                    }
                  </div>
                  <div className='divider'></div>
                  <div className="radio-group__item">
                    <p>¿Cuentas con brevete?</p>
                    <label>
                      Sí
                      <input type="radio" value="sí" {...register('license', {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                      })} />
                    </label>
                    <label>
                      No
                      <input type="radio" value="no" {...register('license', {
                        required: {
                          value: true,
                          message: 'Campo requerido'
                        },
                      })} />
                    </label>
                    {
                      errors.license && <small>{errors.license.message as string}</small>
                    }
                  </div>
                </div>
                <div className='form-group'>
                  <textarea className={`
                        ${watch('query') ? 'active' : ''} 
                        ${(!errors.query && touchedFields.query) ? 'valid' : ''}
                        ${errors.query ? 'invalid' : ''}
                      `} id='query' {...register('query', {
                    required: {
                      value: true,
                      message: 'Campo requerido'
                    },
                  })}></textarea>
                  <label htmlFor='query'>Consulta</label>
                  {
                    errors.query && <small>{errors.query.message as string}</small>
                  }
                </div>

                <div className='form-actions'>
                  <button className='btn-primary' type='submit'>Enviar registro</button>
                  <button className='btn-primary' type='button' onClick={() => sendType('')}>Regresar</button>
                </div>
              </div>

            </form >
          )
      }

    </div >
  )
}

export default FormPilot