pragma solidity ^0.4.17;

contract RefugeeRegister {

    struct Refugee {
        uint RefugeeId;
        string FirstName;
		string LastName;
		string MiddleName;
		string Gender;
		uint DateOfBirth;
		string Nationality;
		string RefugeeStatus;
    }

    Refugee[] public Refugees;
    
    mapping (uint => address) public RefugeeToOwner;
    mapping (address => uint) ownerRefugeeCount;

    function _createRefugee(uint _RefugeeId, string _FirstName, string _LastName, string _MiddleName, string _Gender, uint _DateOfBirth, string _Nationality, string _RefugeeStatus) public returns (uint) {
        uint id = Refugees.push(Refugee( _RefugeeId, _FirstName, _LastName, _MiddleName, _Gender, _DateOfBirth, _Nationality, _RefugeeStatus)) - 1;
        RefugeeToOwner[id] = msg.sender;
        ownerRefugeeCount[msg.sender]++;
       
        return _RefugeeId;
    }
}