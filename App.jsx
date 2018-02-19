import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
	render() {
	return(
		<div>
		<h1>hello,{this.props.name}</h1>
		<h3>array:{this.props.propArray}</h3>
		<h3>Bool:{this.props.propBool?"true.." : "false.."}</h3>
		<h3>Func:{this.props.propFunc(3)}</h3>
		<h3>number:{this.props.propNumber}</h3>
		<h3>string:{this.props.propString}</h3>
		</div>
		);
	}
}
App.propTypes = {
	name:PropTypes.string,
	propArray:PropTypes.array.isRequired,
	propBool:PropTypes.bool.idRequired,
	propFunc:PropTypes.func,
	propNumber:PropTypes.number,
	propString:PropTypes.string,
};
App.defaultProps={
	name : 'Tutorials.com',
	propArray:[1,2,3,4,5],
	propBool:true,
	propFunc:function(e){
		return e
	},
	propNumber:1,
	propString:"string value"
}
export default App;