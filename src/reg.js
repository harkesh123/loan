import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

// import './App.css';

class Regester extends Component {
	constructor(props){
    super(props);
    this.state={
     value:12
    }
  }
  onClick=()=>{
   var rates = document.getElementById('data').checked;
  	if(this.state.pass1===this.state.pass2){
  		this.props.onReg(this.state.name,this.state.pass1,rates);
        this.setState({
        	pass1:"",
        	pass2:"",
        	name:""
        })
  	}
    else{
          alert("Password's don't match")
         this.setState({
         	pass1:"",
            pass2:""
         })
    }



  }
  
  name=(event)=>{
  	this.setState({name:event.target.value})
  }
  
  pass1=(event)=>{
  	this.setState({pass1:event.target.value})
  }
  
  pass2=(event)=>{
  	this.setState({pass2:event.target.value})
  }
  
  render() {
    return (
    	<Router>
      <div >
      <article class="pa4 black-80">
  <div className="measure center">
    <legend className="f2 fw6 ph0 red mh0">Sign Up</legend>
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="ph0 mh0 fw6 red clip">Sign Up</legend>
      <div class="mt3">
        <label class="db fw4 lh-copy red f6" htmlFor="email-address">User Name</label>
        <input class="pa2 ba b--red bg-transparent w-80 " type="email"  value={this.state.name} onChange={this.name} />
      </div>
      <div class="mt3">
        <label class="db fw4 lh-copy f6 red" htmlFor="password">Password</label>
        <input class="b pa2 input-reset ba b--red bg-transparent w-80" type="password" value={this.state.pass1} onChange={this.pass1}/>
        </div>
        <div className="mt3">
        <label class="db fw4 lh-copy f6 red" htmlFor="password">RE-type Password</label>
        <input class="b pa2 input-reset ba b--red bg-transparent w-80" type="password" value={this.state.pass2} onChange={this.pass2} />
      </div>
        <form className="mt3 " >
        <input type="radio" name="type" id="data"value="borrower" checked/> borrower<br/>
        <input type="radio" name="type" value="lender" /> lender<br/>  
     </form>
    </fieldset>
    <a className="f6 link dim ba ph2 pv2 bg-red mb2 dib white" onClick={this.onClick}>Sign Up</a>
  </div>
</article>

      </div>
      </Router>
    );
  }
}

export default Regester;
