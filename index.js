// Your code here


let createEmployeeRecord = function createEmployeeRecord([name, surname, titre, pay]){
let employees = {
    firstName: name,
    familyName: surname,
    title: titre,
    payPerHour: pay,
    timeInEvents: [],
    timeOutEvents: []
}
 return employees
}



// function createEmployeeRecords(twoRows){
//     let newarray = []
//         for(let i=0;i<twoRows.length;i++){
//            newarray.push(createEmployeeRecord(twoRows[i]))
           
//         }
//         return newarray
//         } 

function createEmployeeRecords(array){
   return array.map(element =>  createEmployeeRecord(element))
    }



function createTimeInEvent(createEmployeeRecord, date){
    createEmployeeRecord.timeInEvents[0] = 'TimeIn'
    createEmployeeRecord.timeInEvents[1] = 'dd'
}


