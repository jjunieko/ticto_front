"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import UpIcon from "../../public/Icon feather-arrow-up-circle.svg";
import DownIcon from "../../public/Icon feather-arrow-up-circle (1).svg";
import axios from "axios";

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onTransactionCreated;
}

const CadastroTrasacoes: React.FC<TransactionModalProps> = ({ isOpen, onRequestClose, onTransactionCreated }) => {
  const [entrada, setEntrada] = useState<boolean>(false);
  const [saida, setSaida] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    descricao: "",
    valor: "",
    categoria: "",
    tipo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEntradaClick = () => {
    setEntrada(true);
    setSaida(false);
    setFormData((prevFormData) => ({
      ...prevFormData,
      tipo: "entrada",
    }));
  };

  const handleSaidaClick = () => {
    setEntrada(false);
    setSaida(true);
    setFormData((prevFormData) => ({
      ...prevFormData,
      tipo: "saída",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.descricao || !formData.tipo || !formData.valor || !formData.categoria) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/registros", formData);
      onTransactionCreated();
      onRequestClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="modal-overlay">
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-full sm:w-[380px] h-full sm:h-[400px] rounded-lg shadow-lg p-4">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-purple-600 text-white py-2 px-4 rounded-md right-0 text-12 bottom-6"
              onClick={onRequestClose}
            >
              X
            </button>
          </div>
          <h2 className="text-sm sm:text-base font-bold mb-4">Cadastrar Transações</h2>

          <form>
            <div className="mb-4 flex items-center">
              <input
                type="text"
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
                className="bg-gray-300 w-full px-3 py-2 border-gray-300 rounded-md mr-2"
                placeholder="Nome"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="number"
                id="valor"
                name="valor"
                value={formData.valor}
                onChange={handleInputChange}
                className="bg-gray-300 w-full px-3 py-2 border-gray-300 rounded-md mr-2"
                placeholder="Preço"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <button
                  type="button"
                  className={`${
                    entrada ? "bg-gray-500" : "bg-gray-300"
                  } w-full px-3 py-2 border-gray-300 rounded-md mr-2 flex items-center`}
                  onClick={handleEntradaClick}
                >
                  <Image alt="up" className="text-gray-400 mr-4" width={12} height={12} src={UpIcon} />
                  <span className="mr-2">entrada</span>
                </button>
              </div>
              <div className="w-1/2 ml-1">
                <button
                  type="button"
                  className={`${
                    saida ? "bg-gray-500" : "bg-gray-300"
                  } w-full px-3 py-2 border-gray-300 rounded-md mr-2 flex items-center`}
                  onClick={handleSaidaClick}
                >
                  <Image alt="down" className="text-gray-400 mr-4" width={12} height={12} src={DownIcon} />
                  <span className="mr-2">saída</span>
                </button>
              </div>
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleInputChange}
                className="bg-gray-300 w-full px-3 py-2 border-gray-300 rounded-md"
                placeholder="Digite a categoria"
              />
            </div>
            <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-md w-full" onClick={handleSubmit}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CadastroTrasacoes;
