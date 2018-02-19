import React from 'react';

class App extends React.Component {
   
   constructor(){
   super();
   this.state={
   data:
   [
   		{
   			"id":1,
   			"name":"foo",
   			"age":"20"
   		},
   		{
   			"id":2,
   			"name":"boo",
   			"age":"20"

   		},
   		{
   			"id":3,
   			"name":"coo",
   			"age":"20"
   		}]
   }
   }
   render() {
   return (
   <div>
   		<Header/>
   		<table border="1">
   		<tbody>
   		{this.state.data.map((person,i)=> <TableRow key ={i}
   		data={person}/>)}
   		</tbody>
   		</table>
   		
   	</div>
   	);
   	}
}
class Header extends React.Component {
	render(){
	return(
	<div>
	 Hey i am header
	 </div>
	 );
	}
}
class TableRow extends React.Component {
	render() {
	return (
	<tr>
		<td>{this.props.data.id}</td>
		<td>{this.props.data.name}</td>
		<td>{this.props.data.age}</td>
	</tr>
	);
	}
}

export default App;