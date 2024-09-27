interface ModalProps {
  isOpen: boolean // Estado que determina se o modal está aberto ou não
  onClose: () => void // Função para fechar o modal
  onConfirm: () => void // Função chamada ao confirmar a ação (neste caso, baixar o CV)
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {/* Conteúdo do Modal */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        {/* Título do Modal */}
        <h2 className="text-lg font-semibold mb-4">Confirmar Download</h2>
        {/* Mensagem de confirmação */}
        <p className="mb-6">Você deseja baixar o seu CV?</p>

        {/* Botão para confirmar a ação */}
        <button
          type="button"
          onClick={onConfirm}
          className="bg-[#7477FF] text-white px-4 py-2 rounded-md mr-4 hover:bg-[#5a5cfb] transition duration-300"
        >
          Sim, baixar
        </button>

        {/* Botão para cancelar a ação */}
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default Modal
