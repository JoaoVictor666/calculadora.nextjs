"use client";
import { CalculadoraBotoes } from "@/types/enum";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";


export default function Home() {
  const [displayValue, setDisplayValue] = useState("");
  const [equacao, setEquacao] = useState(""); 
  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined" && equacao !== "") {
        try {
          const res = await fetch(`http://127.0.0.1:8000/matematica/${equacao}`);
          const data = await res.json();
          setDisplayValue(data.resultado); // Atualiza o display com o resultado
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      }
    };

    fetchData();
  }, [equacao]);


  const listaDeFileira = [];
  let interador = 0;
  // Função para retornar o próprio botão com o texto correto
  
  const renderButton = (botao: number) => {
    let label = "";
    let color = "#424242"
    const handleClick = () => {
      switch (botao) {
        case CalculadoraBotoes.igual:
          // Processa a equação e formata o resultado
          try {
            const resultado = eval(displayValue); // Supondo que você use `eval` para cálculos
            setDisplayValue(parseFloat(resultado.toString()).toString()); // Converte o resultado para número e depois para string
          } catch (error) {
            console.error("Erro ao calcular:", error);
          }
          return;
        case CalculadoraBotoes.limpar:
          setDisplayValue(""); // Limpa o display quando "C" é clicado
          return;
        default:
          setDisplayValue((prev) => prev + label);
      }
    };
  
    switch (botao) {
      case CalculadoraBotoes.igual:
        label = "=";
        color = "#2C00F2"
        break;
      case CalculadoraBotoes.mais:
        label = "+";
        break;
      case CalculadoraBotoes.menos:
        label = "-";
        break;
      case CalculadoraBotoes.divisao:
        label = "÷";
        break;
      case CalculadoraBotoes.multiplicasao:
        label = "x";
        break;
      case CalculadoraBotoes.zero:
        label = "0";
        break;
      case CalculadoraBotoes.um:
        label = "1";
        break;
      case CalculadoraBotoes.dois:
        label = "2";
        break;
      case CalculadoraBotoes.tres:
        label = "3";
        break;
      case CalculadoraBotoes.quatro:
        label = "4";
        break;
      case CalculadoraBotoes.cinco:
        label = "5";
        break;
      case CalculadoraBotoes.seis:
        label = "6";
        break;
      case CalculadoraBotoes.sete:
        label = "7";
        break;
      case CalculadoraBotoes.oito:
        label = "8";
        break;
      case CalculadoraBotoes.nove:
        label = "9";
        break;
      case CalculadoraBotoes.ponto:
        label = ".";
        break;
      case CalculadoraBotoes.limpar:
        label = "C";
        color = "#D30000"
        
        break;
      case CalculadoraBotoes.parentese_abrir:
        label = "(";
        color = "#000000"
        break;
      case CalculadoraBotoes.parentese_fechar:
        label = ")";
        color = "#000000"
        break;
      case CalculadoraBotoes.porcentagem:
        label = "%";
        color = "#000000"
        break;
      
    }

    return (
      <Button
        key={botao} // Adiciona uma chave única para cada botão
        style={{ backgroundColor: color }}
        className="m-2"
        variant="contained"
        onClick={handleClick}
      >
        {label}
      </Button>
    );
  };


  for (let i = 0; i < 5; i++) {
    const listaDeBotao = [];
    for (let b = 0; b < 4; b++) {
      listaDeBotao.push(renderButton(interador));
      interador++;
    }
    listaDeFileira.push(
      <div key={i}>
        {listaDeBotao}
      </div>
    );
  }

  return (
    <main className="h-screen bg-white flex justify-center items-center">
      <div className=" p-4 bg-[#605663]/20 rounded border-1 border-black">
        <div className="px-4 my-8 bg-[#282828] rounded h-10 flex justify-end items-center">
          <p className="h-fit">{displayValue}</p>
        </div>
        <div className="">
          {listaDeFileira}
        </div>
      </div>
    </main>
  );
}
