import React from "react";
// import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import Editor from "./editor/editor";
import rootReducer from "./editor/reducers/rootReducer";

export default function EditorProvider() {
    return (
        <Provider
        store={createStore(rootReducer, applyMiddleware(thunkMiddleware))}
    >
        <Editor />
    </Provider>
    );
}