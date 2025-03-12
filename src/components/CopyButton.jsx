import PropTypes from 'prop-types';

function CopyButton({ text }) {

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text)
      .then(() => alert('Dados copiados para a área de transferência!'))
      .catch((err) => console.error('Erro ao copiar:', err));
  };
  
  return (
    <button onClick={copyToClipboard} disabled={!text}>
      Copiar
    </button>
  );
}
CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyButton;