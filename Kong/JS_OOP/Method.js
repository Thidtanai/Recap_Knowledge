class User {
  name = "Avatar";
  password = "0000";

  constructor(name, password) {
    this.name = name;
    this.password = password;
    // use when create
    this.showDetail();
  }

  // Method
  showDetail() {
    console.log(`Name:${this.name}   Password:${this.password}`);
  }
}

const user1 = new User("kong", "8888");
const user2 = new User("thid", "6977");
const user3 = new User("sloth", "0033");

// use by object
user1.showDetail();

