// Super class
class User {
  //protected
  _name;    //จากเดิมที่ name เป็น private ทำให้ไม่สามารถใช้จากลูกได้
  #password;
  static type = "User";
  static database = [];

  constructor(name, password) {
    this._name = name;
    this.#password = password;
  }

  showDetail() {
    console.log(`Name:${this._name}   Password:${this.#password}`);
  }

  set Name(newName) {
    this._name = newName;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }

  get Name() {
    return this._name;
  }
  get Password() {
    return this.#password;
  }

  static showType() {
    console.log("I am User");
  }
  static addUser(newUser) {
    this.database.push(newUser);
  }
}
// Sub class
class Teacher extends User {
  #course;

  constructor(name, password, course) {
    super(name, password);
    this.#course = course;
  }

  // Overiding
  showDetail() {
    console.log(`My name is ${this._name} , I teaching ${this.#course} `);
  }
}
class Student extends User {
  #score;

  constructor(name, password, score) {
    super(name, password);
    this.#score = score;
  }

  Overinding;
  showDetail() {
    console.log(`My name is ${this._name}, my score is ${this.#score}`);
  }
}

const user1 = new Teacher("Teacher1", 1234, "Computer");
user1.showDetail();
const user2 = new Student("Student1", 5526, 100);
user2.showDetail();
const user3 = new Teacher("Teacher2", 1534, "Art");
user3.showDetail();
const user4 = new Student("Student2", 5566, 50);
user4.showDetail();
