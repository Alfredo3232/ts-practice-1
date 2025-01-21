// You can build your types, like in this instance
// we are building a object type of a user
type User = {
    name: string;
    email: string;
    isActive: boolean;
};

// type str = string;
// type boo = boolean;
// type num = number;

// You can use it like a regular type
function createUser(user: User) {}

createUser({
    // VSCode will tell you that your object does not adhere to type User
    name: "Alfredo", // However it won't right now because everything adheres to User
    email: "example@mail.com",
    isActive: true
});
