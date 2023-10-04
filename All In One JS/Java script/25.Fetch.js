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
        fetch('https://dummyjson.com/products').then((apidata) => {
            //   console.log(apidata)
            return apidata.json()
        })
            .then((currentData) => {
                console.log(currentData)
            })
            .catch((error) => {
                console.log(error)
            })

        // async function test() {
        //     const data = await fetch('https://api.covid19api.com/summary');
        //     const jsonData = await data.json();
        //     console.log(jsonData);
        // }
        // test()




        
        // synchronous function 
        //    function fun1(){
        //         console.log("function 1")
        //     }
        //     function fun2(){
        //         console.log("function 2")
        //         fun1();
        //         console.log("function 2")
        //     }
        //     fun2()

        // Asynchronous function 
        // function fun1() {
        //     setTimeout(() => {
        //         console.log("function 1")
        //     }, 3000)
        // }
        // function fun2() {
        //     console.log("function 2")
        //     fun1();
        //     console.log("function 2")
        // }
        // fun2()
    </script>
</body>

</html>