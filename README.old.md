# crown-clothing-app

For routing, we are using react-router-dom library.

- Redux
-------
- Good for managing large state.
- Useful for sharing data between components.
- Predictable state management using the 3 principles.
  1. Single source of truth
  2. State is read only
  3. Changes using pure functions.

  Process working
  - Action => Root Reducer => Store => DOM changes

  - Action => Dispatcher => Store => View

 What is Reducer ?
 - Every reducer is a fucntion that takes two arguments.
   a) state
   b) action

 - Reducer returns an object which is the new state of that reducer. Without creating that new object, react won't be rerendered as the way we wanted to be.

- Reducer will take current state nd the action. It checks the action type. If the action type matches with any of the switch case, it will assing the payload as the we object has been defined. If there is any switch case matches with the action type, reducer has a default switch case that will simply return the currentste. The currentstate has no state changes and its not a new object. So this would not rerender and we can avoid unwanted rerendering processes.


Steps to code for redux
----------------------
1. Installation : npm add redux redux-logger react-redux
2. Add provider in the index.js file. IT could be importted from the react redux
  import {Provider} from 'react-redux';
3. This provider has to be the parent for all the components in the application. So wrap the components inside the index.js with the provider like below.

  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

4. Write the store.
5. Create root-reducer
   - The root-reducer combines all of the states.
6. Create individual reucers with action and state.
7. Bring up the individual reducers into the root reducer.
8. Middleware: Middleware used between the action and the root reducer.
               Middleware is a logger.
  



