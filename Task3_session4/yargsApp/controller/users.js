const dealWithJson = require("./dealWithJson")
const chalk = require("chalk")
const { number } = require("yargs")
const addUser = (userData) => {
    const data = dealWithJson.readData()
    data.push(userData)
    dealWithJson.writeData(data)
}
const allUsers = () => {
    const data = dealWithJson.readData()
    if(data.length==0) return console.log(chalk.red("no users yet"));
    data.forEach(user=>{
        console.log(chalk.green(`id: ${user.id} - name: ${user.name}
---------------------------------`))
    })
}
const singleUser = (userId) => {
    const data = dealWithJson.readData()
const User=data.find(x=> x.id==userId)
if(!User) return console.log(chalk.red("Not Found"))
console.log(chalk.green(`id: ${User.id} - name: ${User.name} - age: ${User.age} - email: ${User.email}`))
}
const editUser = (userId, newData)=>{
    const data = dealWithJson.readData()
    const User=data.find(x=> x.id==userId)
    var userIndex=Number(data.findIndex(x=> x.id==userId))
    if(!User) return console.log(chalk.red("Not Found"))
 
    newData.name? User.name=newData.name : User.name
    newData.age? User.age=newData.age : User.age
    newData.email? User.email=newData.email : User.email
    newData.status? User.status=newData.status : User.status
    data.splice(userIndex,1,User)
    dealWithJson.writeData(data)



}
const delUser = (userId)=>{
    const data = dealWithJson.readData()
    const User=data.find(x=> x.id==userId)
    var userIndex=Number(data.findIndex(x=> x.id==userId))
    if(!User) return console.log(chalk.red("Not Found"))
    data.splice(userIndex,1)
    dealWithJson.writeData(data)

}
module.exports = {addUser, editUser, allUsers, singleUser, delUser}