<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>object properties</title>
</head>

<body>
    <p>In JavaScript, objects are king. If you understand objects, you understand JavaScript.</p>
    <p>There are different ways to create new objects:</p>
    <!-- <p>
        Create a single object, using an object literal.
        Create a single object, with the keyword new.
        Define an object constructor, and then create objects of the constructed type.
        Create an object using Object.create()
    </p> -->

    <script>
        // Using an Object Literal
        // An object literal is a list of name:value pairs inside curly braces {}.
        // const person ={property:value,property:value}
        // better practce to use const for object
        // const person = {
        //     firstName: "John",
        //     lastName: "Doe",
        //     age: 50,
        //     eyeColor: "blue"
        // };

        //  const x = person;
        // x.age = 10;      // Will change both x.age and person.age
        // console.log(person);



        // This example creates an empty JavaScript object, and then adds 4 properties:
        // const person = {};
        // person.firstName = "John";
        // person.lastName = "Doe";
        // person.age = 50;
        // person.eyeColor = "blue";
        // console.log(person)


        // Using the JavaScript Keyword new
        // using new Object(), and then adds 4 propertie
        // const person = new Object();
        // person.firstName = "John";
        // person.lastName = "Doe";
        // person.age = 50;
        // person.eyeColor = "blue";
        // console.log(person);


        // The examples above do exactly the same.
        // But there is no need to use new Object().
        // For readability, simplicity and execution speed, use the object literal method.



        // Accessing object Properties
        // objectName.property      // person.age
        // objectName["property"]   // person["age"]
        // objectName[expression]   // x = "age"; person[x]

        // const person = {
        //     firstName: "John",
        //     lastName: "Doe",
        //     age: 50,
        //     eyeColor: "blue"
        // };

        // person.firstName = "subhan"
        // person.lastName = "khan"
        // console.log(person)
        // console.log(person.lastName)
        // console.log(person["lastName"])

        // // Adding New Properties
        // person.nationality = "Indian";
        // console.log(person)

        // // The delete keyword deletes a property from an object:
        // delete person.age;
        // console.log(person)
        // console.log(person["age"]);



        // Nested Objects
        //    const myObj = {
        //     name: "John",
        //     age: 30,
        //     cars: {
        //         car1: "abdul",
        //         car2: "subhan",
        //         car3: "taiyeb"
        //     }
        // }
        // console.log(myObj)
        // console.log(myObj.cars)
        // console.log(myObj.cars.car1)
        // console.log(myObj.cars.car1)
        // console.log(myObj["cars"]["car2"])


        // let p1 = "cars";
        // let p2 = "car2";
        // console.log(myObj[p1][p2])




        // Nested Arrays and Objects
        // Array of object
        // Values in objects can be arrays, and values in arrays can be objects:
        // const myObj = {
        //     name: "John",
        //     age: 30,
        //     cars: [
        //         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        //         { name: "BMW", models: ["320", "X3", "X5"] },
        //         { name: "Fiat", models: ["500", "Panda"] }
        //     ]
        // }
        // let x="";
        // for (let i in myObj.cars) {
        //     x += "<h2>" + myObj.cars[i].name + "</h2>";
        //     for (let j in myObj.cars[i].models) {
        //         x += myObj.cars[i].models[j] + "<br>";
        //     }
        // }
        // document.write(x)



        // JavaScript Object Methods
        // Methods are functions stored as object properties.
        // You will typically describe fullName() as a method of the person object, and fullName as a property.
        // const person = {
        //     firstName: "John",
        //     lastName: "Doe",
        //     id: 5566,
        //     fullName: function () {
        //         return (this.firstName + " " + this.lastName).toUpperCase();
        //     },
        //     array:[1,2,3,4,5]
        // };
        // console.log(person.fullName())


        // Adding a new method to an object is easy:
        // Built-In Methods
        // person.name = function () {
        //     return this.firstName + " " + this.lastName;
        // };
        // console.log(person.name())



        // we can change const array and object 
        // const obj = { name: 'subhan', nationality: 'indian', age: 20 };

        // obj={name:'taiyeb',nationality:'indian',age:21}
        // obj.name = 'taiyeb';
        // obj.age = 21;
        // console.log(obj)

        // with array
        // const array=['subhan','indian',20];
        // array=[1,2,3];
        // array[0]='taiyeb'
        // array[1]=21;
        // console.log(array)



        // ES6 VERSION
        // let name = `subhan`
        // let course = `bca`

        // let obj = {
        //     name,
        //     course,
        //     [name]: `ahamd`,
        //     [name + `khan`]: `good Luck`,
        //     show() {
        //         return `${this.subhankhan} for ${this.course}`
        //     }
        // }

        
        // console.log(obj)
        // console.log(obj.subhan)
        // console.log(obj.show())
        // console.log(obj['show']())

        // function student(name, course) {
        //     return { name, course }         //curly backet make as a object
        // }
        // console.log(student(name, course))
    </script>
</body>

</html>