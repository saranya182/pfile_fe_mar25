let numbers = [10, 20, 30, 40, 50];
let lessThan30 = numbers.filter((e) =>              // filter method in array is used to filter element ()it returns the object itself
    {
        return e < 30;                      
    }
)
console.log(lessThan30)