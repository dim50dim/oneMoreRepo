const t9 = (str) => str.trim(); 
const t10 = (num,letter) => num + letter;

function sayHi() {
    console.log('Hello from Git');
}
//////////////////
//////////////////
//////////////////
function work (){
  console.log('WORK');
}

///////////////////////////////////
const VALID_STATUSES = new Set(['SUCCESS', 'FINAL', 'DONE']);

const people = [
    { name: 'Max', age: 20, status: 'IN_PROGRESS' },
    { name: 'Sam', age: 21, status: 'DONE' },
    { name: 'Dan', age: 30, status: 'SUCCESS' },
]

const peopleWithValidStatus = people
        .filter( elem => VALID_STATUSES.has(elem.status))
        .map(person => person.name);

console.log(peopleWithValidStatus); // ['Sam', 'Dan'];

const meetups = [
  { name: 'JavaScript', isActive: true, members: 100 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 600 },
  { name: 'Nodeafaf', isActive: false, members: 600 },
  { name: 'React', isActive: true, members: 500 },
]

const membersOnActiveMeetups = meetups => meetups
  .filter(meetup => meetup.isActive === false)
  .reduce((accum,item) => accum += item.members,0);
  // ?

console.log(membersOnActiveMeetups(meetups)); // 1500
////////////////////////////