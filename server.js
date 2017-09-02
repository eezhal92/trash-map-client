const { resolve } = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist'));
app.use('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist/index.html'));
});

const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`[App] Listening on http://localhost:${PORT} in ${env} environment`);
});
