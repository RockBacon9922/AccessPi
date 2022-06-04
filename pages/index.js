import { useState, useEffect, useRef, useReducer } from "react";
import axios from "axios";

const fetchStatus = () => {
	fetch("/api/gate")
		.then((res) => res.json())
		.then((data) => {
			return data.status;
		})
		.catch((err) => {
			console.log(err);
		});
};
var apiCallState = false;

const Index = () => {
	const [gateState, setGateState] = useState(false);
	var apiCall = (state) => {
		if (apiCallState) {
			setGateState(!gateState);
			axios({
				method: "post",
				url: "/api/gate",
				params: {
					gate: state ? "open" : "close",
				},
			}).then((res) => {
				console.log(res);
			});
		} else {
			apiCallState = !apiCallState;
		}
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
