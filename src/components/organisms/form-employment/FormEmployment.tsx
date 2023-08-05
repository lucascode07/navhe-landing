import { useState } from "react";
import ResponseMessage from "../../molecules/response-message/ResponseMessage";
import { useForm } from "react-hook-form";
import './FormEmployment.scss';

interface Props {
  sendType: (type: string) => void;
}

const FormEmployment = ({ sendType }: Props) => {
  const [showResponseMessage, setShowResponseMessage] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data) => {
    setShowResponseMessage(true);
  });

  return (
    <div className="main-container o-form-employment">
      <div className="form-header">
        <h1>Formulario para Empleo</h1>
        <p>
          Por favor complete todos los espacios requeridos para tener recopilar su información y así poder ubicarlo dentro del
          puesto trabajo disponible.
        </p>
      </div>
      {
        showResponseMessage ? (
          <ResponseMessage />
        ) : (
          <form className="form-body" onSubmit={onSubmit}>
            <div className="form-body__group">
              <div className="subgroup">
                <div className="form-group">
                  <input
                    className={`
      ${watch("name") ? "active" : ""} 
      ${!errors.name && touchedFields.name ? "valid" : ""} 
      ${errors.name ? "invalid" : ""}
    `}
                    id="name"
                    type="text"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                    })}
                  />
                  <label htmlFor="name">Nombre</label>
                  {errors.name && <small>{errors.name.message as string}</small>}
                </div>

                <div className="form-group">
                  <input
                    className={`
      ${watch("lastname") ? "active" : ""} 
      ${!errors.lastname && touchedFields.lastname ? "valid" : ""}
      ${errors.lastname ? "invalid" : ""}
    `}
                    id="lastname"
                    type="text"
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                    })}
                  />
                  <label htmlFor="lastname">Apellidos</label>
                  {errors.lastname && (
                    <small>{errors.lastname.message as string}</small>
                  )}
                </div>

                <div className="form-group">
                  <input
                    className={`
      ${watch("birthday") ? "active" : ""} 
      ${!errors.birthday && touchedFields.birthday ? "valid" : ""}
      ${errors.birthday ? "invalid" : ""}
    `}
                    id="birthday"
                    type="date"
                    {...register("birthday", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                      validate: (value) => {
                        const fechaNacimiento = new Date(value);
                        const fechaActual = new Date();
                        const edad =
                          fechaActual.getFullYear() -
                          fechaNacimiento.getFullYear();
                        return edad >= 18 || "Debes ser mayor de edad";
                      },
                    })}
                  />
                  <label htmlFor="birthday">Nacimiento</label>
                  {errors.birthday && (
                    <small>{errors.birthday.message as string}</small>
                  )}
                </div>

                <div className="form-group">
                  <input
                    className={`
      ${watch("dni") ? "active" : ""} 
      ${!errors.dni && touchedFields.dni ? "valid" : ""}
      ${errors.dni ? "invalid" : ""}
    `}
                    id="dni"
                    type="text"
                    maxLength={8}
                    {...register("dni", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: "Solo se acepta números",
                      },
                    })}
                  />
                  <label htmlFor="dni">DNI</label>
                  {errors.dni && <small>{errors.dni.message as string}</small>}
                </div>

                <div className="form-group">
                  <select
                    className={`
      ${watch("city") ? "active" : ""} 
      ${!errors.city && touchedFields.city ? "valid" : ""}
      ${errors.city ? "invalid" : ""}
    `}
                    id="city"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                    })}
                  >
                    <option value=""></option>
                    <option value="Chachapoyas">Chachapoyas</option>
                    <option value="Lima">Lima</option>
                    <option value="Trujillo">Trujillo</option>
                  </select>
                  <label htmlFor="city">Ciudad</label>
                  {errors.city && <small>{errors.city.message as string}</small>}
                </div>

                <div className="form-group">
                  <input
                    className={`
      ${watch("phone") ? "active" : ""} 
      ${!errors.phone && touchedFields.phone ? "valid" : ""}
      ${errors.phone ? "invalid" : ""}
    `}
                    id="phone"
                    type="text"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: "Solo se acepta números",
                      },
                    })}
                  />
                  <label htmlFor="phone">Celular</label>
                  {errors.phone && (
                    <small>{errors.phone.message as string}</small>
                  )}
                </div>
              </div>

              <div className='form-group'>
                <select className={`
                          ${watch('occupation') ? 'active' : ''} 
                          ${(!errors.occupation && touchedFields.occupation) ? 'valid' : ''}
                          ${errors.occupation ? 'invalid' : ''}
                        `} id='occupation'  {...register('occupation', {
                  required: {
                    value: true,
                    message: 'Campo requerido'
                  },
                })}>
                  <option value=""></option>
                  <option value="Mañana">Gerente</option>
                  <option value="Noche">Secretario</option>
                </select>
                <label htmlFor='occupation'>Cargo de postulación</label>
                {
                  errors.occupation && <small>{errors.occupation.message as string}</small>
                }
              </div>

              <div className="form-group">
                <input
                  className={`
      ${watch("email") ? "active" : ""} 
      ${!errors.email && touchedFields.email ? "valid" : ""}
      ${errors.email ? "invalid" : ""}
    `}
                  id="email"
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Formato de correo no válido",
                    },
                  })}
                />
                <label htmlFor="email">Email</label>
                {errors.email && <small>{errors.email.message as string}</small>}
              </div>
            </div>
            <div className="form-body__group">
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
          </form>
        )}
    </div>
  );
};

export default FormEmployment;
