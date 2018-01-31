<<<<<<< HEAD
var HashStore = artifacts.require("./HashStore.sol");
const Web3 = require('web3');

module.exports = function (deployer) {
  const web3 = new Web3(deployer.provider);
  const price = web3.toWei(0.001, "ether");
  console.log("Deployment Price", price);
  deployer.deploy(HashStore, price);
=======
var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
};
