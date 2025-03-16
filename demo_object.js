// khai báo object
let person = {
    namePerson: "Hung",
    age: 25,
    address: " Ngô thì sĩ "
}// cách 1

// let animal = new Object();//cách 2
// animal.name = "cat";
// animal.color = "yellow";


// truy cập vào trong object


// dùng dấu chấm cách 1
console.log("cách 1 person namePerson",person.namePerson);
console.log("cách 1 person age",person.age);
console.log("cách 1 person address",person.address);

// dùng dấu ngoặc vuông cách 2
console.log("cách 2 person name Person ",person["namePerson"]);
console.log("cách 2 person age ",person["age"]);
console.log("cách 2 person address ",person["address"]);
// cách 3 Destructuring

let {namePerson, age, address} = person;

console.log(" cách 3: ",namePerson);
console.log(" cách 3: ",age);
console.log(" cách 3: ",address);

// Cập nhật thêm key cho person
person.email = "hungpham@gmail.com";
person.gender = "Nam";

console.log("Person :",person);

// xoá key trong object

delete person.namePerson;
delete person.address;

console.log("Person :",person);

// Duyệt Object

for( let key in person){
    console.log("value : ",key,person[key]);
}

// lấy key trong Object và chuyển đổi thành mảng

console.log("giá trị key trong person :",Object.keys(person));

console.log("giá trị values trong person :",Object.values(person));


let student = [
    {
        id:1,
        nane: "hung",
        age: 18,
    },
    {
        id:2,
        nane: "hung",
        age: 18,
    },
    {
        id:3,
        nane: "hung",
        age: 18,
    }
]

console.table(student);