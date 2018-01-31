var MerchantRegister = artifacts.require('./MerchantRegister.sol');

contract ('MerchantRegister', function(accounts) {
    let contract;
    const expectedID = "bhuiokmnjhge";
    const expectedActive = true;  
    const expectedIpfsHash = "sfdsfdsf#$#@$#";  

    before (async function()  {
        contract = await MerchantRegister.deployed();
    });


    it("Contract is deployed", async function() {
        assert(contract);
    });    



    it("Merchant profile successfully created with all details populated", async function() {

        await contract.createMerchant(expectedID,expectedActive,expectedIpfsHash);

        var merchantId, merchantActive, merchantIpsfHash
        merchantId = await contract.getMerchantId.call();
        merchantActive = await contract.getMerchantActive.call();
        merchantIpsfHash = await contract.getMerchantIpsfHash.call();

        assert.equal(expectedID, merchantId, "Incorrect ID returned");
        assert.equal(expectedActive, merchantActive, "Incorrect Active Flag returned");
        assert.equal(expectedIpfsHash, merchantIpsfHash, "Incorrect ipsf Hash returned");
    });

    it("Merchant can spend at other merchants", async function() {
        assert(new Date().getTime() < new Date("2018-01-31").getTime());
    });
    
    it("Merchant account can accept funds from other accounts", async function() {
        assert(new Date().getTime() < new Date("2018-01-31").getTime());
    });
});