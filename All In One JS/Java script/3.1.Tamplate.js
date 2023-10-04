<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>string tamplete ES6 version</title>
</head>

<body>
    <script>
        // let str = "Guyes!"
        // let name = `subhan`
        // document.write(`Hello ${str} I am "${name}"`)

        // document.write("<br><br>")
        // let string=`Hello ${str} I am "${name}"`
        // document.write(string)


        let str = "Guyes!"
        let name = `subhan`
        function fun(str, second) {
            return `${str} ${name}`
        }
        let string = `Hello ${fun(str, name)}`
        document.write(string)
    </script>
</body>

</html>