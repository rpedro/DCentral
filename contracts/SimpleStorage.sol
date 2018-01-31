pragma solidity ^0.4.18;

contract SimpleStorage {
  uint storedData;
  // address creator;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
