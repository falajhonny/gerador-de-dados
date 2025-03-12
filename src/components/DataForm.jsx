import { useState } from 'react';
import { generateData } from '../services/openaiService';
import CopyButton from './CopyButton';
import ExportButton from './ExportButton';
import Modal from './Modal';

function DataForm() {
  const [dataType, setDataType] = useState('cpf');
  const [quantity, setQuantity] = useState(10);
  const [generatedData, setGeneratedData] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneratedData('');
    setError('');
    let prompt = '';
    switch (dataType) {
      case 'cpf':
        prompt = `Gere ${quantity} CPFs válidos sem formatação, separados por vírgula.`;
        break;
      case 'nome':
        prompt = `Gere um insert em SQL com ${quantity} nomes aleatórios brasileiros, usando uma tabela exemplo no insert. Na sua resposta devolva apenas o SQL nao precisamos de nenhum esclarecimento.`;
        break;
      case 'telefone':
        prompt = `Gere um insert em SQL ${quantity} números de telefone brasileiros com DDD, no formato (XX)XXXXX-XXXX, usando uma tabela exemplo no insert.`;
        break;
      case 'string':
        prompt = `Gere um insert em SQL ${quantity} strings aleatórias de 10 caracteres alfanuméricos, usando uma tabela exemplo no insert.`;
        break;
      default:
        prompt = `Gere um insert em SQL ${quantity} itens aleatórios, usando uma tabela exemplo no insert.`;
    }
    const result = await generateData(prompt);
    if (result.startsWith("Erro:")) {
      setError(result);
    } else {
      setGeneratedData(result);
    }
  };
  return (
    <div className="container">
      <h1>Gerador de Dados</h1>
      <p>Escolha o tipo de dado e gere scripts SQL prontos!</p>
      <form onSubmit={handleSubmit}>
        <label>Tipo de Dado:</label>
        <select value={dataType} onChange={(e) => setDataType(e.target.value)}>
          <option value="cpf">CPF</option>
          <option value="nome">Nome</option>
          <option value="telefone">Telefone</option>
          <option value="string">String Personalizada</option>
        </select>
        <label>Quantidade:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
        <button type="submit">Gerar Insert</button>
      </form>
      {error && <div style={{ color: 'red', marginTop: '10px' }}><strong>Erro:</strong> {error}</div>}
      {generatedData && (
        <>
          <h3>Dados Gerados:</h3>
          <pre>{generatedData}</pre>
          <button onClick={() => setIsModalOpen(true)}>Ver Dados</button>
          <CopyButton text={generatedData} />
          <ExportButton text={generatedData} fileType="txt" />
          <ExportButton text={generatedData} fileType="csv" />
          <ExportButton text={generatedData} fileType="sql" />
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            content={generatedData}
          />
        </>
      )}
    </div>
  );
}
export default DataForm;


