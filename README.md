# **Gerador de Dados integrado com GPT**
## 🟦 React

<img width= '250' src= 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'></img>

### **📌 Sobre o Projeto**
Este projeto é um gerador de dados aleatórios para popular bancos de dados, integrado com a **API da OpenAI**. Ele permite gerar **CPFs, nomes, números de telefone e strings personalizadas**, retornando um **script SQL pronto** para inserção.

---

## **🚀 Tecnologias Utilizadas**
- **React** (Front-end)
- **Axios** (Para comunicação com a API da OpenAI)
- **dotenv** (Para variáveis de ambiente)
- **XLSX.js** (Para leitura de arquivos Excel - funcionalidade futura)

---

## **⚙️ Como Executar o Projeto**
### **1️⃣ Clonar o Repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/gerador-dados.git
cd gerador-dados
\`\`\`

### **2️⃣ Instalar Dependências do Front-end**
\`\`\`bash
npm install
\`\`\`

### **3️⃣ Configurar a API Key da OpenAI**
Para que o projeto funcione corretamente, você precisa de uma **API Key da OpenAI**.  
Caso ainda não tenha, crie uma conta e gere sua chave em:  
👉 [https://platform.openai.com/signup/](https://platform.openai.com/signup/)

Agora, crie um arquivo **\`.env\`** dentro da pasta \`server/\` e adicione sua API Key:  

\`\`\`
OPENAI_API_KEY=SUA_CHAVE_AQUI
\`\`\`

### **4️⃣ Executar o Servidor (Back-end)**
Acesse a pasta \`server/\` e rode o servidor:  
\`\`\`bash
cd server
node index.js
\`\`\`
Se tudo estiver certo, verá no terminal:  
\`\`\`
Servidor rodando na porta 5000
\`\`\`

### **5️⃣ Executar o Front-end (React)**
Abra um novo terminal na raiz do projeto e rode:  
\`\`\`bash
npm run dev
\`\`\`
A aplicação estará disponível em:  
👉 \`http://localhost:5173/\`

---

## **🛠️ Como Usar**
1️⃣ **Escolha o tipo de dado** (CPF, Nome, Telefone, String).  
2️⃣ **Defina a quantidade** de registros a serem gerados.  
3️⃣ **Clique no botão "Gerar Insert"** e aguarde a resposta da API.  
4️⃣ O script SQL será exibido na tela com opções para:  
   - **Copiar os dados** para a área de transferência  
   - **Exportar como \`.txt\`, \`.csv\` ou \`.sql\`**  
   - **Visualizar em um modal estilizado**  

---

## **📝 Funcionalidades Futuras**
✅ Proteção da API Key com **Node.js e Express**  
🔜 Suporte para leitura de **arquivos XLS** e conversão em SQL  
🔜 Melhorias no sistema de exportação  

---

## **📄 Licença**
Este projeto é de código aberto e pode ser usado livremente.  

Se tiver dúvidas ou sugestões, **contribua!** 🚀  
