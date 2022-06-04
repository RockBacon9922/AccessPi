import { useState, useEffect, useRef, useReducer } from "react";
import axios from "axios";

const fetchStatus = () => {
	fetch("/api/gate")
		.then((res) => res.json())
		.then((data) => {
			return res.status;
		})
		.catch((err) => {
			console.log(err);
		});
};
const Index = (props) => {
	const [gateState, setGateState] = useState(false);
	var apiCall = (state) => {
		console.log("called api");
		axios({
			method: "post",
			url: "/api/gate",
			params: {
				gate: state ? "open" : "close",
			},
		}).then((res) => {
			console.log(res);
		});
		setGateState(state);
		console.log(fetchStatus() === 202 ? "open" : "close");
	};
	return (
		<>
			<span>
				<h1>{gateState ? "yes" : "no"}</h1>
				<button onClick={() => apiCall(!gateState)}>Toggle gateState</button>
			</span>
		</>
	);
};

export default Index;
