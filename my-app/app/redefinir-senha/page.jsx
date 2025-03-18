"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function RedefinirSenha() {
    const [novaSenha, setNovaSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const handleRedefinirSenha = async (e) => {
        e.preventDefault();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clientes/redefinir-senha`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, novaSenha }),
        });

        const data = await response.json();
        if (response.ok) {
            setMensagem("✅ Senha redefinida com sucesso!");
            setTipoMensagem("sucesso");
        } else {
            setMensagem("❌ " + data.error);
            setTipoMensagem("erro");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4 text-white">Redefinir Senha</h2>

            {mensagem && (
                <p className={`mb-4 px-4 py-2 font-bold rounded-md text-center ${tipoMensagem === "sucesso" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {mensagem}
                </p>
            )}

            <form onSubmit={handleRedefinirSenha} className="flex flex-col gap-4 text-white">
                <input type="password" placeholder="Digite a nova senha" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} required className="p-2 border rounded text-black" />
                <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">Redefinir Senha</button>
            </form>
        </div>
    );
}
