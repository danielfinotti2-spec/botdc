// Configuração do PM2 — mantém o bot rodando 24/7
// Uso: pm2 start ecosystem.config.js

module.exports = {
  apps: [
    {
      name:            'dn-bot',
      script:          'src/index.js',
      watch:           false,
      restart_delay:   3000,   // espera 3s antes de reiniciar
      max_restarts:    15,     // máximo de reinícios consecutivos
      min_uptime:      '10s',  // considera "estável" se ficar 10s online
      env: {
        NODE_ENV: 'production',
      },
      error_file:   'logs/err.log',
      out_file:     'logs/out.log',
      merge_logs:   true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
