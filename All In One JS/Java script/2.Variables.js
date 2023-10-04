<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>variables</title>
</head>

<body>
    <h1>Variables are containers for storing data (storing data values).</h1>
    <!-- 4 Ways to Declare a JavaScript Variable:
    Using var
    Using let
    Using const
    Using nothing -->

    <h1>JavaScript Identifiers</h1>
    <p>
        <!-- The general rules for constructing names for variables (unique identifiers) are:

        Names can contain letters, digits, underscores, and dollar signs.
        Names must begin with a letter.
        Names can also begin with $ and _ (but we will not use it in this tutorial).
        Names are case sensitive (y and Y are different variables).
        Reserved words (like JavaScript keywords) cannot be used as names. -->
    </p>

    <p>Strings are written inside double or single quotes. Numbers are written without quotes.

        If you put a number in quotes, it will be treated as a text string.</p>
    <p>If variable has no value (technically it is undefined).</p>



    <script>
        // x = 5;
        // y = 6;
        // z = x + y;

        // var x =10;
        // x=20;
        // var x=20;


        //  let can't re-declare
        //  let x =10;
        //      x=20;
        //  let x=20;     wrong


        // contst can't be re-dec and assign value again
        // const x =10;
        // x=20;          wrong
        // const x=20;    wrong



        //JavaScript evaluates expressions from left to right. Different sequences can produce different results:
        // let x = "5" - 2 + 3;
        // let x = 2 + 3 + "5";

        // document.write(x);

        // <p>If you re-declare a JavaScript variable declared with var, it will not lose its value.</p>
        // <p>If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.</p>


        // var y = 10;
        // console.log(y)

        // function test() {
            // var y;
            // y = 20
            // var y = 20
            // console.log(y)
        //     if(2==2){
        //         let y=20;
        //         console.log(y)
        //     }
        //     console.log(y)
        // }
        // test()
        // console.log(y)

    </script>
</body>

</html>