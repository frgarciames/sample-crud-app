const Client = require('../entities/client')
const fs = require('fs')
const clients = JSON.parse(fs.readFileSync('../clients.json'))

function findAllNoDetails(req, res) {
	res.json(clients.map(client => {
		return {
			id: client.id,
			name: client.name,
			username: client.username,
			email: client.email,
			phone: client.phone,
			website: client.website
		}
	}))
}

function findAllWithDetails(req, res) {
	res.json(clients);
}

function save(req, res) {
	if (null !== req.body) {
		let clientsOrdered = clients.sort((a, b) => {
			if (a.id < b.id) {
				return -1
			} else if (a.id > b.id) {
				return 1
			}
			return 0
		})
		let idToClient = parseInt(clients[clientsOrdered.length - 1].id) + 1;
		let client = new Client(idToClient,
			req.body.name,
			req.body.username,
			req.body.email,
			req.body.address,
			req.body.phone,
			req.body.website,
			req.body.company);
		clients.push(client);
		res.status(202);
		findAllNoDetails(req, res)
	} else {
		res.status(404);
		res.json({ response: 'Body not valid' });
	}
}

function remove(req, res) {
	let clientToRemove = findClient(req.params.id);
	if (null != clientToRemove) {
		clients.splice(clients.indexOf(clientToRemove), 1);
		findAllNoDetails(req, res)
	} else {
		res.status(404);
		res.json({ response: 'Client not found' })
	}
}

function update(req, res) {
	let id = req.params.id;
	if (null !== id) {
		let clientToUpdate = findClient(req.params.id);
		let index = clients.indexOf(clientToUpdate)
		Object.assign(clientToUpdate, req.body)
		clients[index] = clientToUpdate
		res.status(202)
		findAllNoDetails(req, res)
	} else {
		res.status(404)
		res.json({ response: 'Id not valid' })
	}
}

function findById(req, res) {
  let id = req.params.id;
	if (null !== id) {
    let client = findClient(req.params.id);
    if(null !== client && typeof client == 'object') {
      res.status(200);
      res.json(findClient(id));
    } else {
      res.status(404)
		  res.json({ response: 'Client not found' })
    }
	} else {
		res.status(404)
		res.json({ response: 'Id not valid' })
	}
}

function findClient(id) {
	return clients.filter(client => parseInt(client.id) === parseInt(id))[0]
}

module.exports = {
	findAllNoDetails,
	findAllWithDetails,
	save,
	remove,
	update,
	findById,

}
