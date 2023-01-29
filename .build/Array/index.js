const strings = ["a", "b", "c", "d"];
strings.push("e");
strings.pop();
strings.pop();
strings.unshift("x");
strings.splice(2, 0, "alien");
console.log(strings);
console.log("============ Class =================");
console.log("============ Referance Type=================");
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
console.log(object1 === object2);
console.log(object1 === object3);
object2.value = 3;
console.log(object1.value);
console.log(object2.value);
console.log(object3.value);
var arr1 = [];
var arr2 = arr1;
var arr3 = [];
console.log(arr1 === arr2);
console.log("============ Instasiation =================");
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name} , I am a ${this.type}`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log("WEEEEE I am a " + this.type);
  }
}
const wizard1 = new Wizard("Mild", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
console.log(wizard1.play());
console.log(wizard1.introduce());
console.log(wizard2.play());
console.log(wizard2.introduce());
//# sourceMappingURL=index.js.map
