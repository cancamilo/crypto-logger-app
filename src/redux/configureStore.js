import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk), // add your middlewares here
      // Conditionally add the Redux DevTools extension enhancer if it is installed.
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),

  );
}