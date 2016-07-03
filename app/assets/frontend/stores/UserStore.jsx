import AppDispatcher from '../dispatcher.jsx'
import ActionTypes from '../constants.jsx';
import AppEventEmitter from './AppEventEmitter.jsx'

let _users = [];

// fake data
// let _users = [{id: 1, name: 'Yo'}, {id: 2, name: 'Lo'}];

class UserEventEmitter extends AppEventEmitter {
  getAll(){
  	return _users;
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
	// action.actionType == 'RECEIVED_TWEETS'
	switch(action.actionType){
		case ActionTypes.RECEIVED_USERS:
		  _users = action.rawUsers;
		  UserStore.emitChange();
		  break;
		default:
		  // no op
	}
});

export default UserStore;
