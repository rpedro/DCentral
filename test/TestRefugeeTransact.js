var RefugeeRegister = artifacts.require('./RefugeeRegister.sol');
var MerchantRegister = artifacts.require('./MerchantRegister.sol');

contract ('RefugeeRegister', function(accounts) {
    let contract;
    // let contractMerchant;
    const refugeeID = "Bryony Ortlepp";
    const refugeePublicKey = accounts[0]; 
    const refugeeActive = true;
    const refugeeIpsfHash = "";
    // const merchantId = "John Smith"
    // const merchantActive = true;        
    // const merchantIpfsHash = "";
  
    before(async function(){
      contract = await RefugeeRegister.deployed();
      //contractMerchant = await MerchantRegister.deployed();
      await contract.createRefugee(refugeeID, refugeePublicKey,refugeeActive,refugeeIpsfHash);

      //await contractMerchant.createMerchant(merchantId, merchantActive,merchantIpfsHash);
  
      //await web3.eth.sendTransaction({from: contract.refugeePublicKey, to: contract.refugeePublicKey, value: web3.toWei('10', 'ether')});
    });
    /* it("Refugee can send money and balance is correctly updated", async function() {
        return new Promise(async (resolve,reject) => {
          const destinationAddress = accounts[2];
          const valueToSend = web3.toWei(0.1, 'ether');
          const destinationBalanceBefore = await web3.eth.getBalance(destinationAddress);
          const contractBalanceBefore = await web3.eth.getBalance(contract.address).toNumber();
          const expectedTransactionId = 1; // not great to hardcode however this should be one on new contract.
    
          var event = contract.Execution([expectedTransactionId], async function(error,result){
    
            const destinationBalanceAfter = await web3.eth.getBalance(destinationAddress);
            const expectedValueAfter = Number(valueToSend) + destinationBalanceBefore.toNumber();
    
            assert(destinationBalanceAfter.toNumber() == expectedValueAfter);
    
            const contractBalanceAfter = await web3.eth.getBalance(contract.address).toNumber();
    
            assert(contractBalanceAfter === contractBalanceBefore - valueToSend);
            resolve();
          });
    
          //nesting sucks, find a better way that preserves using transaction number
          var event = contract.Submission([expectedTransactionId], async function(error, result){
            if (error){
              reject();
              return;
            }
    
            await contract.executeTransaction(expectedTransactionId);
    
          });
    
           await contract.submitTransaction(destinationAddress,valueToSend);
        });
    
      }); */

    /* it("Physical purchase reduces account balance - single user", async function () {
        assert(new Date().getTime() < new Date("2018-01-31").getTime());
    });

    it("Physical purchase reduces account balance - household", async function () {
        assert(new Date().getTime() < new Date("2018-01-31").getTime());
    });

    it("Non-merchant account cannot reduces account balance", async function () {
        assert(new Date().getTime() < new Date("2018-01-31").getTime());
    });

    it("Voucher purchase reduces account balance", async function () {
        assert(new Date().getTime() < new Date("2018-01-31").getTime());
    });

    it("Transaction amount cannot be greater than account balance", async function () {
        assert(new Date().getTime() < new Date("2018-01-31").getTime());
    });

    it("Transaction cannot be processed if account holder is deceased", async function () {
        assert(new Date().getTime() < new Date("2018-01-31").getTime());
    });

    it("Transaction cannot be processed if refugee status is not valid", async function () {
        assert(new Date().getTime() < new Date("2018-01-31").getTime());
    }); */
});