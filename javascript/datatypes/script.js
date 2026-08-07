let employee = {
  name: "Susmitha",
  role: "ASE"
};

let coreSkills = ["JavaScript", "HTML", "CSS"];

let displayProfile = function(empObj, skillsArr) {
  return `${empObj.name} (${empObj.role}) specializes in: ${skillsArr.join(", ")}`;
};


let profileStatus = displayProfile(employee, coreSkills);
console.log(profileStatus); 

let updatedEmployee = employee;

updatedEmployee.role = "Software Engineer";


console.log(employee.role); 



let updatedSkills = [...coreSkills];

console.log(coreSkills);    
console.log(updatedSkills);