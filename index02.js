const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

/////////////////////////////// function to filter out users who scores above 85/////////////////////////
// const scoresGreaterThan85 = (users) => {
//   const userscoresabove85 = users.filter((elem, index) => elem.scores > 85);
//   console.log(userscoresabove85);
// };

// scoresGreaterThan85(users);

//////////////////////	Write a function which addUser to the user array only if the user does not exist. ///////////  
// const addUser = (user) => {

//   const array = [...users]

//   const find = array.filter((elem, index) => elem.name == user.name)
  
//   switch (find.length) {
//     case 0:
//       array.push(user)
//       console.log("User added.");
//       break;
//     case 1:
//       console.log("user already exist.");
//     default: 
//       break;
//   }

//   console.log(array);
// }

// newUser = {
//   name: "Aman",
//   score: 98,
//   skills: ["React", "Js", "CSS", "HTML", "MongoDB", "Node.Js", "Express"],
//   age: 25
// }
 
// addUser(newUser)




///////////////////////////////To add Skills to already existing user////////////////////////

const addSkills = (user) => {
  
  const array = [...users]

  const find = array.filter((elem, index) => elem.name == user.name)

  if (find.length == 0) {
  return  console.log("user doesn't exist");
  }
  find[0].skills.push(...user.skills)
//  console.log(find[0].skills)
  console.log(array);
}

newUser = {
  name: "Alex",
  score: 98,
  skills: ["MongoDB", "Node.Js", "Express"],
  age: 25
}

addSkills(newUser)