// 1. ekta object likhben zeita student info ke resuable korbe .
const studentTemplate = {
  name:"",
  age: 0,
  subject: [],
  address:{
    district:"",
    upazila:""

  },
  showInfo: function () {
    console.log(`Name: ${this.name}`)
    console.log(`Age: ${this.age}`)
    console.log(`Subject: ${this.subject.join(", ")}`)
    console.log(`Address: ${this.address.district} ${this.address.upazila}`)

  }
}

const student1 = {
  ...studentTemplate,
  name:"Rana Islam",
  age:20,
  subject: ['Apple','Banana'],
  address:{
    district:"dinajpur",
    upazila:"sadar"
  }
}
const student2 = {
  ...studentTemplate,
  name:"Rakib Islam",
  age:22,
  subject: ['Apple','Banana','Lichi'],
  address:{
    district:"Rangpur",
    upazila:"sadar"
  }
}

student1.showInfo()
student2.showInfo()

// 2 . ekta object er operation gula explore korben like create update and delte .

// create object 
const person = {
  name:"Rana Islam",
  age:20,
  roll:600837,
}
// add , update 
person.country = "Bangladesh";
person.roll = 22;
console.log("Person add update: ",person);

// delete roll
delete person.roll
console.log("Person delete:", person);

// 3 . object er theke data destructure korben 

const person2 = {
  name: "Rana Islam",
  age: 22,
  country: "Bangladesh",
};

delete person2.age

const { name, age, country } = person2;
console.log("Person2: ",name); 
console.log("Person2:",age); 
console.log("Person2: ",country);
