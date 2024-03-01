// 'use client'
import { createStore } from 'redux';

// Import your combined reducer
import rootReducer from './slices/rootReducer';

// Import your root saga

// import ws_DTxnsSaga from "./websocket/ws_DTxnsSaga";

export function makeStore() {
	// const recentTxnsMiddleware = createSagaMiddleware();
	// const recentBlocksMiddleware = createSagaMiddleware();
	// const sagaMiddleware = createSagaMiddleware();
	// const statsMiddleware = createSagaMiddleware();
	// const newRecentBlocksMiddleware = createSagaMiddleware();
	// const dTxnsMiddleware = createSagaMiddleware();

	const store = createStore(rootReducer);

	// Run the root saga
	// recentTxnsMiddleware.run(ws_RecentTxnsSaga);
	// newRecentBlocksMiddleware.run(ws_NewRecentBlocksSaga);
	// recentBlocksMiddleware.run(ws_RecentBlocksSaga);
	// sagaMiddleware.run(rootSaga);
	// statsMiddleware.run(ws_StatsSaga);
	// dTxnsMiddleware.run(ws_DTxnsSaga);

	return store;
}
