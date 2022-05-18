export {};
let message = "Hiiee vvv";
console.log(message);

let sum;
const title = "Hey";
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Vishwas";

let sentence: string = `My name is ${name}
begfinnnen`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<Number> = [1, 2, 3];

let person1: [string, number] = ["Chris", 22];

enum Color {
  Red = 5,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Yugmesh";

let myVariable: any = 10;
console.log(myVariable.name);
// myVariable();
//myVariable.toUpperCase();

let myVariable1: unknown = 10;
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable1)) {
  console.log(myVariable1.name);
}
//(myVariable1 as string).toUpperCase();

//Type inference
let a;
a = 10;
a = true;

let b = 20;
//b = true;
let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2?: number): number {
  // num2 ? num1 + num2 : num1;
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

add(3, 10);
add(3);

// add(3, "2");
interface Person {
  firstName: string;
  lastName?: string;
}
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
  firstName: "Bruce",
  lastName: "Wayne",
};
fullName(p);

class Employee {
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Vishwas");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log("Manager Delegating task");
  }
}
let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
