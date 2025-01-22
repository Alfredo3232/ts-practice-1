// You can build your types, like in this instance
// we are building a object type of a user
type User = {
    // readonly doesn't let you change it later on
    // readonly name: string;
    name: string;
    email: string;
    // the "?" means that this property is optional
    // isActive?: boolean;
    isActive: boolean;

};

// type str = string;
// type boo = boolean;
// type num = number;

// You can use it like a regular type
function createUser(user: User): User {
    return user;
}

createUser({
    // VSCode will tell you that your object does not adhere to type User
    name: "Alfredo", // However it won't right now because everything adheres to User
    email: "example@mail.com",
    isActive: true
});
