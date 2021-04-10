const express = require('express')
const PORT = process.env.PORT || 3000;
const CONSUL_URL = process.env.CONSUL_URL || 'localhost';

var consul = require('consul')({
    host:CONSUL_URL
});

const app = express()
app.use(express.static('app'))

app.get('/*', function(req, res) { 
  res.sendFile(__dirname + '/app/index.html')
});

const CONSUL_ID = require('uuid').v4();
let details = {
  name: 'amcart-frontend',
  address: process.env.HOSTNAME,
  port: 3000,
  id: CONSUL_ID,
  check: {
    ttl: '10s',
    deregister_critical_service_after: '1m'
  }
};
consul.agent.service.register(details, err => {
              console.log(details)
}); 

setInterval(() => {
  consul.agent.check.pass({id:`service:${CONSUL_ID}`}, err => {
    if (err) throw new Error(err);
    console.log('Health Status Sent');
  });
}, 5 * 1000);

process.on('SIGINT', () => {
  console.log('SIGINT. De-Registering...');
  let details = {id: CONSUL_ID};

  consul.agent.service.deregister(details, (err) => {
    console.log('Service Deregistered.', err);
    process.exit();
  });
});

app.listen(PORT, () => console.log('Amcart frontend listening on port '+PORT+'!'))
