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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return fetch(`${UrlApi}/api/client/${id}`, {
      method: "PUT",
      mode: 'cors',
      headers,
      credentials: 'same-origin',
      body: JSON.stringify(client)
    }).then(data =>
      data.json()
    )
  }

  static addClient(client) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return fetch(`${UrlApi}/api/client`, {
      method: "POST",
      mode: 'cors',
      headers,
      credentials: 'same-origin',
      body: JSON.stringify(client)
    }).then(data =>
      data.json()
    )
  }
}

export default ClientApi;