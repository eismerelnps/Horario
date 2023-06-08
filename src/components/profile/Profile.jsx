//import { useContext, useEffect } from "react";
import { schoolTree } from "../../data/schoolTree/schoolTree";
//import { updateSettings } from "../../helpers/updateSettings";
import { useForm } from "../../hooks/useForm";
//import { hourContext } from "../hourContext";
import { Modal } from "../modal/Modal";

export const Profile = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("settings"));
  };

  //const {settings, setSettings} = useContext(hourContext)

  const [formValues, handdleInputChange] = useForm({
    ...init(),
  });

  const { faculty, degree, group } = formValues;

  // useEffect(() => {
  //   localStorage.setItem("settings", JSON.stringify(formValues));
  // }, [formValues]);

  //const { faculty, degree, group } = formValues;


  const handleSubmit = () => {
    localStorage.setItem("settings", JSON.stringify(formValues));
    console.log('Datos actualizados')
    console.log(init());
  };

  return (
    <div className="container-sm w-xl-50 mt-3">
      <Modal 
      title={'Ajustes'} 
      caption={'¿Está seguro que desea cambiar las configuraciones del horario?'}
      saveChanges={handleSubmit}
      />
      <div className=" text-primary">
        <span>Seleccione su facultad</span>

        <select
          className="form-select form-select-lg text-center disabled"
          aria-label="Default select example"
          name="faculty"
          value={faculty}
          onChange={handdleInputChange}
        >
          {schoolTree.map(({ name }, i) => (
            <option key={name} value={i}>
              {name}
            </option>
          ))}
        </select>

        <div className="row">
          <div className="col">
            <span>Seleccione su año</span>
            <select
              className="form-select form-select-lg text-center disabled"
              aria-label="Default select example"
              value={degree}
              name="degree"
              onChange={handdleInputChange}
            >
              {schoolTree[formValues.faculty].degree.map(({ name }, i) => (
                <option key={name} value={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <span>Seleccione su grupo</span>
            <select
              className="form-select form-select-lg text-center disabled"
              aria-label="Default select example"
              value={group}
              name="group"
              onChange={handdleInputChange}
            >
              {schoolTree[faculty].degree[degree].group.map(({ name }, i) => (
                <option key={name} value={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 mt-3">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Actualizar
        </button>
      </div>
    </div>
  );
};
