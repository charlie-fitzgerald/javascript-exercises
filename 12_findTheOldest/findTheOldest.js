const findTheOldest = function(people) {
    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.age = (new Date().getFullYear()) - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    })
    
    people.sort((a, b) => {
        if (a.age > b.age) {
            return -1;
        } else {
            return 1;
        }
    })

    console.log(people[0].name)
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
