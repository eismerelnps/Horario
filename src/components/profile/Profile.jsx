import { schoolTree } from "../../data/schoolTree/schoolTree";
import { hourContext } from "../../hooks/useContext";
import { useForm } from "../../hooks/useForm";

export const Profile = () => {
  const faculties = schoolTree;

  const { setHourContext } = useForm(hourContext);


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

  const handleSetContext = () => {
    setHourContext({
      faculty: faculty,
      degree: degree,
      group: group
    })
  }


  const handdleSubmit = (e) => {
    e.preventDefault();

    console.log("name");
    console.log(e.target.name);
    console.log("value");
    console.log(e.target.value);

    console.log('formValues');
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
          onChange={ (handleInputChange, handdleSubmit) }
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
