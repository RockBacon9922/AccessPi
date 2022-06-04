import { Gpio } from "onoff";
import { useState } from "react";
import fs from "fs";
// const gate = new Gpio(4, "out");
//open file called gate status
export default function handler(req, res) {
	try {
		var status = fs.readFileSync("gateStatus", "utf8");
	} catch (err) {
		fs.writeFileSync("gateStatus", "false");
		console.log(err);
	}
	// console.log(req.query);
	if (req.query.gate === "close") {
		// gate.writeSync(0);
		//write false to file
		fs.writeFileSync("gateStatus", "false");
		status = false;
		res
			.status(200)
			.json({ message: "Success: Gate is closing", status: status });
	} else if (req.query.gate === "open") {
		fs.writeFileSync("gateStatus", "true");
		status = true;
		// gate.writeSync(1);
		res
			.status(200)
			.json({ message: "Success: Gate is opening", status: status });
	} else {
		res.status(207).json({
			message: "No Command has been sent to the gate",
			status: status,
		});
	}
}
