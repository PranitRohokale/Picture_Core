import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Editor from "./editor/editor";
// import home from "./home/home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from "redux-thunk";
// import rootReducer from "./editor/reducers/rootReducer";
// import { Provider } from 'react-dnd/lib/cjs/DragDropContext';
import EditorProvider from './editor_provider'

ReactDOM.render(
  <BrowserRouter>
  {/* <Provider value={createStore(rootReducer, applyMiddleware(thunkMiddleware))}> */}
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/editor" element={<EditorProvider/>} />
      </Routes>
  {/* </Provider> */}
  </BrowserRouter>
    ,
  document.getElementById('root')
);

