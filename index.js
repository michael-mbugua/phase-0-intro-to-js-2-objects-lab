// // Write your solution in this file!
// let employee={
//     name:,
//     street:
// }
function updateEmployeeWithKeyAndValue(employee,key,value){
    let employspread={...employee,...key,...value};
    console.log(employspread)
}
updateEmployeeWithKeyAndValue(employeeobj={
    name:"mike",
    key:"254",
    value:"alot"
},'location',"worth")
