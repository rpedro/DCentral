pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/RefugeeRegister.sol";

contract TestRefugeeRegister {
  RefugeeRegister refugeeregister = RefugeeRegister(DeployedAddresses.RefugeeRegister());

// Testing the _createRefugee() function
function testUserCan_createRefugee() public {
  uint returnedId = refugeeregister._createRefugee(1, "Rodney", "Pedro", "G", "Male", 60374, "South African", "Active");

  uint expected = 1;

  Assert.equal(returnedId, expected, "Refugee Id matches.");
}
}