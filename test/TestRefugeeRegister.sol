pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/RefugeeRegister.sol";


contract TestRefugeeRegister {
	RefugeeRegister refugeeregister = RefugeeRegister(DeployedAddresses.RefugeeRegister());

	// Testing the _createRefugee() function
	function testUserCan_createRefugee() public {
		refugeeregister.createRefugee("ID001", "refugee public key", "ipfs hash goes here");
		string expected = refugeeregister.getRefugeeId(0);
		Assert.equal("ID001", expected, "Refugee Id matches.");
	}
}