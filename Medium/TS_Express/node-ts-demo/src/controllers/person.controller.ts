import { RequestHandler } from "express";
import Person from "../models/Person";

// Mock person data
const PERSONS: Person[] = [
  new Person("1613735097256", "John", "Wick", 32),
  new Person("1613735129810", "Thomas", "Anderson", 30),
  new Person("1613736126066", "John", "Constantine", 35),
];

export const getPersons: RequestHandler = (req, res, next) => {
  res.json({ persons: PERSONS });
};

export const createPerson: RequestHandler = (req, res, next) => {
  const { firstName, lastName, age } = <Person>req.body;
  const newPerson = new Person(String(Date.now()), firstName, lastName, age);

  try {
    PERSONS.push(newPerson);

    res.status(201).json({
      message: `Created person success`,
      createPerson: newPerson,
    });
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong",
    });
  }
};

export const updatePerson: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const id = req.params.id;
  const foundPerson: Person | undefined = PERSONS.find((p) => p.id === id);

  if (!foundPerson) {
    res.status(404).send({
      errorMessage: "Person not found",
    });
  }

  const personFromReq = <Person>req.body;
  const updatePerson = Object.assign(foundPerson, personFromReq);
  res.json({
    message: `Updated person ID ${id} success`,
    updatedPerson: updatePerson,
  });
};

export const deletePerson: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const id = req.params.id;
  const personIdx = PERSONS.findIndex((person) => id === person.id);

  if (personIdx < 0) {
    res.status(404).json({
      errorMessage: "Person not found",
    });
  }

  PERSONS.splice(personIdx, 1);

  res.json({ message: `Deleted person ID ${id} success` });
};
