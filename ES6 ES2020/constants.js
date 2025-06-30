const obj ={user_name: "XYZ",
    age:30, city: "Lucknow"

}
console.log("before change:", obj);
obj.user_name="ABC";
obj.age = 25;
obj.city = "Delhi";
console.log("after change:", obj);