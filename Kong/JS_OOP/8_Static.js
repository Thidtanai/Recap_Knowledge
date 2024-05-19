class User {
  #name;
  #password;
  // Static property
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

  // Static Method
  static showType() {
    console.log("I am User");
  }
  static addUser(newUser) {
    this.database.push(newUser);
  }
}

// สังเกตุ สามารถเรียกใช้ได้โดยไม่ต้องสร้าง obj ก่อน
console.log(User.type);
User.showType();
const user1 = new User("Kong", "8888");
const user2 = new User("jojo", "456");
const user3 = new User("Nam", "7890");
// Keep User
User.addUser(user1);
User.addUser(user2);
User.addUser(user3);
// Show User
User.database.forEach((user)=>{
    user.showDetail();
})
for(user of User.database){
    user.showDetail();
}

/* Example static method from JS es6 */
// Math
console.log(Math.PI);
console.log(Math.random());
console.log(Math.max(10, 20, 30));
