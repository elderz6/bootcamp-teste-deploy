import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUsersFromFile } from '../service/UserService';
import { User } from "../model/User";
import { useRouter } from 'next/navigation';

import Input from "./Input";
import InputPassword from "./InputPassword";
import Link from "./Link";
import PrimaryButton from "./PrimaryButton";
import SpanError from "./SpanError";

interface LoginProps {
    setTelaAtual: React.Dispatch<React.SetStateAction<'login' | 'perfil' | 'esqueci-senha'>>;
}

const schema = z.object({
    email: z.string().min(1, "campo E-mail é obrigatório").email("E-mail inválido"),
    senha: z.string().min(1, "campo Senha é obrigatório")
})

type FormData = z.infer<typeof schema>;

const LoginForm: React.FC<LoginProps> = ({ setTelaAtual }) => {

    const [users, setUsers] = useState<User[]>([]);
    const [errorLogin, setErrorLogin] = useState<string | null>(null);
    const { push } = useRouter();

    useEffect(() => {
        async function fetchUsers() {
            const loadedUsers = await getUsersFromFile();
            setUsers(loadedUsers);
        }

        fetchUsers();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        reValidateMode: "onBlur",
        resolver: zodResolver(schema)
    });

    const submitData = (data: FormData) => {
        const email = data.email;
        const password = data.senha;

        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            setErrorLogin(null);
            push('/');
        } else {
            setErrorLogin("Credenciais inválidas. Por favor, tente novamente.");
        }
    }

    return (
        <form onSubmit={handleSubmit(submitData)} className="max-w-[400px] min-h-[400px] w-full flex flex-col gap-5 mx-auto bg-background border border-black p-8 px-8 rounded-lg">
            <div className="flex flex-col gap-5 flex-grow">
                <h2 id="login" className="text-3xl text-black font-bold text-center">Login</h2>
                <Input
                    {...register("email")}
                    id="email"
                    placeholder="E-mail"
                    type="text"
                    helperText={errors.email?.message}
                    error={!!errors.email?.message}
                    onBlur={()=> setErrorLogin(null)}
                />
                <InputPassword
                    {...register("senha")}
                    id="senha"
                    placeholder="Senha"
                    type="password"
                    helperText={errors.senha?.message}
                    error={!!errors.senha?.message}
                    onBlur={()=> setErrorLogin(null)}
                />
                <Link
                    id="link_esqueci_a_senha"
                    text="Esqueci a senha"
                    center={false}
                    onClick={() => setTelaAtual("esqueci-senha")}
                />
            </div>
            {errorLogin && <SpanError text={errorLogin}/>} {/* Exibe a mensagem de erro se houver */}
            <PrimaryButton
                id="entrar"
                text="Entrar"
                type="submit"
            />
            <Link
                id="cadastre_se"
                text="Cadastre-se"
                center={true}
                onClick={() => setTelaAtual("perfil")}
            />
        </form>
    );
}

export default LoginForm