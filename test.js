const horario = {
  nameCourse: "",
  openCourse: "00:00",
  finishCourse: "00:00",
  dayCourse: "",
};

const validacion = () => {
  const oH = horario.openCourse.split(":");
  const fH = horario.finishCourse.split(":");

  // validacion
  const m1 = parseInt(oH[0]) * 60 + parseInt(oH[1]);
  const m2 = parseInt(fH[0]) * 60 + parseInt(fH[1]);

  return m1 < m2;
};

console.log(validacion());
