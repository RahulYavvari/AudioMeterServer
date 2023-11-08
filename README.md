# AudioMeter Server

### Application
AudioMeter is a web based application with it's core in signal processing, tests the users for their deficiency in the hearing levels and generate a report based on the test data.

---

### Requirements
* NodeJS
* MongoDB Local Server (or) MongoDB Atlas

_(NOTE:Save the connection string from the MongoDB Server/Atlas)_

### Setup
* Download the .zip file of this repository, and extract it and navigate into the folder.
* Create a .env file using the command `touch .env`
* To run the server locally as localhost, you need to specify a `PORT`

  * Example: This server will run on the `PORT 3000`
  * 
    ```.env
      PORT=3000
      DB_CONNECTION_STRING="mongodb://localhost:27017"
    ```

### Run the Server
To run ther server, type the following commands in your terminal after setting up the `.env` file.
```bash
  npm install
  npm start
```

The URL to access as a client is `http://localhost:3000/home`
