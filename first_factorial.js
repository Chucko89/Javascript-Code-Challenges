//This problem can be solved iteratively...

function FirstFactorial(num) { 

  var factorial = 1

  for (i=2; i <=num; i++) {
    factorial = factorial * i
  }
  return factorial
}

//OR it can be solved recursively

function FirstFactorialRecursion(num) {

  if (num === 1) {
    return 1;
  }

  return num * FirstFactorialRecursion(num-1)

}