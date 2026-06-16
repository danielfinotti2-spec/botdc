# DN Otimizações Bot v2

Bot em **discord.js v14** com painel de tickets, comandos completos e sistema anti-queda.

---

## 📁 Estrutura

```
src/
├── index.js              ← entrada principal
├── deploy-commands.js    ← registra slash commands
├── commands/             ← um arquivo por comando
│   ├── painel.js
│   ├── precos.js
│   ├── faq.js
│   ├── requisitos.js
│   ├── cupom.js
│   ├── dicas.js
│   ├── status.js
│   ├── aviso.js
│   ├── comocomprar.js
│   └── afiliados.js
├── events/
│   ├── ready.js
│   ├── interactionCreate.js
│   ├── guildMemberAdd.js
│   └── guildMemberRemove.js
├── handlers/
│   └── ticket.js         ← toda a lógica de tickets
└── utils/
    └── embeds.js         ← cores, emojis, helper makeEmbed()
```

---

## 🚀 Instalação

```bash
npm install
cp .env.example .env
# edite o .env com seus IDs
npm run deploy    # registra os slash commands
npm start         # liga o bot
```

---

## 🛡️ Anti-queda — bot caindo? Leia aqui

### Causa mais comum
O bot cai quando o processo Node.js encerra. Isso acontece por:
- Erro não tratado no código
- VPS/servidor reiniciando
- Token expirado ou inválido

### Solução 1 — PM2 (recomendado para VPS)

O PM2 reinicia o bot automaticamente se ele cair.

```bash
npm install -g pm2
pm2 start ecosystem.config.js
pm2 save                      # salva para reiniciar com o servidor
pm2 startup                   # configura para iniciar no boot da VPS
```

Comandos úteis:
```bash
pm2 list               # ver status
pm2 logs dn-bot        # ver logs em tempo real
pm2 restart dn-bot     # reiniciar manualmente
pm2 stop dn-bot        # parar o bot
```

### Solução 2 — Railway / Render / Koyeb (hospedagem gratuita)

Suba o projeto no [Railway](https://railway.app) e ele fica online 24/7 sem precisar de VPS.

1. Crie uma conta em railway.app
2. Clique em **New Project → Deploy from GitHub**
3. Adicione as variáveis do `.env` na aba **Variables**
4. O bot sobe automaticamente

### Solução 3 — Systemd (Linux avançado)

```bash
sudo nano /etc/systemd/system/dn-bot.service
```

```ini
[Unit]
Description=DN Otimizações Discord Bot
After=network.target

[Service]
ExecStart=/usr/bin/node /caminho/para/src/index.js
WorkingDirectory=/caminho/para/o/projeto
Restart=always
RestartSec=5
User=ubuntu
EnvironmentFile=/caminho/para/.env

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable dn-bot
sudo systemctl start dn-bot
sudo systemctl status dn-bot
```

---

## 🎫 Tickets disponíveis

| Tipo       | Descrição                        |
|------------|----------------------------------|
| `compra`   | Compra de serviço de otimização  |
| `suporte`  | Suporte técnico pós-compra       |
| `duvida`   | Dúvida geral antes de comprar    |
| `pc`       | Problema no PC                   |
| `parceria` | Parceria ou programa de afiliado |

---

## 🔧 Comandos slash

| Comando         | Descrição                              | Permissão  |
|-----------------|----------------------------------------|------------|
| `/painel`       | Envia o painel de tickets              | Staff      |
| `/precos`       | Tabela de preços                       | Todos      |
| `/faq`          | Perguntas frequentes                   | Todos      |
| `/requisitos`   | Requisitos do sistema                  | Todos      |
| `/cupom`        | Cupons de desconto ativos              | Todos      |
| `/dicas`        | Dica aleatória de otimização           | Todos      |
| `/status`       | Status do bot (ping, uptime, memória)  | Todos      |
| `/aviso`        | Envia aviso oficial no canal           | Staff      |
| `/comocomprar`  | Guia de como comprar                   | Staff      |
| `/afiliados`    | Informações do programa de afiliados   | Staff      |

---

## ⚙️ Intents necessários

No Discord Developer Portal → seu bot → Bot → **Privileged Gateway Intents**:
- ✅ **Server Members Intent** (para boas-vindas/saída)

---

## 🔐 Permissões do bot (OAuth2)

- `bot` + `applications.commands`
- Manage Channels, Send Messages, Embed Links, Read Message History, Manage Roles
