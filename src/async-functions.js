function giveItBackLater(value, callback) {
        function loadComplete() {
            callback(value)
        }
        setTimeout(loadComplete, 100)
    }

function promiseToGiveItBackLater(){}

function addSomePromises(){}
    
module.exports.giveItBackLater = giveItBackLater
module.exports.promiseToGiveItBackLater = promiseToGiveItBackLater
module.exports.addSomePromises = addSomePromises




