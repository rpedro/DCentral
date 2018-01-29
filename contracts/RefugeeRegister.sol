pragma solidity ^0.4.17;

contract RefugeeRegister {

   // event NewRefugee(uint RefugeeId, string name, uint RefugeeId);

    // uint, default as uint256
    uint RefugeeIdDigits = 16;
    // 10 ^ RefugeeIdDigits
    uint RefugeeIdModulus = 10 ** RefugeeIdDigits;

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

    function _createRefugee(uint _RefugeeId, string _FirstName, string _LastName, string _MiddleName, string _Gender, uint _DateOfBirth, string _Nationality, string _RefugeeStatus) internal {
        uint id = Refugees.push(Refugee( _RefugeeId, _FirstName, _LastName, _MiddleName, _Gender, _DateOfBirth, _Nationality, _RefugeeStatus)) - 1;
        RefugeeToOwner[id] = msg.sender;
        ownerRefugeeCount[msg.sender]++;
        //NewRefugee(id, _FirstName, _LastName, _MiddleName, _Gender);
    }

/*    function _generateRandomRefugeeId(string _FirstName, string _LastName, string _MiddleName, string _Gender) private view returns (uint) {
        // keccak256 built in, which is a version of SHA3. 
        // A hash function basically maps an input string into a random 256-bit hexidecimal number. 
        // 64 characters
        uint rand = uint(keccak256(_FirstName, _LastName, _MiddleName, _Gender));
        return rand % RefugeeIdModulus;
    }

    function createRandomRefugee(string _FirstName, string _LastName, string _MiddleName, string _Gender) public {
        require(ownerRefugeeCount[msg.sender] == 0);
        uint randRefugeeId = _generateRandomRefugeeId(_FirstName, _LastName, _MiddleName, _Gender);
        randRefugeeId = randRefugeeId - randRefugeeId % 100;
        _createRefugee(randRefugeeId, _FirstName, _LastName, _MiddleName, _Gender);
    }
*/
}