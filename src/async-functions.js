function giveItBackLater(value, callback) {
        function loadComplete() {
            callback(value)
        }
        setTimeout(loadComplete, 10)
    }


function promiseToGiveItBackLater(value) {
    return new Promise(function(resolve){
        giveItBackLater(value, function(value) {
            resolve(value)
        })
    })
}

function addSomePromises () {
    const somePromise = new Promise(function(resolve, reject) {
        resolve('')
        reject('')
    }) 
  
    somePromise.then(response => response.repeat(2))
    .catch(error => error.repeat(3))
  

    return somePromise
}

    
module.exports.giveItBackLater = giveItBackLater
module.exports.promiseToGiveItBackLater = promiseToGiveItBackLater
module.exports.addSomePromises = addSomePromises




