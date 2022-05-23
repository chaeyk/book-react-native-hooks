import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from './components/Button';
import Counter from './components/Counter';
import Dog from './components/Dog';
import Form from './components/Form';
import Length from './components/Length';

const Container = styled.View`
	flex: 1;
	background-color: #fff;
	justify-content: center;
	align-items: center;
`;

const App = () => {
	const [isVisible, setVisible] = useState(true);

	return (
		<Container>
			{/* <Counter /> */}
			{/* <Button
				title={isVisible ? 'Hide' : 'Show'}
				onPress={() => setVisible(prev => !prev)}
			/>
			{isVisible && <Form />} */}
			{/* <Length /> */}
			<Dog />
		</Container>
	);
};

export default App;
