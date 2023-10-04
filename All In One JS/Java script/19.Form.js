<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form detailss</title>
</head>

<body>
    <form action="" onsubmit="submit()">
        <input type="text" id="lname" onfocus="focusfun(this)" onblur="blurfun(this)" oninput="inputfun(this)" oninvalid="alert('asldg')" required>
        <br /><br /> <input type="text" id="fname" onfocus="focusfun(this)" onblur="blurfun(this)"onchange="changefun(this)">
        <br /><br />
        <select name="" id="" onchange="changefun(this)">
            <option value="india">india</option>
            <option value="usa">usa</option>
        </select>
        <button type="submit">sumbit</button>
    </form>
    <br />
    <div id="text" style="border: 1px solid red;"></div>
    <script>
        function focusfun(element) {
            element.style.background = "red"
        }
        function blurfun(element) {
            element.style.background = ""
        }
        function inputfun(element) {
            var x = element.value
            document.getElementById("text").innerHTML = x
        }
        function changefun(element) {
            var x = element.value
            document.getElementById("text").innerHTML = x
        }
    </script>
</body>

</html>