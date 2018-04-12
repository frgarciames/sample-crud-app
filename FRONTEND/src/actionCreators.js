import ClientApi from './services/client-api'

const loadClients = () => {
  return dispatch => ClientApi.getAllClients()
    .then(clients => dispatch(successLoadClients(clients)))
    .catch(err => console.error(err))
}

const successLoadClients = clients => {
  return {
    type: "LOAD_CLIENTS",
    clients
  }
}

const addClient = client => {
  return dispatch => ClientApi.addClient(client)
    .then(clients => dispatch(successAddClient(clients)))
    .catch(err => console.error(err))
}

const successAddClient = clients => {
  return {
    type: "ADD_CLIENT",
    clients
  }
}

const editClient = (id, client) => {
  return dispatch => ClientApi.updateClient(id, client)
    .then(clients => dispatch(successUpdateClient(clients)))
    .catch(err => console.error(err))
}

const successUpdateClient = clients => {
  return {
    type: "EDIT_CLIENT",
    clients
  }
}

const removeClient = id => {
  return dispatch => ClientApi.removeClient(id)
    .then(clients => dispatch(successRemoveClient(clients)))
    .catch(err => console.error(err))
}

const successRemoveClient = clients => {
  return {
    type: "REMOVE_CLIENT",
    clients
  }
}

export { loadClients, addClient, editClient, removeClient };