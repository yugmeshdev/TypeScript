"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
var message = "Hiiee vvv";
console.log(message);
var sum;
var title = "Hey";
var isBeginner = true;
var total = 0;
var name = "Vishwas";
var sentence = "My name is ".concat(name, "\nbegfinnnen");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Chris", 22];
var Color;
(function (Color) {
  Color[(Color["Red"] = 5)] = "Red";
  Color[(Color["Green"] = 6)] = "Green";
  Color[(Color["Blue"] = 7)] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Yugmesh";
var myVariable = 10;
console.log(myVariable.name);
// myVariable();
//myVariable.toUpperCase();
var myVariable1 = 10;
function hasName(obj) {
  return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable1)) {
  console.log(myVariable1.name);
}
//(myVariable1 as string).toUpperCase();
//Type inference
var a;
a = 10;
a = true;
var b = 20;
//b = true;
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
  // num2 ? num1 + num2 : num1;
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}
add(3, 10);
add(3);
function fullName(person) {
  console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
  firstName: "Bruce",
  lastName: "Wayne",
};
fullName(p);
var Employee = /** @class */ (function () {
  function Employee(name) {
    this.employeeName = name;
  }
  Employee.prototype.greet = function () {
    console.log("Good morning ".concat(this.employeeName));
  };
  return Employee;
})();
var emp1 = new Employee("Vishwas");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
  __extends(Manager, _super);
  function Manager(managerName) {
    return _super.call(this, managerName) || this;
  }
  Manager.prototype.delegateWork = function () {
    console.log("Manager Delegating task");
  };
  return Manager;
})(Employee);
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
