# Expenses-Tracker-Node
# Gerenciador Financeiro Pessoal 💰

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://react.dev/)

Aplicação web para gerenciamento de entradas e saídas financeiras, com dashboard interativo para visualização do fluxo de caixa.

![Captura de Tela do Dashboard](screenshot.png) <!-- Adicione uma imagem real posteriormente -->

## ✨ Funcionalidades

- Visualização resumida das finanças em dashboard
- Adição de novas transações (entradas e saídas)
- Exclusão de transações existentes
- Filtragem por tipo (entrada/saída) e data
- Cálculo automático do saldo total
- Interface responsiva e intuitiva

## 🛠 Tecnologias Utilizadas

**Frontend:**
- React
- JavaScript
- HTML5/CSS3

**Backend:**
- Node.js
- Express
- API RESTful com endpoints:
  - GET `/get-incomes` - Lista todas as entradas
  - POST `/add-income` - Cria nova entrada
  - DELETE `/delete-income/:id` - Remove entrada
 
  - GET `/get-expenses` - Lista todas as saidas
  - POST `/add-expense` - Cria nova saida
  - DELETE `/delete-expense/:id` - Remove saida

## 🚀 Instalação

1. Clone o repositório
```bash
git clone https://github.com/Cabr1to/Expenses-Tracker-Node.git
