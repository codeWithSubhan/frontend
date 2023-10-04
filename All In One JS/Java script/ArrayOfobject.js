<!DOCTYPE html>
<html lang="en">

<body>
    <script>
        const object = {
            name: "subhan",
            lname: "khan",
            products: [
                {
                    id: 1,
                    phone: 9212,
                    email: "subhan@gmail.com",
                    images: [
                        {info:"infor1"},
                        {info:"detail1"},
                        {info:"22"},
                    ],
                },
                {
                    id: 2,
                    phone: 8890,
                    email: "subhan@gmail.com",
                    images: [
                        {info:"infor2"},
                        {info:"detail2"},
                        {info:"21"},
                    ],
                },
                {
                    id: 3,
                    phone: 1234,
                    email: "subhan@gmail.com",
                    images: [
                        {info:"infor3"},
                        {info:"detail3"},
                        {info:"20"},
                    ],
                },
            ],
        }
        console.log("object", object)
        // console.log(object.name)
        // console.log(object.lname)
        document.write(object.name," ",object.lname,"<br>")

        object.products.map((value) => {
            // console.log(value)
            document.write("ID:",value.id,"<br>")
            document.write("phone: ",value.phone,"<br>")
            document.write("Email:",value.email,"<br>")
            value.images.map((img)=>{
               document.write(img.info,"<br>")
            })
            document.write("<br>")
        })
        

        

    </script>
</body>

</html>