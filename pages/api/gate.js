import { Gpio } from "onoff";
import { useState } from "react";
// const gate = new Gpio(4, "out");
export default function handler(req, res) {
	console.log(req.query);
	// console.log(req.query);
	var status = false;
	// gate.writeSync(status ? 1 : 0);
	// check if key value gate is close
	if (req.query.gate === "close") {
		// gate.writeSync(0);
		status = false;
		res.status(200).json({ message: "Gate is closed", status: status });
	} else if (req.query.gate === "open") {
		status = true;
		// gate.writeSync(1);
		res.status(200).json({ message: "Gate is open", status: status });
	} else {
		res.status(207).json({
			message: "No Command has been sent to the gate",
			status: status,
		});
	}
}
