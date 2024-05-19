class User {
  name = "Avatar";
  password = "0000";

  // Default Constructor
  //   constructor(){
  //     console.log("Created ")
  //   }

  // Parameter Constructor
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

const user1 = new User("kong", "8888");
const user2 = new User("thid", "6977");
const user3 = new User("sloth", "0033");

console.log(user1.name);
console.log(user2.name);
console.log(user3.name);
