// Decorator logMethod
function logMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.value = function () {
      const date = new Date();
      console.log(
        `[${new Date().toLocaleTimeString()}] Method ${propertyKey} executed in ${date}`
      );
    };
  
    return descriptor;
  }
  class Person {
    name: string;
    age: number;
    address: string;
  
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    @logMethod
    setName(name: string): void {
      this.name = name;
    }
  
    @logMethod
    setAge(age: number): void {
      this.age = age;
    }
  }
  
  const person = new Person("John Doe", 25, "123 Main Street");
  person.setName("Jane Doe");
  person.setAge(30);