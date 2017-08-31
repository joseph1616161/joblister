import _ from "lodash";
import { LIKE_JOB, CLEAR_LIKED_JOBS } from "../actions/types";
import { REHYDRATE } from "redux-persist/constants";

export default function(state = [], action) {
	switch (action.type) {
		case REHYDRATE:
			console.log("============action.type================");
			console.log(action);
			console.log("==========action.type end=================");
			return action.payload.likedJobs || [];
		case CLEAR_LIKED_JOBS:
			return [];
		case LIKE_JOB:
			console.log("============data at Liked_job==============");
			console.log(action);
			console.log([action.payload, ...state]);
			console.log("========= end=================");
			// console.log("==============state liked= state only==================");
			// console.log(state);
			// console.log("==============State lkied end==================");
			// console.log("==============state liked= [state] only==================");
			// console.log([state]);
			// console.log("==============State lkied end==================");
			// console.log("==============state liked=...state==================");
			// console.log([action.payload, ...state]);
			// console.log("==============State lkied end==================");
			// console.log("==============state liked= no ...state==================");
			// console.log([action.payload]);
			// console.log("==============State lkied end==================");
			// console.log("==============state liked= just ...state==================");
			// console.log([...state]);
			// console.log("==============State lkied end==================");
			// console.log("==============actionpayload================");
			// console.log(action.payload);
			// console.log("==============actionpayload== end==================");
			return _.uniqBy([action.payload, ...state], "jobkey");
		default:
			return state;
	}
}
