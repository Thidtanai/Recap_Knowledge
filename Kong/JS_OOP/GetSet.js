/**
 * Setter -> จัดการการเปลี่ยนแปลง
 * Getter -> จัดการการดึงข้อมูล
 */

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

  // Setter
  setName(newName) {
    this.#name = newName;
  }
  setPassword(newPassword) {
    this.#password = newPassword;
  }

  // Getter
  getName() {
    return this.#name;
  }
  getPassword() {
    return this.#password;
  }
}

const user1 = new User("Kong", "8888");
user1.showDetail();
user1.setName("Thid");
user1.setPassword("5555");
console.log("name is", user1.getName(), "password is", user1.getPassword());
