// Your code here.

function getFirstName (str){
  return str.firstName;
}

function getLastName (str){
  return str.lastName;
}

function getFullName(str){
  return str.firstName + " " + str.lastName;
}

function setFirstName (str, ronny){
  str.firstName = ronny
}

function setAge(str, ofStr){
  str.age = ofStr
}

function giveBirthday(str){
    if (str.age === undefined){
      return str.age = 1;
    }else {
      return str.age = str.age + 1;
  }
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
