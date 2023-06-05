import { useContext } from "react";
import { schoolTree } from "../../data/schoolTree/schoolTree";
import { useForm } from "../../hooks/useForm";
import { hourContext } from "../hourContext";

export const Profile = () => {
  const faculties = schoolTree;

  const { settings, setSettings } = useContext(hourContext);

  //const { faculty, degree, group } = settings;

  //console.log(settings);

  //const { degree } = faculties[5];
  //console.log(degree)

  //const { group } = degree[1];
  //console.log(group)

  const [formValues, handleInputChange] = useForm({
    ...settings,
  });
  const { faculty, degree, group } = formValues;

  // const handleSetContext = () => {
  //   setHourContext({
  //     faculty: faculty,
  //     degree: degree,
  //     group: group
  //   })
  // }

  const handdleSubmit = (e) => {
    e.preventDefault();

    setSettings({
      faculty: faculty,
      degree: degree,
      group: group,
    });

    console.log("name");
    console.log(e.target.name);
    console.log("value");
    console.log(e.target.value);

    console.log("formValues");
    console.log(formValues);
  };

  return (
    <div className="container-sm w-xl-50 mt-3">
      <div className=" text-primary">
        <span>Seleccione su facultad</span>
        <select
          className="form-select form-select-lg text-center disabled"
          aria-label="Default select example"
          name="faculty"
          onChange={(handleInputChange, handdleSubmit)}
        >
          {faculties.map(({ name }, i) => (
            <option key={name} value={i}>
              {name}
            </option>
          ))}
        </select>

        <div className="row mt-4 ">
          <div className="col ">
            <span>Año</span>
            <select
              className="form-select form-select-sm text-center"
              aria-label="Default select example"
              name="degree"
              onChange={(handleInputChange, handdleSubmit)}
            >
              {faculties[faculty].degree.map(({ name }, i) => (
                <option key={name} value={i} name="degree">
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="col">
            <span>Grupo</span>
            <select
              className="form-select form-select-sm text-center"
              aria-label="Default select example"
              name="group"
              onChange={(handleInputChange, handdleSubmit)}
            >
              {faculties[faculty].degree[degree].group.map(({ name }, i) => (
                <option key={name} value={i} name="group">
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <form>
        <input type="text" className="form-control mt-5" />
      </form>
      <button
        className="btn btn-sm btn-outline-primary mt-3 mx-3"
        onClick={handdleSubmit}
      >
        TEST
      </button>
    </div>
  );
};
