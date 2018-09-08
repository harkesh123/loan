import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Admin extends Component {
  constructor(props){
    super(props);
    this.state={
    	list:[],
    	list1:[]
    }
        
  }

  componentWillMount=()=>{
  	fetch("https://loanback.herokuapp.com/s",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({ })})
  .then(res=>{return res.json()})
  .then(da=>{this.setState({list:da})})

  fetch("https://loanback.herokuapp.com/Rl",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({ })})
  .then(res=>{return res.json()})
  .then(da=>{this.setState({list1:da})})
  }
  

  render(){
  	return(
  		<div>
  		<div >
	    <Link to={"/"}>Logout</Link>
	    <h1>{this.props.name}</h1> 
        <div className="overflow-auto">
        <h2>All Users</h2>
        <table className="f6 w-100 mw7 center" cellSpacing="0">
        <thead>
        <tr className="stripe-dark ">
        <th className="fw6 tl ph5 bg-white">User Name</th>
        <th className="fw6 tl ph5 bg-white">Type</th>
        </tr>
        </thead>
        <tbody className="lh-copy">
        {this.state.list.map((d,i)=> {return <tr className="stripe-dark" key={this.state.list._id} >
        <td className="ph5 pv2">{this.state.list[i].User_name}</td>
        <td className="ph5 pv2">{this.state.list[i].type}</td>
        </tr>
        })}
        </tbody>
        </table>
        </div>
	    </div>
	    <div >
        <div className="overflow-auto">
        <h2>All Requests</h2>
        <table className="f6 w-100 mw7 center" cellSpacing="0">
        <thead>
        <tr className="stripe-dark ">
        <th className="fw6 tl ph5 bg-white">User</th>
        <th className="fw6 tl ph5 bg-white">Date</th>
        <th className="fw6 tl ph5 bg-white">Aprove</th>
        <th className="fw6 tl ph5 bg-white">Amount</th>
        <th className="fw6 tl ph5 bg-white">lender</th>
        </tr>
        </thead>
        <tbody className="lh-copy">
        {this.state.list1.map((d,i)=> {return <tr className="stripe-dark" key={this.state.list1._id} >
        <td className="ph5 pv2">{this.state.list1[i].Req_name}</td>
        <td className="ph5 pv2">{this.state.list1[i].date}</td>
        <td className="ph5 pv2">{this.state.list1[i].Aprove}</td>
        <td className="ph5 pv2">{this.state.list1[i].Amount}</td>
        <td className="ph5 pv2">{this.state.list1[i].lender}</td>        
        </tr>
        })}
        </tbody>
        </table>
        <input type="number"  min="0" placeholder="Amount" onChange={this.Amount}  value={this.state.A} />
        <a className="f6 link dim br2 ph1 pv1 mb1 dib white bg-red" onClick={this.onCreat} >Create a Req</a>
        </div>
	    </div>
  		</div>
  		);
  }
}

export default Admin;