// Create class
class User {
  // Property or Attribute or Field
  name = "Thidtanai";
  password = "1234";
}

// Create Object
const user1 = new User();
console.log("name:" + user1.name + " password:" + user1.password);
user1.name = "Krit";
user1.password = "4321";
console.log("name:" + user1.name + " password:" + user1.password);

const user2 = new User();
console.log("name:" + user2.name + " password:" + user2.password);
