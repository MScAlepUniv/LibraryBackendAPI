import prisma from "../prisma/prismaClientObject.js";

export default class AdminController {
  constructor() {}

  async createEmployee(req, res) {
    const {
      name,
      father_name,
      last_name,
      birthday,
      address,
      qualification,
      job,
      date_of_start,
      date_of_end,
      sale_permission,
      borrowing_permission,
      permission_granted_permissions,
      user_name,
      pass,
    } = req.body;
    let employee;
    try {
      employee = await prisma.employees.findFirst({ where: { user_name } });
      if (employee) return res.sendStatus(409);
      employee = await prisma.employees.create({
        data: {
          Name: name,
          Father_name: father_name,
          Last_name: last_name,
          Birthday: new Date(birthday),
          Address: address,
          Qualification: qualification,
          Job: job,
          date_of_start: new Date(date_of_start),
          date_of_end: new Date(date_of_end),
          sale_permission,
          borrowing_permission,
          permission_granted_permissions,
          user_name,
          pass,
        },
      });
      res.send({ ...employee });
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  }
}
