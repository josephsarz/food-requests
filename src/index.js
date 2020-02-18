import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Footer } from "./components/footer/footer.component";
import "./index.css";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// fix for the footer
// https://medium.com/@stefanmaretic/react-sticky-footer-f842d5fbd68

const withFooter = WrappedComponent => () => [
  <WrappedComponent key="1" />,
  <Footer key="2" />
];

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const WrapperWithFooter = withFooter(Wrapper);

ReactDOM.render(<WrapperWithFooter />, document.getElementById("root"));

serviceWorker.unregister();
