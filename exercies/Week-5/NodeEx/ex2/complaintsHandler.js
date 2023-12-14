const consts = require('./consts.js');
const handleComplaints = function (complaint){
if (complaint.type === consts.WEATHER)
    console.log("Money doesn’t grow on trees, you know")
}

module.exports = handleComplaints