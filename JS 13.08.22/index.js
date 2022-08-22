function calculateTeamFinanceReport(salaries, team) {
  // Проверка на длинну объекта salaries и массива объектов team.
  if (
    Object.keys(salaries).length < 1 ||
    Object.keys(salaries).length > 10 ||
    team.length < 1 ||
    team.length > 100
  ) {
    return console.log("Wrong data!");
  }

  // Проверка на валидность данных salary и tax.
  const salariesValues = Object.values(salaries);
  for (specialization of salariesValues) {
    if (
      !Number.isInteger(specialization.salary) ||
      specialization.salary < 100 ||
      specialization.salary > 100000 ||
      !specialization.tax.match(/^[0-9]{1}[%0-9]{1}([%]{0,1})?$/)
    ) {
      return console.log("Wrong data!");
    }
  }

  // Фильтрация массива team, оставляем только тех работников спецификация которых есть в salaries
  const filteredTeamArr = team.filter((member) => {
    return Object.keys(salaries).some(
      (specialization) => member.specialization === specialization
    );
  });

  const result = {
    totalBudgetTeam: 0,
  };

  // Создание ключей и вычисление значений объекта result
  for (worker of filteredTeamArr) {
    const specializationString = `totalBudget${worker.specialization}`;
    result[specializationString] =
      (result[specializationString] || 0) +
      (salaries[worker.specialization].salary * 100) /
        (100 - Number.parseInt(salaries[worker.specialization].tax));
  }

  // Приведение значений объекта result к целым числам и вычисление totalBudgetTeam
  for (item in result) {
    result.totalBudgetTeam = result.totalBudgetTeam + result[item];
    result[item] = Number.parseInt(result[item]);
  }
  // Приведение значения totalBudgetTeam к целому числу
  result.totalBudgetTeam = Number.parseInt(result.totalBudgetTeam);

  return console.log(result);
}

const salaries = {
  TeamLead: { salary: 1000, tax: "99%" },
  Architect: { salary: 9000, tax: "34%" },
};
const team = [
  { name: "Alexander", specialization: "TeamLead" },
  { name: "Gaudi", specialization: "Architect" },
  { name: "Koolhas", specialization: "Architect" },
  { name: "Foster", specialization: "Architect" },
  { name: "Napoleon", specialization: "General" },
];

calculateTeamFinanceReport(salaries, team);
