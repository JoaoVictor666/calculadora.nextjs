import { CalculadoraBotoes } from "@/types/enum";
import { Button } from "@mui/material";
import { useState } from "react";


export default function Home() {
  const [displayValue, setDisplayValue] = useState(""); // Estado para armazenar o valor
  
  const listaDeFileira = [];
  let interador = 0;
  // Função para retornar o próprio botão com o texto correto
  const renderButton = (botao: number) => {
    let label = "";
    let color = "#424242"
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
      style={{backgroundColor:color}} 
      className=" m-2" 
      variant="contained"
      onClick={() => setDisplayValue(label)}
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
