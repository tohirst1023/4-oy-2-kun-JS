// let tohir = ["Tohir", 16, "Tinchlik"];

// console.log(`${tohir[0]} ${tohir[1]}, yoshda ${tohir[2]}da yashaydi `);

// let tohirobj = {
//     name:"Tohir",
//     age: 16,
//     address: "Tinchlik"
// }

// console.log(`${tohirobj["name"]} ${tohirobj["age"]}, yoshda ${tohirobj["address"]}da yashaydi`);

let ism = prompt("Ismingizni kiriting")
let spaceId = Number(prompt("Id ingizni kiriting"));
let spacePass = Number(prompt("Parolingizni kiriting"));

let obj = {
    name:ism,
    spaceId:spaceId,
    spacePass:spacePass 

};

console.log(obj);