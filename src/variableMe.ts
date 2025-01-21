// string
let greetings: string = "Hello Alfredo";
// number
let userId: number = 334455.3;
// boolean
let isLoggedIn: boolean = false;

// TypeScript can also infer what type is a variable, depending on its value so actually
// putting :string is redundant
let exampleStr = "I am being inferred";

console.log(greetings);
console.log(userId);
console.log(isLoggedIn);

console.log(exampleStr);


// any - any value can be inserted - not optimal
let hero: any;

function getHero() {
    return "thor";
}

hero = getHero();
// hover over getHero and we get string val

// testing on import to see if typescript and check on different files
import testing from "./intro";
let name: number;

name = testing("alfredo");

console.log(name);
