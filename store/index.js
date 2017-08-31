import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";
import reducers from "../reducers";

const store = createStore(
	reducers,
	{},
	compose(applyMiddleware(thunk), autoRehydrate()) //autoRehydrate pull data from asyncstore and
	//pass it to all reudcers
);
//what the store for any changed state, likedjobs from index reducer
persistStore(store, { storage: AsyncStorage, whitelist: ["likedJobs"] });

export default store;
