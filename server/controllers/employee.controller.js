const EmployeeCtrl = {};
const Employee = require('../models/employee');
EmployeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
    
};
EmployeeCtrl.createEmployee = async (req, res) =>{
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        'status': 'empleado guardado'
    });
    

;}
EmployeeCtrl.getEmployee = function(){

};
EmployeeCtrl.editEmployee = function(){

};
EmployeeCtrl.delateEmployee = function(){
    
};
module.exports = EmployeeCtrl;
