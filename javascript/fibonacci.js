function fibonacci(num) {
  let i=1
  let j=2
  let b=0
  if (num===0)
    return 0
  else if (num===1)
    return 1
  else{ 
  for (let n=2; n<num; n++){
    b=i
    i=j
    j=b+j
  }
  return i
}
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;


const fourth=fibonacci(6)
const second=fibonacci(2)

console.log(fourth)


// Please add your pseudocode to this file
// And a written explanation of your solution
