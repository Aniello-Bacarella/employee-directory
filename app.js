import express from "express";
import employees from "./db/employees.js";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((request, response) => {
  response.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;

  const employeeData = employees.find((emp) => {
    return emp.id === Number(id);
  });

  if (!employeeData) {
    return res.status(404).send({ message: `Employee Not Found.` });
  }

  res.json(employeeData);
});

export default app;
