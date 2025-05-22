// object shorthand assignment

let name = 'jellybo'
let age =  26

let person ={
    // key 와 value값이 일치 할 경우 축약헤서 선언가능
    // name : name,
    // age : age,
    name,
    age
}

console.log(person)


// Destructuring

let person2 ={
    name2 : "jellybo2",
    age2 : 20
}


//  아래처럼 축소해서 사용 할 수 있음

// let name2 = person2.name2
// let age2 = person2['age2']

let {name2, age2} = person2

console.log(name2,age2 )