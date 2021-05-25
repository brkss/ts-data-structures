

const array : number[] = [];

// write / update O(1)
array[0] = 1;
array[1] = 43;
array[2] = -9;
array[3] = 12;

// O(1)
array.push(100);
array.push(98);

// add element to begining of the array - O(n) 
array.unshift(-33);
array.unshift(99);


console.log(array);

// Delete O(n)
array.splice(4, 1);
 

console.log(array);
