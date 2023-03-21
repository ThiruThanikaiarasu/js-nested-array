let array1 = [3,1]
let array2 = [0,4]

// IsNested(array1,array2)

console.log(IsNested(array1,array2))

function IsNested(array1,array2)
{
    let min_value_array1 = 9999;
    let max_value_array1 = 0;
    let min_value_array2 = 9999;
    let max_value_array2 = 0;
    
        minValue = Infinity;
        maxValue = -Infinity;
      
        for (item of array1) {
            // find minimum value
            if (item < min_value_array1)
                min_value_array1 = item;
      
            // find maximum value
            if (item > max_value_array1)
                max_value_array1 = item;
        }

        for (item of array2) {
            // find minimum value
            if (item < min_value_array2)
                min_value_array2 = item;
      
            // find maximum value
            if (item > max_value_array2)
                max_value_array2 = item;
        }

        console.log(min_value_array1)
        console.log(max_value_array1)
        console.log(min_value_array2)
        console.log(max_value_array2)
    

    return (min_value_array1>min_value_array2)&&(max_value_array1<max_value_array2);

}

