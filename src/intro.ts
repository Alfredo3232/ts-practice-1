let user = {
    name : "Alfredo",
    age  : 23
};

console.log("Alfredo");
console.log(user.name);

// The name parameter needs to be a string
// We can obviously change this into boolean or number
let testing = (name: string) => {
    return name.length;
}

export default testing