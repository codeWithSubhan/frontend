<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rest Spraed operator</title>
</head>

<body>
    <script>

        // es6 rest parameter
        // number of arguments into an array and do what we want with them. 

        // function sum(name, second, ...arg) {

        //     document.write(`${name} and ${second}: `)
        //     console.log(arg)
        //     let sum = 0
        //     for (let i in arg) {

        //         sum += arg[i]
        //     }
        //     document.write(sum)
        // }

        // sum("subhan","taiyeb",10,20,10,10)

        // spread operator
        // arr = [10, 20, 10, 10]
        // sum("subhan", "taiyeb", ...arr)
        // spread (...) quickly copy all part of array or object into another array or object.
        // spread operator expands elements of an iterable, rest operator compresses them. It

        
        // let arr1=[1,2,3,4,5]

        // let arr2=arr1         //cloning
        // let arr2=[...arr1]    //copy not cloning

        // arr1.push(20)
        // console.log(arr2)


        // let arr2=[6,7]
        // let arr3=[0,...arr1,10,...arr2,8]        //merging arrays
        // console.log(arr3)


        // same for object 
        // let obj1={
        //     name:"subhan",
        //     age:18
        // }
        // let obj2={
        //     course:"bca"
        // }
        // let obj3={color:"blue",...obj1,subject:"Enlish",...obj2,marks:40}
        // console.log(obj3)
    </script>
</body>

</html>