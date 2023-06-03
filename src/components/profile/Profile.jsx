import { schoolTree } from "../../data/schoolTree/schoolTree";
import { useForm } from "../../hooks/useForm";

export const Profile = () => {
  const faculties = schoolTree;
  //console.log(faculties);

  //const { degree } = faculties[5];
  //console.log(degree)

  //const { group } = degree[1];
  //console.log(group)

  const [formValues, handleInputChange] = useForm({
    faculty: 0,
    degree: 0,
    group: 0,
  });

  const { faculty, degree, group } = formValues;

  const handdleSubmit = (e) => {
    e.preventDefault();

    console.log("name");
    console.log(e.target.name);
    console.log("value");
    console.log(e.target.value);

    console.log(formValues);
  };

  return (
    <div className="m-5">
      <div className="text-center text-primary">
        <h1>Seleccione su facultad</h1>
        <select
          className="form-select mt-3 text-center disabled"
          aria-label="Default select example"
          name="faculty"
          onChange={handleInputChange}
        >
          {faculties.map(({ name }, i) => (
            <option key={name} value={i}>
              {name}
            </option>
          ))}
        </select>
       

        <div className="row mt-4 ">
          <div className="col ">
            <h4>Año</h4>
            <select
              className="form-select mt-3 text-center"
              aria-label="Default select example"
              name="degree"
              onChange={handleInputChange}
            >
              {faculties[faculty].degree.map(({ name }, i) => (
                <option key={name} value={i} name="degree">
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="col">
            <h4>Grupo</h4>
            <select
              className="form-select mt-3 text-center"
              aria-label="Default select example"
              name="group"
              onChange={handleInputChange}
            >
              {faculties[faculty].degree[degree].group.map(({ name }, i) => (
                <option key={name} value={i} name="group">
                  {name}
                </option>
              ))}
            </select>
          </div> 

          <button className="btn" onClick={handdleSubmit}>
          TEST
        </button>

        </div>
      </div>
    </div>
  );
};
