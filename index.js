/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */// Your code here
function createEmployeeRecord(array){
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee

}

function createEmployeeRecords(array){ 
    let records = []
    array.forEach(employee => records.push(createEmployeeRecord(employee)))
    return records
}

function createTimeInEvent(stamp){
    this.timeInEvents.push({
        type: "TimeIn",
        date: stamp.slice(0, -5),
        hour: parseInt(stamp.slice(11))
    })
    return this
}
function createTimeOutEvent(stamp){
    this.timeOutEvents.push({
        type: "TimeOut",
        date: stamp.slice(0, -5),
        hour: parseInt(stamp.slice(11))
    })
    return this
}

function hoursWorkedOnDate(stamp){
    let timeIn = this.timeInEvents.filter(obj => obj.date === stamp)
    let timeOut = this.timeOutEvents.filter(obj => obj.date === stamp)
    let hours = (timeOut[0].hour - timeIn[0].hour)/100
    return hours
}

function wagesEarnedOnDate(date){
    
    return hoursWorkedOnDate.call(this, date)*this.payPerHour
}

function calculatePayroll(array){
    let total = 0
    array.forEach(employee => total+= allWagesFor.call(employee))
    return total
}

function findEmployeeByFirstName(array, name){
    let employee = array.filter(record => record.firstName === name)
    return employee[0]
}
 

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

