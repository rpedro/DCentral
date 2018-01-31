pragma solidity ^0.4.18;

contract RefugeeRegister {
    address creator;

    struct Refugee {
        string refugeeId;
        string refugeePublicKey;
        bool active;        
        string ipfsHash;
    }

    ///  map refugee id map to addressess
    Refugee[] public refugees;
    
    function RefugeeRegister() public {
        creator = msg.sender;
    }

    function createRefugee(string refugeeId, string refugeePublicKey, string ipfsHash) public {
        refugees.push(Refugee(refugeeId, refugeePublicKey, true, ipfsHash));       
    }

    function getRefugeeId(uint id) public constant returns (string) {
        return (refugees[id].refugeeId);
    }
}