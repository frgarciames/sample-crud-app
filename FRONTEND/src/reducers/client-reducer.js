const clientReducer = (state = { clients: []}, action) => {
  switch (action.type) {
    case "LOAD_CLIENTS":
      return action.clients 
    case "ADD_CLIENT":
      return action.clients
    case "REMOVE_CLIENT":
      return action.clients
    case "EDIT_CLIENT":
      return action.clients
    case "GET_CLIENT_DETAILS":
      return action.client
    default:
      break;
  }
  return state;
}

export default clientReducer;