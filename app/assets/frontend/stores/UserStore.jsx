import AppDispatcher from '../dispatcher.jsx'
import ActionTypes from '../constants.jsx';
import AppEventEmitter from './AppEventEmitter.jsx'

let _users = [];
let _followedIds = [];

// fake data
// let _users = [{id: 1, name: 'Yo'}, {id: 2, name: 'Lo'}];

class UserEventEmitter extends AppEventEmitter {
  getAll(){
  	return _users.map( user => {
  		user.following = _followedIds.indexOf(user.id) >= 0;
  		// user.following = false;
  		return user;
  	});
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
	switch(action.actionType){
		case ActionTypes.RECEIVED_USERS:
		  _users = action.rawUsers;
		  UserStore.emitChange();
		  break;
		case ActionTypes.RECEIVED_ONE_FOLLOWER:
		   _followedIds.push(action.rawFollower.user_id);
		   UserStore.emitChange();
		  break;
		default:
		  // no op
	}
});

export default UserStore;
