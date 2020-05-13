let names = ["Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log("All Place Names")

names.forEach(name => {
    console.log(name)
});

console.log("")

let theNames = names.filter(n => n.startsWith("The"))

console.log("'The' place names")
theNames.forEach(name => console.log(name))