import { Permissions, Notifications } from "expo";
import { AsyncStorage } from "react-native";
import axios from "axios";

const PUSH_ENDPOINT = "http://rallycoding.herokuapp.com/api/tokens";

export default async () => {
	// AsyncStorage.removeItem("previousToken");
	let previousToken = await AsyncStorage.getItem("pushtoken");
	console.log("=========pTOken============");
	console.log(previousToken);
	console.log("==========token======================");
	if (previousToken) {
		return;
	} else {
		//status contain information about the permission granted
		let { status } = await Permissions.askAsync(
			Permissions.REMOTE_NOTIFICATIONS
		);
		if (status !== "granted") {
			return;
		}
		let token = await Notifications.getExponentPushTokenAsync();
		await axios.post(PUSH_ENDPOINT, { token: { token } });
		//save it to local storage
		AsyncStorage.setItem("pushtoken", token);
	}
};
