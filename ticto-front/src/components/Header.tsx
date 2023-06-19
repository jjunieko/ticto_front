
"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import CadastroTrasacoes from "./CadastroTransacoes";
import TableComponent from "./TableComponent";
import { GetStaticProps } from "next";

interface HeaderProps {
  onTransactionCreated;
}

const Header: React.FC<HeaderProps> = ({ onTransactionCreated }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onTransactionCreated;
  };

  return (
    <header className="fixed top-0 left-0 w-full h-32 bg-purple-800 opacity-100">
      <div className="container mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center sm:mr-6">
          <Image src={Logo} className="h-8 w-auto sm:mr-4 sm:ml-8" alt="logo" />
        </div>
        <nav>
          <ul className="flex space-x-4 sm:space-x-4 ">
            <li>
              <button onClick={openModal} className="bg-[#401a9b] w-48 h-10 sm:ml-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Nova Transação
                </a>
              </button>

              {isModalOpen && (
                <CadastroTrasacoes isOpen={isModalOpen} onRequestClose={closeModal} onTransactionCreated={closeModal} />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export const getStaticProps: GetStaticProps<HeaderProps> = async () => {
  // Implemente aqui a lógica para buscar os dados necessários para o componente Header.
  // Exemplo:
  // const response = await fetch("URL_DA_API");
  // const data = await response.json();

  // Supondo que você queira retornar um valor padrão:
  return {
    props: {
      onTransactionCreated: () => {} // Função vazia como exemplo
    },
  };
};

export default Header;
