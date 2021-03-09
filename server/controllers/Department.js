const fileService = require("../services/fileService");

class Department {
  // new Department() creating object of type Department
  // propertie, methods and events

  constructor(dataPath) {
    this.dataFile = dataPath;
  }

  getDepartments() {
    const employees = this.getData();
    // new set hand piece of code to get unique things....
   const departments = [...new Set(employees.map((employee) => employee.department))]
   const formatAsObjects  = departments.map(name=>{
     return {name} 
   })
   return formatAsObjects
  }

  getDepartment(searchTerm) {
    const employees = this.getData();
    const department = employees.filter(
      (employee) => employee.department === searchTerm
    );
    return department;
  }

  delteEmployeeById(id){
       
       const employees = this.getData();

       const exists = employees.filter(employee=> employee.id !== id)
       if(exists.length < employees.length){
         this.writeData(exists )
       }else{
         console.log("employee not found")
       }
       
  }

  getData() {
    return fileService.getFileContents(this.dataFile);
  }

  writeData(data){
    return fileService.writeDataToFile(this.dataFile, data);
  }
}

module.exports = Department;