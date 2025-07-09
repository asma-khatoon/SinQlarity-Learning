

  // --Object Types

  let n: { x: number; y: number } = { x: 5, y: 6};
  console.log(n);

  //Optional Properties
  let n1: { x: number; y?: number } = { x: 6 };
  console.log(n1);


  // --Interfaces
  // An interface declaration is another way to name an object type:
  //An interface cannot be initialized but class can be used to create new object.
  //Interface is always public but class can be public private protected etc

  interface Point {
    x: number;
    y: number;
  }

  let p: Point = { x: 100, y: 100 };
  let p_new:Point;

  
  //type alias
//   type MyPoint = {
//     x: number;
//     y: number;
//   }

  let p1: MyPoint = { x: 100, y: 100 };

  // Difference between type alias and interface: interface can be redeclared but not type alias
  
  interface Point1 {
      x: number;
      y: number;
      z:number
    }

    type MyPoint = {
      x: number;
      y: number;
    }

const typeInDetail = () => {


  // ----Union Types
  let id: number | string = 2;
  let x: string[] | string = ["@", "e"];

  //----Mapped Types
  type OnlyBoolsAndHorses = {
    [key: string]: boolean | "Horse";
  };

  const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false,
    x: "Horse",
    //3:"E"//Not allowed key should be string
  };


}


const classCheck = () => {

  //--- Case 1, Now not work in latest versions, initialization is mandatory
  class Point {
    // x: number;
    // y: number;
    x: number = 0;
    y: number = 0;
  }
  const pt = new Point();
  pt.x =1;
  pt.y = 2;
  console.log(pt);
  // It shows no error, either  assigning value or not
  //End case1

  //--- Case2
  class Point1 {
    x = 0;
    y = 0;
  }
  const pt1 = new Point1();
  pt1.x = 1;
  pt1.y = 2;
  console.log(pt1);
  // Type will be decided with intialization in class
  //End Case2

  //--- Case 3
  class Point2 {
    x: number;
    constructor(n: number) {
      this.x = n;
    }

  }
  const pt2 = new Point2(3);
  console.log(pt2);
  
  //End Case3


  // Case 4 Getters / Setters
  class Student {
    private _tag_name: String = "";
    private _standard: Number = 0;

    get tagName(): String {
      // Validation checks
      return this._tag_name;
    }
    set tagName(value: String) {
      
        //Validatoins
      
      this._tag_name = "#"+value;
    }

    get standard(): Number {
      return this._standard;
    }
    set standard(value: Number) {
      this._standard = value;
    }
  }

  let harry = new Student();
  harry.tagName = "Harry";


  harry.standard = 7;
  console.log("Harry", harry.tagName);

  //End case 4


}

classCheck();