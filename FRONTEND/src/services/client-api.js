import { UrlApi } from '../App'

class ClientApi {
  
  static getAllClients() {
    return fetch(`${UrlApi}/api/client`)
    .then(data => 
      data.json()
    )
  }

  static getById(id) {
    return fetch(`${UrlApi}/api/client/${id}`)
    .then(data => 
      data.json()
    )
  }

  static removeClient(id) {
    return fetch(`${UrlApi}/api/client/${id}`, {
      method: "DELETE"
    }).then(data => 
      data.json()
    )
  }

  static updateClient(id, client) {
    return fetch(`${UrlApi}/api/client/${id}`, {
      method: "PUT",
      body: client
    }).then(data => 
      data.json()
    )
  }

  static addClient(client) {
    return fetch(`${UrlApi}/api/client`, {
      method: "POST",
      body: client
    }).then(data => 
      data.json()
    )
  }
}

export default ClientApi;