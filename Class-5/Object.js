function person (name,age){
  this.name = name;
  this.age = age;
}

const personOne = new person("Rana Islam", 20);
console.log(personOne);


class Student {
  constructor(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Roll: ${this.roll}`);
  }
}

const student1 = new Student("Rana", 21, 1);
const student2 = new Student("Rakib", 20, 2);
const student3 = new Student("Nifad", 22, 3);

student1.showInfo();
student2.showInfo();
student3.showInfo();

