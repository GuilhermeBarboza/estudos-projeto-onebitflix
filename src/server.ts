// Aula: Iniciando o Projeto
import express from 'express';
import { adminJs, adminJsRouter } from './adminjs'; // Aula: Configurando o AdminJS

import { sequelize } from './database'; // Aula: Configurando o Sequelize

const app = express();

// Aula: Configurando o AdminJS
app.use(express.static('public'));
app.use(adminJs.options.rootPath, adminJsRouter);
// *****************************

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection succesfull')
  })// Aula: Configurando o Sequelize
  
  console.log(`Server started succesfully at port ${3000}`);
})
// Aula: Iniciando o Projeto