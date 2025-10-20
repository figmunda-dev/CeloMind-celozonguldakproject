# 🌍 CeloMind - zonguldak
DEV : THEMRE
**Your AI-Powered Developer Assistant for the Celo Ecosystem — now with cUSD-based micropayments**

CeloMind is an AI-driven developer assistant that helps builders, students, and innovators build faster on the Celo blockchain. Now powered by smart contracts, each AI interaction is paid with cUSD — bringing blockchain-integrated AI experiences to life.

---

## ⚙️ Key Features

### 💬 AI Chat with Blockchain Payments
- Chat with an LLM fine-tuned for Celo
- Each message is paid with **cUSD (Celo Dollar)**
- Transparent and secure per-prompt micropayments

### 🤖 OpenAI Integration
- Powered by OpenAI's GPT model
- Generates Solidity contracts, explains concepts, and answers questions about Celo

### 🔗 On-chain Payment System
- Smart contract deployed on **Alfajores Testnet**
- Accepts cUSD payments per prompt
- Prevents unauthorized AI access without payment

---

## 🛠️ Tech Stack

| Layer         | Technology                          |
| ------------- | ----------------------------------- |
| AI / NLP      | OpenAI API (GPT-3.5/4)              |
| Backend       | Node.js / Express / Next.js (App Router) |
| Smart Contract| Solidity (ERC20-based payments)     |
| Blockchain SDK| @celo/contractkit, @celo/composer   |
| Frontend      | React / TailwindCSS / Scaffold-ETH 2 |
| Database      | MongoDB (optional for user sessions/logs) |
| Hosting       | Vercel / Railway / Render           |

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/figmunda-dev/CeloMind-celozonguldakproject.git
cd CeloMind/packages/nextjs
