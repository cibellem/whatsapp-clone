const moment = require("moment")

const Utility = {
    getToday
}

//Transform the date 
function getToday() {
    return moment().format("YYYY-MM-DD")
}



module.exports = Utility