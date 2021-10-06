import express from 'express';

const app = express();
app.listen(process.env.PORT, () => {
  console.log(`${process.env.STARTING_SERVER} na ${process.env.PORT}`);
});
