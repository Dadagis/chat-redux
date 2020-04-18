import { FETCH_MESSAGES, MESSAGE_POSTED } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGE_POSTED: {
      console.log("je suis dans message reducers");
      console.log(state);
      const copiedState = state.slice(0);
      console.log(action.payload);
      copiedState.push(action.payload);
      console.log(copiedState);
      return copiedState;
    }
    default:
      return state;
  }
}
