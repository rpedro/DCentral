App = {
  ipfs: () => {
    const IPFS = require('ipfs-mini').default
    const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
    return ipfs
  },

  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('RefugeeRegister.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var RefugeeRegisterArtifact = data;
      App.contracts.RefugeeRegister = TruffleContract(RefugeeRegisterArtifact);

      // Set the provider for our contract.
      App.contracts.RefugeeRegister.setProvider(App.web3Provider);

      // Use our contract to retieve and mark the adopted pets.
      return App.updateRefugeeRegister();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#submit', App.createBeneficiary);
  },

  createBeneficiary: function(event) {
    event.preventDefault();

    var name = parseInt($('#name').val());
    var surname= $('#surname').val();
    var regNumber = parseInt($('#regnumber').val());
    var nationality = $('#nationality').val();
    var dob = parseInt($('#dob').val());
    var gender = $('#gender').val();
    var head = parseInt($('#head').val());
    var status = $('#status').val();

    const data = JSON.stringify({ name, surname, regNumber, nationality, dob, gender, head, status })

    console.log("Data", data)
    
    var tutorialTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.ipfs().add(data, (err, hash) => {
        if (err) {
          return console.log(err);
        }
        console.log('HASH: ', hash);
      });
    });
  },

  updateRefugeeRegister: function(regNumber, publickey, ipfhash) {

    var RefugeeRegisterInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      // App.contracts.TutorialToken.deployed().then(function(instance) {
      App.contracts.RefugeeRegister.at("0x17feb9e793d684e3f86ce1977e9e20acebf00ba601cc18daaa4f683f00a75e6c").then(function(instance) {
        RefugeeRegisterInstance = instance;

        return RefugeeRegisterInstance.createRefugee(regNumber, publickey, ipfshash);
      }).then(function(result) {
        console.log("Result", result);
        
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
