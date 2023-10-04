import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SpanError from "./SpanError";
import { useRouter } from 'next/navigation';

import RadioButton from "./RadioButton";
import Link from "./Link";
import PrimaryButton from "./PrimaryButton";

interface LoginProps {
    setTelaAtual: React.Dispatch<React.SetStateAction<'login' | 'perfil' | 'esqueci-senha'>>;
}

const schema = z.object({
    perfil: z.enum(['adotante', 'ong'], {
        errorMap: () => { return { message: "Selecione um tipo de perfil" } }
    })
})

type FormData = z.infer<typeof schema>;

const ProfileForm: React.FC<LoginProps> = ({ setTelaAtual }) => {

    const { push } = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        reValidateMode: "onBlur",
        resolver: zodResolver(schema)
    });

    const submitData = (data: FormData) => {
        const perfil = data.perfil;
        push('/register');
    }

    return (
        <form onSubmit={handleSubmit(submitData)} className="max-w-[400px] min-h-[400px] w-full flex flex-col gap-5 mx-auto bg-background border border-black p-8 px-8 rounded-lg">
            <div className="flex flex-col gap-5 flex-grow">
                <h2 id="cadastro" className="text-3xl text-black font-bold text-center">Cadastro</h2>
                <h2 id="qual_e_seu_perfil" className="text-lg text-black font-semi-bold text-center">Qual é seu perfil?</h2>
                <RadioButton
                    {...register("perfil")}
                    id="adotante"
                    text="Quero adotar um Pet"
                    name="perfil"
                    value="adotante"
                    error={!!errors.perfil?.message}
                />
                <RadioButton
                    {...register("perfil")}
                    id="ong"
                    text="Sou uma ONG de Pets"
                    name="perfil"
                    value="ong"
                    error={!!errors.perfil?.message}
                />
                {!!errors.perfil?.message && <SpanError text={errors.perfil?.message}/>}
            </div>
            <PrimaryButton
                id="confirmar"
                text="Confirmar"
                type="submit"
            />
            <Link
                id="ja_tenho_cadastro"
                text="Já tenho cadastro"
                center={true}
                onClick={() => setTelaAtual("login")}
            />
        </form>
    );
}

export default ProfileForm