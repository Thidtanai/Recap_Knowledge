console.log("Hello World")

let time1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("time1"));
      }, 1000);
    });
  };
  
  let time2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("time2"));
      }, 2000);
    });
  };
  
  let display = async () => {
    try {
      await time2();
      await time1();
      await time1();
    } catch (error) {
      console.log(error)
    }
  };
  
  display();