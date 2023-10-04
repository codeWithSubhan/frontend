<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // It is a template for JavaScript objects.
        // has proprty and method 
        class Students {

            constructor(name, age, cls) {
                this.myname = name;
                this.myage = age;
                this.myclass = cls;
            }
            // instance method 
            Display() {
                console.log(`${this.myname} and ${this.myage} and ${this.myclass} and ${this.myQuality}`)
            }
        }
        class Player extends Students{

            constructor(name, age, cls,quality) {
                super(name, age, cls);
                this.myQuality = quality;
                
            }
            show(){
                return `${super.Display()}`
            }
        }
        // let obj1 = new Students("subhan",20,12)
        // obj1.Display()
        
        let obj1 = new Player("subhan",20,12,"sleeping")
        obj1.show()
    </script>
</body>

</html>