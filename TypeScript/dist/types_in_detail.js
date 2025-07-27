"use strict";
// --Object Types
let n = { x: 5, y: 6 };
console.log(n);
//Optional Properties
let n1 = { x: 6 };
console.log(n1);
let p = { x: 100, y: 100 };
let p_new;
//type alias
//   type MyPoint = {
//     x: number;
//     y: number;
//   }
let p1 = { x: 100, y: 100 };
const typeInDetail = () => {
    // ----Union Types
    let id = 2;
    let x = ["@", "e"];
    const conforms = {
        del: true,
        rodney: false,
        x: "Horse",
        //3:"E"//Not allowed key should be string
    };
};
const classCheck = () => {
    //--- Case 1, Now not work in latest versions, initialization is mandatory
    class Point {
        constructor() {
            // x: number;
            // y: number;
            this.x = 0;
            this.y = 0;
        }
    }
    const pt = new Point();
    pt.x = 1;
    pt.y = 2;
    console.log(pt);
    // It shows no error, either  assigning value or not
    //End case1
    //--- Case2
    class Point1 {
        constructor() {
            this.x = 0;
            this.y = 0;
        }
    }
    const pt1 = new Point1();
    pt1.x = 1;
    pt1.y = 2;
    console.log(pt1);
    // Type will be decided with intialization in class
    //End Case2
    //--- Case 3
    class Point2 {
        constructor(n) {
            this.x = n;
        }
    }
    const pt2 = new Point2(3);
    console.log(pt2);
    //End Case3
    // Case 4 Getters / Setters
    class Student {
        constructor() {
            this._tag_name = "";
            this._standard = 0;
        }
        get tagName() {
            // Validation checks
            return this._tag_name;
        }
        set tagName(value) {
            //Validatoins
            this._tag_name = "#" + value;
        }
        get standard() {
            return this._standard;
        }
        set standard(value) {
            this._standard = value;
        }
    }
    let harry = new Student();
    harry.tagName = "Harry";
    harry.standard = 7;
    console.log("Harry", harry.tagName);
    //End case 4
};
classCheck();
