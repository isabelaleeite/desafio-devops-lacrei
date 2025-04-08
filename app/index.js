const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
