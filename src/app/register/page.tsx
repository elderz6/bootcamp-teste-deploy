"use client";
import React from "react";

import InputRegister from "../components/InputRegister";
import CheckBoxRegister from "../components/CheckBoxRegister";
import ButtonBackRegister from "../components/ButtonBackRegister";
import ContainerFlexRegister from "../components/ContainerFlexRegister";
import H1Register from "../components/H1Register";
import UploadRegister from "../components/UploadRegister";
import DropDownButtonRegister from "../components/DropDownButtonRegister";
import AdoptionQuestionnaire from "../components/AdoptionQuestionnaire";

const Register = () => {
    return (
        <>
            <nav className="bg-main px-2 py-2 flex">
                <ButtonBackRegister id="voltar" text="Voltar" />
            </nav>
            <div className="bg-background">
                <UploadRegister />
                <div className="flex justify-center">
                    <div className="w-1/2 p-8 border rounded-lg gap-4 flex flex-col">
                        <H1Register id="dadosPessoais" text="Dados pessoais" />
                        <InputRegister id="nome" text="Nome Completo" placeholder="" />
                        <ContainerFlexRegister>
                            <InputRegister id="dataNascimento" text="Data de Nascimento" placeholder="DD/MM/AAAA" />
                            <InputRegister id="telefone" text="Telefone" placeholder="(00) 91234-5678" />
                        </ContainerFlexRegister>
                        <InputRegister id="cpf" text="CPF" placeholder="000.000.000-00" />
                        <InputRegister id="email" text="E-mail" placeholder="email@email.com" />
                        <InputRegister id="senha" text="Senha" placeholder="" />
                        <InputRegister id="confirmarSenha" text="Confirmar senha" placeholder="" />
                        <H1Register id="endereco" text="Endereço" />
                        <div className="w-1/5">
                            <InputRegister id="cep" text="CEP" placeholder="12345-678" />
                        </div>
                        <InputRegister id="endereco" text="Endereço" placeholder="" />
                        <ContainerFlexRegister>
                            <InputRegister id="bairro" text="Bairro" placeholder="" />
                            <InputRegister id="numero" text="Número" placeholder="" />
                        </ContainerFlexRegister>
                        <ContainerFlexRegister>
                            <InputRegister id="cidade" text="Cidade" placeholder="" />
                            <InputRegister id="estado" text="Estado" placeholder="" />
                        </ContainerFlexRegister>
                        <InputRegister id="complemento" text="Complemento (opcional)" placeholder="" />
                        <DropDownButtonRegister id="questionario" text="Questionario de adoção (opcional)">
                            <AdoptionQuestionnaire />
                        </DropDownButtonRegister>
                        <CheckBoxRegister id="liOsTermosDeUsoEConcordo" text="Li os termos de uso e concordo" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register