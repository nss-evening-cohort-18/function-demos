const david = {
    firstName: "David",
    lastName: "Yarbrough"
}

const evilDavid = {
    firstName: "David",
    lastName: "Yarbrough"
}

const teachers = [
    david,
    {
        firstName: "John",
        lastName: "Achor"
    },
    {
        firstName: "April",
        lastName: "Watson"
    }
]


const pets = ['cat', 'dog', 'bat'];

console.log(teachers.includes(david))
console.log(teachers.includes({
    firstName: "David",
    lastName: "Yarbrough"
}))
console.log(teachers.includes(evilDavid))