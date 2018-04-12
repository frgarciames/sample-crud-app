class Client {
    constructor(id, name, username, email,
                adress, phone, website, 
                company){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = adress;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

module.exports = Client