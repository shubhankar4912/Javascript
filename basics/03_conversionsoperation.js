let num=false
let num1="69abc"
console.log(typeof num)
let numval=Number(num)
let numval1=Number(num1)
console.log( typeof numval,'\n',typeof numval1)
console.log(numval,numval1)

// "69"=>69
// "69ac"=>NaN
// true=>1
// false=>0
// undefined=>NaN
let isLoggedIn=undefined
console.log(Boolean(isLoggedIn))
// 1=> true
// 0=>false
// ""=>false
// "sfs"=>true
// null=>false

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
