"use client";
import Image from "next/image";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import UpIcon from "../../public/Icon feather-arrow-up-righttwo.svg";
import DownIconfrom from "../../public/Icon feather-arrow-up-right.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const CardComponent: React.FC = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [entryTotal, setEntryTotal] = useState(0);
  const [outputTotal, setOutputTotal] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/registros");
      const data = await response.data;
      calculateTotals(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const calculateTotals = (data: any) => {
    let entrySum = 0;
    let outputSum = 0;
    let totalSum = 0;

    data.forEach((item: any) => {
      if (item.tipo === "entrada") {
        entrySum += parseFloat(item.valor);
      } else if (item.tipo === "saida") {
        outputSum += parseFloat(item.valor);
      }
      totalSum += parseFloat(item.valor);
    });

    setEntryTotal(entrySum);
    setOutputTotal(outputSum);
    setTotalValue(totalSum);
  };

  return (
    <div className="flex justify-center items-center h-[500] mt-28 bg-[#F1F5F8]">
      <div className="relative z-10">
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <div className="p-4 items-center w-72 h-32 bg-white rounded-lg shadow-md px-4 text-left">
            <div className="flex justify-between">
              <h3 className="unnamed-character-style-1">Entradas</h3>
              <Image alt="up" className="text-gray-400" width={12} height={12} src={UpIcon} />
            </div>
            <h1 className="mt-4 text-42 text-4e5555">
              $ {new Intl.NumberFormat("pt-BR", { currency: "BRL" }).format(entryTotal)}
            </h1>
          </div>
          <div className="p-4 items-center w-72 h-32 bg-white rounded-lg shadow-md px-4 text-left">
            <div className="flex justify-between">
              <h3 className="unnamed-character-style-1">Saídas</h3>
              <Image alt="up" className="text-gray-400" width={12} height={12} src={DownIconfrom} />
            </div>
            <h1 className="mt-4 text-42 text-4e5555">
              $ {new Intl.NumberFormat("pt-BR", { currency: "BRL" }).format(outputTotal)}
            </h1>
          </div>
          <div className="p-4 items-center w-72 h-32 bg-[#06D6A2] rounded-lg shadow-md px-4 text-left">
            <div className="flex justify-between">
              <h3 className="unnamed-character-style-1 text-white">Valor Total</h3>
            </div>
            <h1 className="mt-4 text-42 text-white">
              $ {new Intl.NumberFormat("pt-BR", { currency: "BRL" }).format(totalValue)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
