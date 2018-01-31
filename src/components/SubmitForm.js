import React, { Component } from 'react'

var Loader = require('react-loader');


class SubmitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingPrice: false,
      fullName: '',
      lastName: '',
      registrationNumber: '',
      nationality: '',
      dateOfBirth: '',
      gender: '',
      headOfHouseHold: ''
    };
  }

  componentWillMount() {
    this.loadPrice();
  }

  loadPrice() {
    this.props.hashStoreContractInstance.price().then((result) => {
      this.setState({ price: result.toNumber() });
    }
    )
  }

  saveText() {
    let { fullName, lastName, registrationNumber, nationality, dateOfBirth, gender, headOfHouseHold } = this.state;
    let data = { fullName, lastName, registrationNumber, nationality, dateOfBirth, gender, headOfHouseHold };

    this.setState({ savingText: true });

    this.props.ipfs.addJSON(data, (err, hash) => {
      if (err) {
        this.setState({ savingText: false });
        return this.props.addNotification(err.message, "error");
      }

      console.log("Saved to IPFS", data);
      console.log("IPFS hash:", hash);

      this.props.hashStoreContractInstance.save(hash, { value: this.state.price, gas: 200000 }).then((result) => {
        /* if(result.receipt.status !== "0x1"){ // can be used after byzantium to check status
           throw new Error("Transaction failed");
        } */

        this.setState({ savingText: false });
        console.log('Data saved successfully, Tx:', result.tx);
        let log = result.logs[0];
        let hashId = log.args._hashId.toNumber();
        this.props.addNotification(`Data saved successfully ! Submission ID: ${hashId}`, "success");
        this.props.onSubmit(hashId);
      })
        .catch((err) => {
          this.setState({ savingText: false });
          this.props.addNotification(err.message, "error");
        });
    });
  }

  updateInputValue(e, field) {
    this.setState({ [field]: e.target.value });
  }

  validForm() {
    if (!this.props.hashStoreContractInstance) {
      return false;
    }

    // return this.state.fullName && this.state.title && this.state.text;
    return this.state.fullName && this.state.lastName &&
      this.state.registrationNumber && this.state.nationality &&
      this.state.dateOfBirth && this.state.gender && this.state.headOfHouseHold
  }

  render() {
    return (
      <div className="SubmitForm">

        <h5>Submission price: {this.props.web3.fromWei(this.state.price, 'ether')} ETH</h5>

        <form className="pure-form">
          <fieldset className="pure-group">
            <input type="text" className="pure-input-1-2" placeholder="Full Name"
              value={this.state.fullName} onChange={e => this.updateInputValue(e, 'fullName')} />
            <input type="text" className="pure-input-1-2" placeholder="Last Name"
              value={this.state.lastName} onChange={e => this.updateInputValue(e, 'lastName')} />
            <input type="text" className="pure-input-1-2" placeholder="Registration Number"
              value={this.state.registrationNumber} onChange={e => this.updateInputValue(e, 'registrationNumber')} />
            <input type="text" className="pure-input-1-2" placeholder="Nationality"
              value={this.state.nationality} onChange={e => this.updateInputValue(e, 'nationality')} />
            <input type="text" className="pure-input-1-2" placeholder="Date of Birth"
              value={this.state.dateOfBirth} onChange={e => this.updateInputValue(e, 'dateOfBirth')} />
            <input type="text" className="pure-input-1-2" placeholder="Gender"
              value={this.state.gender} onChange={e => this.updateInputValue(e, 'gender')} />
            <input type="text" className="pure-input-1-2" placeholder="Head OfHouseHold"
              value={this.state.headOfHouseHold} onChange={e => this.updateInputValue(e, 'headOfHouseHold')} />
          </fieldset>

          <Loader loaded={!this.state.savingText}>
            <button
              type="button"
              className="pure-button pure-input-1-2 button-success"
              disabled={!this.validForm() || this.state.savingText} onClick={() => this.saveText()}
            >
              Save
            </button>
          </Loader>
        </form>
      </div>
    );
  }
}

export default SubmitForm;
