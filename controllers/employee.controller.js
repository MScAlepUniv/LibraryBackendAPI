import EmployeeService from "../services/employee.service.js";

export default class EmployeeController {
  constructor() {
    this.employeeService = new EmployeeService();
  }

  async createEmployee(req, res) {
    try {
      let employee = await this.employeeService.getEmployeeByName(
        req.body.user_name
      );
      if (employee) return res.sendStatus(409);
      employee = await this.employeeService.createEmployee(req.body);
      delete employee.pass;
      res.send({ ...employee });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
