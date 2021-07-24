const { app } = require('./dist/server.js');

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('listening on port ', server.address().port);
});
