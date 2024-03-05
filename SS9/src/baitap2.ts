// Decorator validateEmail
function validateEmail(target: any, propertyKey: string): void {
    let emailValue: string;
  
    // Getter function
    const getter = function () {
      return emailValue;
    };
  
    // Setter function
    const setter = function (newEmail: string) {
      // Kiểm tra tính hợp lệ của địa chỉ email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(newEmail);
      if (!isValidEmail) {
        throw new Error("Invalid email address!");
      }
      emailValue = newEmail;
    };
  
    // Replace getter và setter
    if (delete target[propertyKey]) {
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    }
  }
  
  // Lớp User
  class User {
    @validateEmail
    email: string;
  
    password: string;
  
    constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
    }
  }
  
  // Tạo đối tượng User
  const user = new User("validemail@example.com", "password");
  
  console.log(user.email); // Output: validemail@example.com
  
  // Thử tạo đối tượng User với địa chỉ email không hợp lệ
  try {
    const invalidUser = new User("invalidemail", "password");
    console.log(invalidUser.email);
  } catch (error) {
    console.log("error.message"); // Output: Invalid email address!
  }