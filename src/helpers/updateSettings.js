import { hourContext } from "../components/hourContext";

export const updateSettings = (faculty, degree, group) => {
  hourContext.setSettings({
    faculty: faculty,
    degree: degree,
    group: group,
  });
};
