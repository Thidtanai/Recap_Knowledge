// Super class
class User {
  #name;
  #password;
  static type = "User";
  static database = [];

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
  }

  showDetail() {
    console.log(`Name:${this.#name}   Password:${this.#password}`);
  }

  set Name(newName) {
    this.#name = newName;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }

  get Name() {
    return this.#name;
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
class Teacher extends User {}
class Student extends User {}

const user1 = new Teacher("Teacher1", 1234);
const user2 = new Student("jojo", 5566);
user1.showDetail();
user2.showDetail();
