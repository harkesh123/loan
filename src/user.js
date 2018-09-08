import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class User extends Component{
	constructor(props){
    super(props);
    this.state={
    	list:[],
    	list1:[],
    	list2:[]
    }
  }

  componentDidMount=()=>{
  if(this.props.type==="borrower"){
  	this.borrow();
  }
  else{
  	this.lender();
  }
  }
   
  //  componentWillUpdate=()=>{ if(this.props.type==="borrower"){
  // 	this.borrow();
  // }
  // else{
  // 	this.lender();
  // }

   //}

   borrow=()=>{
  	var date =new Date();
  	fetch("https://loanback.herokuapp.com//Rl",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({
    Req_name:this.props.name
   })})
  .then(res=>{return res.json()})
  .then(da=>{this.setState({list:da})})
  }

  lender=()=>{
  	fetch("https://loanback.herokuapp.com/Rl",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({
    Aprove:"No"
   })})
  .then(res=>{return res.json()})
  .then(da=>{this.setState({list1:da})})
  console.log("s")
  fetch("https://loanback.herokuapp.com/Rl",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({
    lender:this.props.name
   })})
  .then(res=>{return res.json()})
  .then(da=>{this.setState({list2:da})})
  }

  onCreat=(name)=>{
  	if(this.state.A>0){
  	var date =new Date();
  	fetch("https://loanback.herokuapp.com/req",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({
    Req_name:this.props.name,
    Aprove:"No",
    Amount: this.state.A,
    date:date
   })})
  	this.borrow();
  	(window.location.reload())
   this.setState({A:""});
  }
  else{
  	alert("Enter the amount")
  }

   this.borrow();
  }

  Amount=(event)=>{
  	this.setState({A:event.target.value})
  }

  onDelete=(data)=>{
  	fetch("https://loanback.herokuapp.com/",{
   method: "delete",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({
   	date:data
   })
   })
  	  	(window.location.reload())
  	   this.borrow();
  }
  onUpdate=(data)=>{
  	fetch("https://loanback.herokuapp.com/update",{
   method: "post",
   headers: {"Content-type":"application/json"},
   body:JSON.stringify({
   Selection:{
   	date:data.date
   },
   Change:{
   	Aprove:"Yes",
   	lender:this.props.name
   }
   })
   })
  	.then(res=>{return res.json()})
  	.then(console.log)
  	  	(window.location.reload())

  }
	
	render(){
		if(this.props.type==="borrower"){
		return (
	    <div >
	    <Link to={"/"}>Logout</Link>
	    <h1>{this.props.name}</h1> 
        <div className="overflow-auto">
        <h2>Your Requests</h2>
        <table className="f6 w-100 mw7 center" cellSpacing="0">
        <thead>
        <tr className="stripe-dark ">
        <th className="fw6 tl ph5 bg-white">Date</th>
        <th className="fw6 tl ph5 bg-white">Aprove</th>
        <th className="fw6 tl ph5 bg-white">Amount</th>
        <th className="fw6 tl ph5 bg-white">lender</th>
        </tr>
        </thead>
        <tbody className="lh-copy">
        {this.state.list.map((d,i)=> {return <tr className="stripe-dark" key={this.state.list._id} >
        <td className="ph5 pv2">{this.state.list[i].date}</td>
        <td className="ph5 pv2">{this.state.list[i].Aprove}</td>
        <td className="ph5 pv2">{this.state.list[i].Amount}</td>
        <td className="ph5 pv2">{this.state.list[i].lender}</td>        
        <td className="ph5 pv2"><a className="f6 link dim br2 ph1 pv1 mb1 dib white bg-red" onClick={()=>this.onDelete(this.state.list[i].date)} >delete</a></td>
        </tr>
        })}
        </tbody>
        </table>
        <input type="number"  min="0" placeholder="Amount" onChange={this.Amount}  value={this.state.A} />
        <a className="f6 link dim br2 ph1 pv1 mb1 dib white bg-red" onClick={this.onCreat} >Create a Req</a>
        </div>
	    </div>

			);}
		else{
			return(
				<div>
				<h1>{this.props.name}</h1>

	    <Link to={"/"}>Logout</Link> 
        <div className="overflow-auto">
        <h2>All the Requests</h2>
        <table className="f6 w-100 mw7 center" cellSpacing="0">
        <thead>
        <tr className="stripe-dark ">
        <th className="fw6 tl ph5 bg-white">Date</th>
        <th className="fw6 tl ph5 bg-white">Amount</th>
        <th className="fw6 tl ph5 bg-white">Name</th>
        <th className="fw6 tl ph5 bg-white"></th>
        </tr>
        </thead>
        <tbody className="lh-copy">
        {this.state.list1.map((d,i)=> {return <tr className="stripe-dark" key={this.state.list1._id} >
        <td className="ph5 pv2">{this.state.list1[i].date}</td>
        <td className="ph5 pv2">{this.state.list1[i].Amount}</td>
        <td className="ph5 pv2">{this.state.list1[i].Req_name}</td>        
        <td className="ph5 pv2"><a className="f6 link dim br2 ph1 pv1 mb1 dib white bg-red" onClick={()=>this.onUpdate(this.state.list1[i])} >Accept</a></td>
        </tr>
        })}
        </tbody>
        </table>
        <h2>Accepted</h2>
        <table className="f6 w-100 mw7 center" cellSpacing="0">
        <thead>
        <tr className="stripe-dark ">
        <th className="fw6 tl ph5 bg-white">Date</th>
        <th className="fw6 tl ph5 bg-white">Amount</th>
        <th className="fw6 tl ph5 bg-white">Name</th>
        </tr>
        </thead>
        <tbody className="lh-copy">
        {this.state.list2.map((d,i)=> {return <tr className="stripe-dark" key={this.state.list2._id} >
        <td className="ph5 pv2">{this.state.list2[i].date}</td>
        <td className="ph5 pv2">{this.state.list2[i].Amount}</td>
        <td className="ph5 pv2">{this.state.list2[i].Req_name}</td>        
       </tr>
        })}
        </tbody>
        </table>
        </div>
				</div>
				);
		}
	}
}


export default User;