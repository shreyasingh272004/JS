let score=33;


console.log("score is",typeof score);
console.log(typeof (score));

let sc="4"
console.log("sc is ",typeof(sc));

let val=Number(sc);
console.log("val is ",typeof(val));

//null=0, undefined=NaN ,boolean=false(by default)i.e 0 nd true-> 1 "33abc"-> if converted to number it'll result in NaN i.e. not a number 

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// empty string-false ,if any string is present then bydefault it's true


let num=44;
console.log(typeof(String(num)));
