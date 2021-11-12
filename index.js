const employee = {
  name:"David",
  streetAddress: "123 Main St",
}
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return {
    ...employee,
    [key]: value,
  };
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;

  return employee;
}
const deleteFromEmployeeByKey = (employee, key) => {
  return {...employee};
  delete employee[key];

  
}