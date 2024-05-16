import dotenv from 'dotenv';
import express from 'express';
import connectDataBase from './database/connect';
import routes from './routes';

dotenv.config();

connectDataBase()
  .then(() => console.log('conectado com sucesso'))
  .catch((error) =>
    console.log('falha ao conectar com o banco de dados. ', error)
  );

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('servidor rodando na porta: ', PORT);
});
