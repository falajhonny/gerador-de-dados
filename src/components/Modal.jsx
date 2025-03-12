function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null; // Evita que o modal renderize se estiver fechado
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>✕</button>
          <h3>Dados Gerados:</h3>
          <pre>{content}</pre>
        </div>
      </div>
    );
  }
  export default Modal;