interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Typescript", lastName: "fan" };

console.log(greeter(user));
