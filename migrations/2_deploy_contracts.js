var RefugeeRegister = artifacts.require("RefugeeRegister");
var MerchantRegister = artifacts.require("MerchantRegister");

module.exports = function(deployer) {
  deployer.deploy(RefugeeRegister);
};

module.exports = function(deployer) {
  deployer.deploy(MerchantRegister);
};