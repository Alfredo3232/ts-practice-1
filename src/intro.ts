let user = {
    name : "Alfredo",
    age  : 23
};

console.log("Alfredo");
console.log(user.name);

// The name parameter needs to be a string
let testing = (name: string) => {
    return name.length;
}

export default testing