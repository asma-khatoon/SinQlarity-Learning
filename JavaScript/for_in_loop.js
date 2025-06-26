obj ={
    name: "ABC",
    age: "30",
    Country: "India"
}
for(const key in obj){
    console.log(`${key} of person is ${obj[key]}`);
}