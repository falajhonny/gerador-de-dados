import PropTypes from 'prop-types';
function ExportButton({ text, fileType }) {
  const exportFile = () => {
    if (!text) return;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dados_gerados.${fileType}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <button onClick={exportFile} disabled={!text}>
      Exportar como {fileType.toUpperCase()}
    </button>
  );
}
ExportButton.propTypes = {
  text: PropTypes.string.isRequired,
  fileType: PropTypes.oneOf(['txt', 'csv', 'sql']).isRequired,
};
export default ExportButton;
