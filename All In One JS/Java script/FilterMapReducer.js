<script>
    1 // map() method create or return new array
    // sytax: arr.map(function(currentValue, index, arr), thisValue)
    // function(),currentValue: Required. and other are optional
    // thisValue: set Default value undefined
    // const arr = [1, 2, 3, 4, 5];
    // const newArray = arr.map((value, index, arr) => {
    // console.log(value,index,arr)
    // console.log(value)
    // return value;   //use return to return data 
    // })
    // console.log(newArray)


    2 // The filter() method filter element and return a new array with only filtered elements.
    // sytax: arr.filter(function(currentValue, index, arr), thisValue)
    // forEach() same like map() but this does not return new array 
    // const arr = [1, 2, 3, 4, 5, 6, 7];
    // const newArray = arr.filter((value, index, arr) => {
    //     return value < 4;
    // })
    // console.log(newArray)
    // if I do same with map() return true and false element in an array  


    3 // The find() method same as filter() but it stop searching once the elemnt found.
    // const arr = [1, 2, 3, 4, 5, 6, 7];
    // const newArray = arr.find((value, index, arr) => {
    //     return value < 4;
    // })
    // console.log(newArray)


    4 // The reduce() method returns a single value: the function's accumulated result.
    // syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    // const arr = [1, 2, 3, 4, 5];
    // const newArray = arr.reduce((total, value) => {
    //     console.log(total, value)
    //     return total + value
    // })
    // console.log(newArray)
    // map() filter() reducer() are high order array methods 



    // other array methods: 
    // const arr=[1,2,3,4,5]
    // console.log(arr.join("*"))
    // console.log(arr.toString())
    // console.log(arr.split(" "))
    // console.log(arr.trim(check))
    // console.log(arr.length)
    // console.log(arr.length = 2);

    5 //arr.constructor property returns the function that created the Array prototype:
    // const arr=[1,2,3,4];
    // console.log(arr.constructor)

    6 //arr.copyWithin() method copies array elements to another position in the array and changed array.
    // sytax:array.copyWithin(target, start, end)
    // target: Required index from where to past element.
    // start: Optional from element copy .Default is 0.
    // end: end of index not include this index. Default is the array length.
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    // console.log(arr.copyWithin(0,3,5))
</script>