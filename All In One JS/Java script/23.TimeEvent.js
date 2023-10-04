<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 150px;
            height: 150px;
            background-color: dodgerblue;
        }
    </style>
</head>

<body>
    <div id="test"></div>
    <button onclick="clearTimeout(stop)">stop</button>
    <script>
        // The window object allows execution of code at specified time intervals.
        // These time intervals are called timing events.

        // The setInterval() method repeats a given function at every given time-interval.
        // setTimeout(function, milliseconds)     1000ms=1s
        // Executes a function, after waiting a specified number of milliseconds.

        // var a = 0;
        // var id = setInterval(anim, 500);
        // function anim() {
        //     if (a == 200) {
        //         clearInterval(id)
        //     }else{
        //         a = a + 10;
        //     // console.log(a)

        //     var taken=document.getElementById("test")
        //     taken.style.marginLeft=a +"px"
        //     }
        // }

        // The clearInterval() method stops the executions of the function specified in the setInterval() method.
        // The clearTimeout() method stops the execution of the function specified in setTimeout().
        // run on specfic time only for one times

        var a = 0;
        var stop = setTimeout(function () {
            

                a = a + 30;
                // console.log(a)

                var taken = document.getElementById("test");
                taken.style.marginLeft = a + "px";
           
        }, 3000)

        

    </script>
</body>

</html>