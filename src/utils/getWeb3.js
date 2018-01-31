import Web3 from 'web3'

<<<<<<< HEAD
let getWeb3 = new Promise(function (resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function () {
    let web3 = window.web3;
=======
let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function() {
    var results
    var web3 = window.web3
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
<<<<<<< HEAD
      web3 = new Web3(web3.currentProvider);
      console.log('Injected web3 detected.');
    } else if (process.env.NODE_ENV === "development") {
      // Fallback to localhost if no web3 injection.
      let provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(provider);
      console.log('No web3 instance injected, using Local web3.');
    }
    else {
      return reject(new Error('No web3 instance injected.'));
    }

    web3.eth.getAccounts((err, accounts) => {
      if (err) {
        return reject(err);
      }

      web3.eth.defaultAccount = accounts[0];
      console.log('Using account:', web3.eth.defaultAccount);
      resolve({web3: web3});
    });
  });
});
=======
      web3 = new Web3(web3.currentProvider)

      results = {
        web3: web3
      }

      console.log('Injected web3 detected.');

      resolve(results)
    } else {
      // Fallback to localhost if no web3 injection. We've configured this to
      // use the development console's port by default.
      var provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')

      web3 = new Web3(provider)

      results = {
        web3: web3
      }

      console.log('No web3 instance injected, using Local web3.');

      resolve(results)
    }
  })
})
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba

export default getWeb3
