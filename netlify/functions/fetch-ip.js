const https = require('https');

exports.handler = async function(event, context) {
  const url = 'https://ma9r-app.github.io/ip-config/ipconfig.txt';

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          statusCode: 200,
          headers: {
            'Content-Type': 'text/plain',
          },
          body: data,
        });
      });

    }).on('error', (e) => {
      resolve({
        statusCode: 500,
        body: 'Error fetching data.',
      });
    });
  });
};
