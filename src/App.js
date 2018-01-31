<<<<<<< HEAD
import React, {Component} from 'react'
import HashStoreContract from '../build/contracts/HashStore.json'
import getWeb3 from './utils/getWeb3'

const contract = require('truffle-contract')

var NotificationSystem = require('react-notification-system');
var Loader = require('react-loader');

import SubmitForm from './components/SubmitForm';
import RecentSubmissions from './components/RecentSubmissions';
import FetchForm from './components/FetchForm';

const IPFS = require('ipfs-mini');

=======
import React, { Component } from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import getWeb3 from './utils/getWeb3'

>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

<<<<<<< HEAD
=======
// import SubmitForm from './components/SubmitForm';
// import RecentSubmissions from './components/RecentSubmissions';
import FetchForm from './components/FetchForm';

const IPFS = require('ipfs-mini');

>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
<<<<<<< HEAD
      web3: null,
      submitFormDisplayed: false,
      fetchFormDisplayed: false,
      recentSubmissionsDisplayed: false
    }
  }

  addNotification(message, level) {
    this._notificationSystem.addNotification({
      message: message,
      level: level,
      position: "br"
    });
  }

  componentWillMount() {
    this.setupWeb3((err) => {
      if (err) {
        return console.log(err);
      }
      this.instantiateContract();
    });
    this.setupIpfs();
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
    this.addNotification("Welcome!", "success")
  }

  setupWeb3(cb) {
    this.setState({loadingWeb3: true,});
    getWeb3.then(results => {
      let web3 = results.web3;
      if (!web3) {
        return this.setState({
          loadingWeb3: false,
          network: "Unknown",
          web3: null
        });
      }

      let networkName;
      web3.version.getNetwork((err, networkId) => {
        switch (networkId) {
          case "1":
            networkName = "Main";
            break;
          case "2":
            networkName = "Morden";
            break;
          case "3":
            networkName = "Ropsten";
            break;
          case "4":
            networkName = "Rinkeby";
            break;
          case "42":
            networkName = "Kovan";
            break;
          default:
            networkName = "Unknown";
        }

        this.setState({
          loadingWeb3: false,
          web3: web3,
          networkName: networkName
        });
        cb();
      });
    }).catch((err) => {
      this.setState({loadingWeb3: false});
      console.log('Error finding web3.', err.message);
    });
=======
      storageValue: 0,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
    this.setupIpfs();
    console.log('setupIpfs')
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
  }

  setupIpfs() {
    const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
    this.setState({ipfs: ipfs});
<<<<<<< HEAD
  }

  instantiateContract() {
    const hashStoreContract = contract(HashStoreContract);
    hashStoreContract.setProvider(this.state.web3.currentProvider);

    hashStoreContract.deployed().then((hashStoreContractInstance) => {
      this.setState({hashStoreContractInstance});
    }).catch((err) => {
      this.addNotification(err.message, "error");
    });
  }



  onSubmit(hashId) {
    this.setState({submitFormDisplayed: false});
  }

  showSubmitForm() {
    this.setState({submitFormDisplayed: true});
    this.setState({fetchFormDisplayed: false});
    this.setState({recentSubmissionsDisplayed: false});
  }

  showFetchForm() {
    this.setState({fetchFormDisplayed: true});
    this.setState({submitFormDisplayed: false});
    this.setState({recentSubmissionsDisplayed: false});
  }

  showRecentSubmissions() {
    this.setState({recentSubmissionsDisplayed: true});
    this.setState({fetchFormDisplayed: false});
    this.setState({submitFormDisplayed: false});
  }

  render() {
    let noNetworkError = (
        this.state.web3 ?
          <h3 className="no-network">The App is not connected to a network, please install and setup MetaMask/Mist</h3> :
          <h3 className="no-network">You're not connected to an Ethereum network. Please install <a href="https://metamask.io/">MetaMask</a> or Mist</h3>
        );

    return (
      <div className="App">
        <NotificationSystem ref="notificationSystem"/>

        <nav className="navbar pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">IPFS Ethereum Demo</a>
=======
  }  

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      simpleStorage.deployed().then((instance) => {
        simpleStorageInstance = instance
        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.get.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
        </nav>

        <main className="container">
          <div className="pure-g">
<<<<<<< HEAD
            <div className="pure-u-3-24"></div>
            <div className="pure-u-18-24">
              <h1>IPFS Ethereum Demo</h1>
              <p><b>Distributed Application (Dapp)</b> running on the Ethereum Blockchain. </p>
              <ul>
                <li>Save text on <a href="https://ipfs.io/" target="_blank">IPFS</a></li>
                <li>Receive a receipt for your text submission</li>
                <li>Log time of submission (via block timestamp)</li>
              </ul>

              <Loader loaded={!this.state.loadingWeb3}>
                {this.state.web3 && ["Unknown", "Rinkeby"].includes(this.state.networkName) ?
                  <div>
                    <div className="pure-u-1-1">
                      <h2>Try it out ! </h2>
                      <button className="pure-button pure-button-primary" onClick={() => this.showSubmitForm()}
                              disabled={this.state.submitFormDisplayed}> Submit Text
                      </button>
                      <button className="pure-button pure-button-primary"
                              onClick={() => this.showFetchForm()}
                              disabled={this.state.fetchFormDisplayed}> Fetch Submission
                      </button>
                      <button className="pure-button pure-button-primary"
                              onClick={() => this.showRecentSubmissions()}
                              disabled={this.state.recentSubmissionsDisplayed}> Recent Submissions
                      </button>

                      {this.state.submitFormDisplayed ?
                        <SubmitForm web3={this.state.web3} ipfs={this.state.ipfs}
                                    hashStoreContractInstance={this.state.hashStoreContractInstance}
                                    addNotification={this.addNotification.bind(this)}
                                    onSubmit={this.onSubmit.bind(this)}/>
                        : null}

                      {this.state.fetchFormDisplayed ?
                        <FetchForm web3={this.state.web3} ipfs={this.state.ipfs}
                                   addNotification={this.addNotification.bind(this)}
                                   hashStoreContractInstance={this.state.hashStoreContractInstance}/>
                        : null}

                      {this.state.recentSubmissionsDisplayed ?
                        <RecentSubmissions web3={this.state.web3} ipfs={this.state.ipfs}
                                           hashStoreContractInstance={this.state.hashStoreContractInstance}
                                           addNotification={this.addNotification.bind(this)}/>

                        : null}

                    </div>
                  </div>
                  :
                  noNetworkError
                }
              </Loader>


            </div>
            <div className="pure-u-3-24"></div>
          </div>

=======
            <div className="pure-u-1-1">
              <h1>Good to Go!</h1>
              <p>Your Truffle Box is installed and ready.</p>
              <h2>Smart Contract Example</h2>
              <p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
              <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
              <p>The stored value is: {this.state.storageValue}</p>
            </div>
          </div>

          <FetchForm 
            web3={this.state.web3} 
            ipfs={this.state.ipfs}
            // addNotification={this.addNotification.bind(this)}
            hashStoreContractInstance={this.state.hashStoreContractInstance}
          />

          <button className="pure-button pure-button-primary" > Submit </button>
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba

        </main>
      </div>
    );
  }
}

export default App
