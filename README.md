# pgos
Perfectly Ground Ordering System
- React/Redux on the frontend and Node/Express on the backend using a MongoDB sandbox database hosted on mLab. Jest/Enzyme for tests.
- ```npm install``` then ```npm run dev-server``` at root to start server. ```cd client``` then ```npm install``` then ```npm start``` to to run client on localhost:3000.
- Deployment Process: I'm using create-react-app so i would run ```npm run build``` and then deploy to Heroku. I would also change the database to a production ready database, make sure to put development only related node modules in devDependencies and use env variables for the MongoDB URI.
