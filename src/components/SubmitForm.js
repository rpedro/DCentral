import React, {Component} from 'react'

var Loader = require('react-loader');


class SubmitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingPrice: false,
      fullName: '',
<<<<<<< HEAD
      lastName: '',
      registrationNumber: '',
      nationality: '',
      dateOfBirth: '',
      gender: '',
      headOfHouseHold: ''
=======
      title: '',
      text: '',
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
    };
  }

  componentWillMount() {
    this.loadPrice();
  }

  loadPrice() {
    this.props.hashStoreContractInstance.price().then((result) => {
        this.setState({price: result.toNumber()});
      }
    )
  }

  saveText() {
<<<<<<< HEAD
    let {fullName, lastName, registrationNumber, nationality, dateOfBirth, gender, headOfHouseHold} = this.state;
    let data = {fullName, lastName, registrationNumber, nationality, dateOfBirth, gender, headOfHouseHold};

    this.setState({savingText: true});

=======
    let {fullName, title, text} = this.state;
    let data = {fullName, title, text};

    this.setState({savingText: true});
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
    this.props.ipfs.addJSON(data, (err, hash) => {
      if (err) {
        this.setState({savingText: false});
        return this.props.addNotification(err.message, "error");
      }

      console.log("Saved to IPFS", data);
      console.log("IPFS hash:", hash);

      this.props.hashStoreContractInstance.save(hash, {value: this.state.price, gas: 200000}).then((result) => {
        /* if(result.receipt.status !== "0x1"){ // can be used after byzantium to check status
           throw new Error("Transaction failed");
        } */

        this.setState({savingText: false});
        console.log('Data saved successfully, Tx:', result.tx);
        let log = result.logs[0];
        let hashId = log.args._hashId.toNumber();
        this.props.addNotification(`Data saved successfully ! Submission ID: ${hashId}`, "success");
        this.props.onSubmit(hashId);
<<<<<<< HEAD
      })
      .catch((err) => {
=======
      }).catch((err) => {
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
        this.setState({savingText: false});
        this.props.addNotification(err.message, "error");
      });
    });
  }

  updateInputValue(e, field) {
    this.setState({[field]: e.target.value});
  }

  validForm() {
    if (!this.props.hashStoreContractInstance) {
      return false;
    }

<<<<<<< HEAD
    // return this.state.fullName && this.state.title && this.state.text;
    return this.state.fullName && this.state.lastName && 
            this.state.registrationNumber && this.state.nationality && 
            this.state.dateOfBirth && this.state.gender && this.state.headOfHouseHold
=======
    return this.state.fullName && this.state.title && this.state.text;
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
  }

  render() {
    return (
      <div className="SubmitForm">

        <h5>Submission price: {this.props.web3.fromWei(this.state.price, 'ether')} ETH</h5>

        <form className="pure-form">
          <fieldset className="pure-group">
<<<<<<< HEAD
            <input type="text" className="pure-input-1-2" placeholder="Full Name" 
              value={this.state.fullName} onChange={e => this.updateInputValue(e, 'fullName')} />
            <input type="text" className="pure-input-1-2" placeholder="Last Name"
                   value={this.state.lastName} onChange={e => this.updateInputValue(e, 'lastName')}/>                   
            <input type="text" className="pure-input-1-2" placeholder="Registration Number"
                   value={this.state.registrationNumber} onChange={e => this.updateInputValue(e, 'registrationNumber')}/>
            <input type="text" className="pure-input-1-2" placeholder="Nationality"
                   value={this.state.nationality} onChange={e => this.updateInputValue(e, 'nationality')}/>  
            <input type="text" className="pure-input-1-2" placeholder="Date of Birth"
                   value={this.state.dateOfBirth} onChange={e => this.updateInputValue(e, 'dateOfBirth')}/>   
            <input type="text" className="pure-input-1-2" placeholder="Gender"
                   value={this.state.gender} onChange={e => this.updateInputValue(e, 'gender')}/>                                                       
            <input type="text" className="pure-input-1-2" placeholder="Head OfHouseHold"
                   value={this.state.headOfHouseHold} onChange={e => this.updateInputValue(e, 'headOfHouseHold')}/>
          </fieldset>

          <Loader loaded={!this.state.savingText}>
            <button 
              type="button" 
              className="pure-button pure-input-1-2 button-success"
              disabled={!this.validForm() || this.state.savingText} onClick={() => this.saveText()} 
            >
            Save
=======
            <input type="text" className="pure-input-1-2" placeholder="Full Name"
                   value={this.state.fullName} onChange={e => this.updateInputValue(e, 'fullName')}/>
            <input type="text" className="pure-input-1-2" placeholder="Title"
                   value={this.state.title} onChange={e => this.updateInputValue(e, 'title')}/>
            <textarea className="pure-input-1-2" placeholder="Your Text"
                      value={this.state.text} onChange={e => this.updateInputValue(e, 'text')}
            ></textarea>
          </fieldset>

          <Loader loaded={!this.state.savingText}>
            <button type="button" className="pure-button pure-input-1-2 button-success"
                    disabled={!this.validForm() || this.state.savingText} onClick={() => this.saveText()}>Save
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
            </button>
          </Loader>
        </form>
      </div>
    );
  }
}

export default SubmitForm;
<<<<<<< HEAD

=======
>>>>>>> 55b01f7fb26cbabd53ab2edcaa7d8c59f3881cba
