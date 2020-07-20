import React from 'react';

class Welcome extends React.Component{
	render(){
	return(<div>
		<h1>Welcome World</h1>
		<h2>Hi</h2>
		<Demo />
		</div>);
}
}

function Demo(){
	return(<h1>Function component in class Component</h1>)
}

export default Welcome;