"use client";
import Image from "next/image";
import trashIcon from "../../public/Icon feather-trash.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { RegistroModel } from "./model/registro_model";
import classnames from "classnames";
import ptBR from "date-fns/locale/pt-BR";
import { format } from 'date-fns'
import { produtos } from "../app/api/produtos";

const TableComponent = (): JSX.Element => {
  const [data, setData] = useState<RegistroModel[]>([]);
  // const [data, setData] = useState<any[]>(produtos);  //descomente essse codigo
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [refreshTable, setRefreshTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get("http://localhost:8000/registros");
        const dados: RegistroModel[] = response.data;
        const processedData = dados.map((item) => ({
          ...item,
          created_at: item.created_at.split("T")[0], // Extrair apenas a parte da data
        }));
        setData(processedData);
        setLoading(false);

        //  USE ESSE CODIGO COMENTADO PARA PEGAR OS DADOS FICTICIOS DE UMA ARRAY
        // try {
        //   const processedData = data.map((item) => ({
        //     ...item,
        //     created_at: item.created_at.split("T")[0], // Extract only the date part
        //   }));
        //   setData(processedData);
        //   setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Erro ao obter os dados.");
        setLoading(false);
      }
    };
    fetchData();
  }, [refreshTable]);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/registros/${id}`);

      // Atualiza os dados após a exclusão
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error(error);
      setError("Erro ao excluir o registro.");
    }
  };

  return (
    <div className="mt-8 p-8 bg-[#F1F5F8]">
      <h3 className="text-xl font-bold mb-4">Tabela de Registros</h3>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Descrição
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Valor
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Categoria
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  data
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Ação
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.descricao}
                  </th>
                  <td
                    className={classnames("text-center", {
                      "text-green-500 font-bold": item.tipo === "entrada",
                      "text-red-500 font-semibold": item.tipo === "saida",
                    })}
                  >
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.valor)}
                  </td>
                  <td className="px-6 py-4">{item.categoria}</td>
                  <td className="px-6 py-4">{format(new Date(item.created_at), "dd/MM/yyyy", { locale: ptBR })}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleDelete(item.id)} className="bg-transparent border-none">
                      <Image alt="trash" src={trashIcon} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
