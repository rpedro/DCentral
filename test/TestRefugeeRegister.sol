pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/RefugeeRegister.sol";

contract TestRefugeeRegister {
  RefugeeRegister refugeeregister = RefugeeRegister(DeployedAddresses.RefugeeRegister());

// Testing the _createRefugee() function
function testUserCan_createRefugee() public {
  uint returnedId = adoption.adopt(8);

  uint expected = 8;

  Assert.equal(returnedId, expected, "Adoption of pet ID 8 should be recorded.");
}
}