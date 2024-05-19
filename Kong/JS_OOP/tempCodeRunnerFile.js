class User {
  #name;
  #password;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
  }

  showDetail() {
    console.log(`Name:${this.#name}   Password:${this.#password}`);
  }

  // Setter (Accessor)
  set Name(newName) {
    this.#name = newName;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }

  // Getter (Accessor)
  get Name() {
    return this.#name;
  }
  get Password() {
    return this.#password;
  }
}

const user1 = new User("Kong", "8888");
user1.showDetail();
user1.Name = "Thid";
user1.Password = "5555";
console.log("Name:", user1.Name, "Password:", user1.Password);
