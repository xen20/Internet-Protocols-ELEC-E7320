### Whiteboard server
The server has the following structure
- **src** : Contains the source code that will be compiled to the dist directory
- **controllers**: Controllers define functions that respond to various http requests
- **interfaces**: Include all types, enums and interfaces the server will use
- **model**: Models define Mongoose schemas that will be used in storing and retrieving data from MongoDB
- **modules**: A folder for all our functions maybe not need  

This express server was inspired from https://github.com/microsoft/TypeScript-Node-Starter 😊

Install the packages
```bash
cd whiteboard-service
npm install
```
Build the app
```bash
npm run build
```
Run the app
```bash
npm serve
```



