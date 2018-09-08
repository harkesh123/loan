import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./login.js";
import Regester from "./reg.js";
import User from "./user.js";
import Admin from "./admin.js";



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:1254
    }
  }
  onLogin=(password,name)=>{
 fetch("https://loanback.herokuapp.com/s",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({
    User_name:name
   })})
  .then(res=>{return res.json()})
  .then(da=>{if(da.length===0){alert("User Name Does not exists")}
    else if(da["0"].Password==password){
      if(name==="Admin"){window.location.replace("/Admin","/");}
        else{
          this.setState({
           User:{ name:name,
            type:da[0].type
          }})
           window.location.replace("/u/"+name+"/t/"+da[0].type,"/");
        }
      }
     else{alert("Wrong Password")}})
  }

  onReg=(name,pass,type)=>{
    if(type){
      fetch("https://loanback.herokuapp.com/reg",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({
    User_name:name,
    Password:pass,
    type:"borrower",
    Borrowed:{},
    Req:{}
   })})
  .then(res=>{return res.json()})
  .then(da=>{if(!da.status){alert("User Name exists")}
    else {
      alert("Successful Now Login")
      window.location.replace("/","/regester");}
      })
    }
    else{
      fetch("https://loanback.herokuapp.com/reg",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({
    User_name:name,
    Password:pass,
    type:"lender",
    lent:{}
   })})
  .then(res=>{return res.json()})
  .then(da=>{if(!da.status){alert("User Name exists")}
    else {
      alert("Successful Now Login")
      window.location.replace("/","/regester");}
      })      
    }
    
  }

  render() {
    return (
      <Router>
      <div>
      <Switch>
      <Route exact path="/" render={(props) => { return(
          <Login onClick={this.onLogin}  />);
          }}/>
       <Route exact path="/regester" render={(routeProps) => (
          <Regester onReg={this.onReg} />
          )}/>
        <Route path="/u/:User_name/t/:type" component={Page}/>
        <Route exat path="/Admin" component={Admin}/>
       </Switch>
      </div>
      </Router>
    );
  }
}

const Page=({match})=>{
    return(
      <div>
      <User
      name={match.params.User_name}
      type={match.params.type}/>
      </div>
      );
  console.log(match.params.User_name)
}

export default App;
