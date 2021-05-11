import prisma from "../mysql/prisma/prismaClientObject.js";

export default class EmployeeService {
  constructor() {}

  async getEmployeeByName(user_name) {
    return await prisma.employees.findFirst({
      where: { user_name, is_active: true },
    });
  }

  async createEmployee(employee) {
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
    } = employee;

    return await prisma.employees.create({
      data: {
        name,
        father_name,
        last_name,
        birthday: new Date(birthday),
        address,
        qualification,
        job,
        date_of_start: new Date(date_of_start),
        date_of_end: new Date(date_of_end),
        sale_permission,
        borrowing_permission,
        permission_granted_permissions,
        user_name,
        pass,
      },
    });
  }
}
