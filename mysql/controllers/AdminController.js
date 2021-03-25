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
      delete employee.pass;
      res.send({ ...employee });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async createAuther(req, res) {
    const {
      name,
      last_name,
      birthday,
      place_of_birth,
      address,
      date_of_birth,
      biography,
    } = req.body;
    try {
      const auther = await prisma.authors.create({
        data: {
          Name: name,
          Last_name: last_name,
          Birthday: new Date(birthday),
          Place_of_Birth: place_of_birth,
          Address: address,
          date_of_birth: new Date(date_of_birth),
          Biography: biography,
        },
      });

      res.send({ ...auther });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async createPublisher(req, res) {
    const { name, address, specialty } = req.body;
    try {
      const publisher = await prisma.publishers.create({
        data: { Name: name, Address: address, specialty },
      });
      res.send({ ...publisher });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async createClass(req, res) {
    const { class_name } = req.body;
    try {
      const aClass = await prisma.classes.create({
        data: { Class_name: class_name },
      });

      res.send({ ...aClass });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async createSubject(req, res) {
    const { subject_descript } = req.body;
    try {
      const subject = await prisma.subjects.create({
        data: { Subject_descript: subject_descript },
      });
      res.send({ ...subject });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async createPublication(req, res) {
    const {
      ISBN,
      title,
      date_of_publishing,
      publisher_id,
      class_id,
      keywords,
      num_of_pages,
      subject_id,
      purchase_price_copy,
      for_sale,
      sale_price_copy,
      author_id,
      rate_of_associating,
    } = req.body;
    try {
      const publication = await prisma.publications.create({
        data: {
          ISBN,
          Tittel: title,
          date_of_Publishing: new Date(date_of_publishing),
          publisher_id,
          Class_id: class_id,
          Keywords: keywords,
          num_of_pages,
          subject_id,
          purchase_price_copy,
          for_sale: Buffer.from([for_sale]),
          sale_price_copy,
          author_publication: {
            create: {
              Author_id: author_id,
              Rate_of_associating: rate_of_associating,
            },
          },
        },
      });

      res.send({ ...publication });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
