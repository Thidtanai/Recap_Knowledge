const x = 10
const y = 20

let findMaxMin = (a, b)=>{
    if(a===b) console.log("number is equal")
    if(a>b){
        console.log(`x is max number`);
        console.log(`y is min number`);
    }else {
        console.log(`y is max number`);
        console.log(`x is min number`);
    }
}

findMaxMin(x, y)

const name = "Thid";
const year =  2544;
const thisYear = 2567;
const age = thisYear - year;

if(age >= 22){
    console.log(`Welcome ${name} to Javascript Course`)
}else {
    console.log(`Please wait for team to carry you. Welcome ${name} to JavaScript Course`)
}

