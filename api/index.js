const server = require('./src/app.js');
const PORT=process.env.PORT|| 3001
  server.listen(PORT, () => {
    console.log('server listening at 3001');
  });

 