class User {
  // Public
  name = "Avatar";

  // Private
  #password = "0000";

  constructor(name, password) {
    this.name = name;
    this.#password = password;
    this.showDetail();
    this.#privateFunc();
  }

  showDetail() {
    console.log(`Name:${this.name}   Password:${this.#password}`);
  }
  #privateFunc() {
    console.log("wah")
  }
}

const user1 = new User("Kong", "8888");
const user2 = new User("Thid", "6977");
const user3 = new User("Sloth", "0033");

user1.name = "Hacked";
user1.password = "1111";
//user1.privateFunc(); Cannot called
user1.showDetail();
