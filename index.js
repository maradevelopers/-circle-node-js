// ping to check if service is online
// https://api-sandbox.circle.com/ping

const sdk = require('api')('@circle-api/v1#47x8nyl5sec1qz');
require('dotenv').config();

sdk.rootPing()
  .then(res => console.log(res))
  .catch(err => console.error(err));


// get configuration infromation
// https://api-sandbox.circle.com/v1/configuration

sdk.auth(process.env.CIRCLE_API_KEY);
sdk.getConfig()
  .then(res => console.log(res))
  .catch(err => console.error(err));