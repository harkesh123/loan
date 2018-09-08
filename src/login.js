import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


// import './App.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
     value:12
    }
  }
  onClick=()=>{
  
  this.props.onClick(this.state.password,this.state.name)

  this.setState({
    password:""
  })
   
    // if(1>2){;} 
  }
  name=(event)=>{
    this.setState({name:event.target.value})

  }
  pass=(event)=>{
   this.setState({password:event.target.value})
  }
  render() {
    return (
      <Router >
      <div >
      <main className="pa4 black-80">
  <div className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 red mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy red f6" htmlFor="email-address">User Name</label>
        <input className="pa2 ba b--red hover-transparent bg-transparent w-100 " type="email" onChange={this.name} value={this.state.name} />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy red f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba b--red bg-transparent w-100" type="password" value={this.state.password} onChange={this.pass}/>
      </div>
    </fieldset>
    <div className="">
    <a className="f6 link dim ba ph2 pv2 bg-red mb2 dib white" onClick={this.onClick}>Sign In</a>
    </div>
    <div className="lh-copy mt3">
      <a href="regester" className="f6 link dim red hover-dim db">Sign up</a>
    </div>
  </div>
</main>
     </div>
      </Router>
    );
  }
}

export default Login;
