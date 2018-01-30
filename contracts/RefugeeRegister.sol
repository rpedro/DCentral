pragma solidity ^0.4.17;

contract RefugeeRegister {

    struct Refugee {
        string RefugeeId;
        string FirstName;
		string LastName;
		string MiddleName;
		string Gender;
		string DateOfBirth;
		string Nationality;
		string RefugeeStatus;
        string refugeePublicKey;
    }

    Refugee[] public Refugees;
    

    function _createRefugee(
        string _RefugeeId, 
        string _FirstName, 
        string _LastName, 
        string _MiddleName, 
        string _Gender, 
        string _DateOfBirth, 
        string _Nationality, 
        string _RefugeeStatus,
        string _refugeePublicKey
    ) 
        public 
        returns (uint) 
    {
        uint id = Refugees.push(Refugee( _RefugeeId, _FirstName, _LastName, _MiddleName, _Gender, _DateOfBirth, _Nationality, _RefugeeStatus, _refugeePublicKey)) - 1;
       
        return _RefugeeId;
    }
}