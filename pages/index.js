import { useState, useEffect, useRef, useReducer } from "react";
import axios from "axios";

const Index = (props) => {
	const [gateState, setGateState] = useState(false);
	const fetchStatus = () => {
		console.log("fetching");
		let res = axios
			.get("/api/gate")
			.then((res) => {
				setGateState(res.data.status === "true" ? true : false);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	var apiCall = async (state) => {
		console.log("called api 1");
		await axios({
			method: "post",
			url: "/api/gate",
			params: {
				gate: state ? "open" : "close",
			},
		}).catch((err) => {
			console.log(err);
		});
		fetchStatus();
	};
	useState(() => {
		setInterval(fetchStatus, 8000);
	}, []);
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
