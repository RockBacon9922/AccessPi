import { useState } from "react";
const Index = () => {
	var [gateState, setGateState] = useState(false);
	return (
		<>
			<span>
				<h1>{gateState ? "yes" : "no"}</h1>
				<button onClick={() => setGateState(!gateState)}>
					Toggle gateState
				</button>
			</span>
		</>
	);
};

export default Index;
