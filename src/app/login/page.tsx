"use client";
import React, { useState } from "react";

import Image from 'next/image';

import LoginForm from "../../components/LoginForm";
import ProfileForm from "../../components/ProfileForm";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";

const Login = () => {
    const [telaAtual, setTelaAtual] = useState<'login' | 'perfil' | 'esqueci-senha'>('login');

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block relative">
                <Image
                    className="w-screen h-screen object-cover"
                    src="/login.jpg"
                    alt="foto de um cachorro"
                    fill
                />
            </div>

            <div className="bg-white flex flex-col justify-center">
                <div>
                    <Image src="/logo-bg-black.svg" width={200} height={200} alt="logo pet salvo"  className="mx-auto rounded-2xl" />
                </div>
                {telaAtual === 'login' &&
                    <LoginForm setTelaAtual={setTelaAtual} />
                }
                {telaAtual === 'perfil' &&
                    <ProfileForm setTelaAtual={setTelaAtual} />
                }
                {telaAtual === 'esqueci-senha' &&
                    <ForgotPasswordForm setTelaAtual={setTelaAtual} />
                }
            </div>
        </div >
    );
}

export default Login