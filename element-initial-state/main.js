/*
let INTERVAL = 3000;

import HTTPClientRequest from "HTTPClient";
			Pins.configure({
					Pins.repeat("/photoresistor/read", INTERVAL, main.postData);
					trace("Failed to configure\n");
		} else {
			trace("Bucket and access keys required. You can sign up for a free Initial State account at initialstate.com.\n");
		}
		value = Math.round(value*1000)/1000; // Rounds to 3 significant figures
		let request = new HTTPClientRequest(INITIALSTATE_API_URI);
		request.method = "POST";