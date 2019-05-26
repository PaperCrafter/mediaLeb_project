const development = {
  host: '192.168.0.8',
  namespace: 'arduino', // For socket.io
  port: 4000
};

const production = {
  host: '192.168.0.8', // Replace
  namespace: 'arduino', // For socket.io
  port:4000,
};

const config = process.env.NODE_ENV === 'development' ? development : production;
const port = config.port ? ':' + config.port : '';
const namespace = config.namespace ? config.namespace : '';
const url = config.host + port + '/' + namespace;
config.url = url;

module.exports = config;
