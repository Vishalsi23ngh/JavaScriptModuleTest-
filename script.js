/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(person =>{
    if(person.profession === "developer"){
      console.log(person);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(person =>{
    if(person.profession === "developer"){
      console.log(person);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const newPerson= {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newPerson);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter(person =>{
    if(person.profession !== "admin"){
      console.log(person);
    }
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 4, name: "emma", age: "22", profession: "designer" },
    { id: 5, name: "alice", age: "23", profession: "manager" },
    {id: 6, name: "bob", age: "25", profession: "dumbCoder"}
  ];
  const ConcatinateArray = arr.concat(newArr);
  console.log(concatenateArray);
}
