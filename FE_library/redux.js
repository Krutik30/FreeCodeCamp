const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  
  const store = Redux.createStore(reducer)

    // <!-- ------------------------------------------------------------------------------------------------ -->

    store = Redux.createStore(
        (state = 5) => state
      );
      
      // Change code below this line
      const currentState = store.getState()
      
      console.log(store);
      console.log(currentState);

    // <!-- ------------------------------------------------------------------------------------------------ -->

// Define an action here:

let action={
  type: 'LOGIN'
}

console.log(action);

    // <!-- ------------------------------------------------------------------------------------------------ -->

    action = {
      type: 'LOGIN'
    }
    // Define an action creator here:
    
    const actionCreator = () => action;
    
    console.log(actionCreator());

    // <!-- ------------------------------------------------------------------------------------------------ -->

    const store = Redux.createStore(
      (state = {login: false}) => state
    );
    
    const loginAction = () => {
      return {
        type: 'LOGIN'
      }
    };
    
    // Dispatch the action here:
    
    store.dispatch(loginAction());
    console.log(store.dispatch(loginAction()))
    
    // <!-- ------------------------------------------------------------------------------------------------ -->


    const defaultState = {
      login: false
    };
    
    const reducer = (state = defaultState, action) => {
      // Change code below this line
      if (action.type === "LOGIN") {
        return {
          login: true
        };
      } else {
        return state;
      }
      // Change code above this line
    };
    
    const store = Redux.createStore(reducer);
    
    const loginAction = () => {
      return {
        type: 'LOGIN'
      }
    };
    
    console.log(reducer(defaultState,loginAction));

    // <!-- ------------------------------------------------------------------------------------------------ -->
    const defaultState = {
      authenticated: false
    };
    
    const authReducer = (state = defaultState, action) => {
      // Change code below this line
      switch (action.type) {
        case "LOGIN":
          return {
            authenticated: true
          };
    
        case "LOGOUT":
          return {
            authenticated: false
          };
    
        default:
          return defaultState;
      }
      // Change code above this line
    };
    
    const store = Redux.createStore(authReducer);
    
    const loginUser = () => {
      return {
        type: 'LOGIN'
      }
    };
    
    const logoutUser = () => {
      return {
        type: 'LOGOUT'
      }
    };
    
    console.log(store);

    // <!-- ------------------------------------------------------------------------------------------------ -->

    const LOGIN = 'LOGIN',LOGOUT = 'LOGOUT';

    const defaultState = {
      authenticated: false
    };
    
    const authReducer = (state = defaultState, action) => {
    
      switch (action.type) {
        case LOGIN: 
          return {
            authenticated: true
          }
        case LOGOUT: 
          return {
            authenticated: false
          }
    
        default:
          return state;
    
      }
    
    };
    
    const store = Redux.createStore(authReducer);
    
    const loginUser = () => {
      return {
        type: LOGIN
      }
    };
    
    const logoutUser = () => {
      return {
        type: LOGOUT
      }
    };

    // <!-- ------------------------------------------------------------------------------------------------ -->

    const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const incrementCount = () => (++count);
store.subscribe(incrementCount)
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
    // <!-- ------------------------------------------------------------------------------------------------ -->

    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';
    
    const counterReducer = (state = 0, action) => {
      switch(action.type) {
        case INCREMENT:
          return state + 1;
        case DECREMENT:
          return state - 1;
        default:
          return state;
      }
    };
    
    const LOGIN = 'LOGIN';
    const LOGOUT = 'LOGOUT';
    
    const authReducer = (state = {authenticated: false}, action) => {
      switch(action.type) {
        case LOGIN:
          return {
            authenticated: true
          }
        case LOGOUT:
          return {
            authenticated: false
          }
        default:
          return state;
      }
    };
    
    const rootReducer = Redux.combineReducers({
      count: counterReducer,
      auth: authReducer
    })// Define the root reducer here
    
    const store = Redux.createStore(rootReducer);


    // <!-- ------------------------------------------------------------------------------------------------ -->

    const ADD_NOTE = 'ADD_NOTE';

    const notesReducer = (state = 'Initial State', action) => {
      switch(action.type) {
        // Change code below this line
          case ADD_NOTE:
            return action.text;
        // Change code above this line
        default:
          return state;
      }
    };
    
    const addNoteText = (note) => {
      // Change code below this line
        return {
          type: ADD_NOTE,
          text: note
        };
      // Change code above this line
    };
    
    const store = Redux.createStore(notesReducer);
    
    console.log(store.getState());
    store.dispatch(addNoteText('Hello!'));
    console.log(store.getState());

    // <!-- ------------------------------------------------------------------------------------------------ -->



