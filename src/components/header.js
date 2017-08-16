// 1. import libraries
import React from 'react';
import { Text, View } from 'react-native';

// 2. make a component is a js function that returns some amount of JSX
// there can only be a one component per file and it's name must match the filename
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	// JSX is still just a dialect of javascript and syntactic sugar, 
	// try babeljs.io/repl/

	// include styles as properties
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	} 
};

// 3. make component available to other parts of app

export default Header;
