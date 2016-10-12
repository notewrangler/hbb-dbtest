export function guestReducer(state={}, {type, payload}) {
  switch (type) {
  case 'FETCH_GUESTS_SUCCEEDED':
    return {...state, ...payload.json};
  case 'CREATE_USER_INITIATED':
    return {...state, optimistic: {name: payload.name, lastSeen: payload.lastSeen}};
  case 'CREATE_USER_SUCCEEDED':
    const {optimistic, ...oldState} = state;
    return {...oldState, [payload.json.name]: optimistic};
  default:
    return state;
  }
}
