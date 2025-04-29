const express = require('express');
const cors = require('cors');
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const { ServiceBusClient } = require("@azure/service-bus");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/locacao', async (req, res) => {
  const { nome, email, modelo, ano, tempoAluguel } = req.body;

  const veiculo = {
    modelo: modelo || "Fiat Uno",
    ano: ano || 2025,
    tempoAluguel: tempoAluguel || "1 semana",
  };

  const mensagem = {
    nome,
    email,
    ...veiculo,
    data: new Date().toISOString(),
  };

  // const credential = new DefaultAzureCredential();
  // const keyVaultUrl = process.env.KEY_VAULT_URL;
  const serviceBusConnection = process.env.KEY_SERVICE_BUS;
  try {

    // const secretClient = new SecretClient(keyVaultUrl, credential);
    const sbClient = new ServiceBusClient(serviceBusConnection);
    const sender = sbClient.createSender("fila-locacao-auto");

    const message = {
      body: mensagem,
      contentType: "application/json",
    };
    console.log(message)

    await sender.sendMessages(message);
    await sender.close();
    await sbClient.close();

    res.status(200).send("Locação enviada para a fila com sucesso");
  } catch (err) {
    console.error("Erro ao enviar mensagem para a fila:", err);
    res.status(500).send("Erro interno");
  }
});

app.listen(3001, () => console.log("BFF rodando na porta 3001"));
