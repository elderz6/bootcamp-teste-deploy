"use client"; 

import React from "react";
import { Logo } from "../svgs";
import "../globals.css"

export default function Navbar() {
    const [isOpen, toggleOpen] = React.useState(false)
    const [isLogado, toggleLogado] = React.useState(false)

    const toggleMenu = () => {
        toggleOpen(open => !open)
    }
     {/*Teste de exibição de elementos extras em caso de usuario logado*/}

    {/*Teste de exibição de elementos extras em caso de usuario logado*/}
    const toggleLogadoTeste = () => {
        toggleLogado(logado => !logado)
    }


    return (
    <nav className="mainNav bg-main">

        {/*Logo*/}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center mb-1">
            <Logo width="150px" height="50px" />
        </a>

       
        {/*Foto*/}
        <div className="flex items-center md:order-2 relative">
            <button onClick={toggleMenu} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 hover:ring-4 hover:ring-white-600 focus:ring-4 border-2 focus:ring-gray-600 dark:focus:ring-white-600" 
            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-12 h-12 rounded-full" src="https://www.w3schools.com/images/picture.jpg" alt="user photo" />
            </button>
        
        {/*Fecha o menu ao clicar fora*/}
            {   isOpen?
                <button
                tabIndex={-1}
                className="fixed inset-0 cursor-default" 
                onClick={() => toggleOpen(false)}></button>
             : ""
            }

       {/*Menu dropdown da foto*/}
            {   isOpen?
                <div className="w-48 top-16 bg-white rounded-sm shadow-xl absolute right-0 text-center border border-solid border-gray-900 " id="user-dropdown">
                    <ul className="py-2 divide-y divide-slate-700" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" className="block px-4 py-4 hover:bg-teal-400 hover:text-white" onClick={toggleLogadoTeste}>Perfil</a>
                    </li>
                    {/*Exemplo de exibição de menu caso situação de logado*/}
                    {
                        isLogado?
                        <li>
                            <a href="#" className="block px-2 py-4 hover:bg-teal-400 hover:text-white">Meus Matches</a>
                        </li>
                        : ""
                    }
                    <li>
                        <a href="#" className="block px-4 py-4 hover:bg-teal-400 hover:text-white">Sair</a>
                    </li>
                    </ul>
                </div>
              : ""
            }

            {/*Menu sanduiche mobile*/}
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
            rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
      
        
        {/*Itens do Menu*/}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0" style={{backgroundColor: "#2ec4b6"}}>
            <li>
                <a href="#" className="block text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" className="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white 
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ajude uma ONG</a>
            </li>
            {/*Exemplo de exibição de menu caso situação de logado*/}
            {   isLogado?
                <li>
                    <a href="#" className="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white 
                    md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Solicitações de adoção</a>
                </li>
              : ""
            }
            </ul>
        </div>
        </div>
    </nav>
    )
  }
  