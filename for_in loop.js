const user = {
  name: "Shivek",
  role: "Frontend Developer",
  location: "Ludhiana"
};

// Method 1
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// Method 2
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});



const tasks = ["Design UI", "Write JS", "Deploy App"];

// forEach
tasks.forEach(task => console.log(task));

// map (returns a new array)
const taskLabels = tasks.map(task => `Task: ${task}`);

// for...of
for (let task of tasks) {
  console.log(task);
}
