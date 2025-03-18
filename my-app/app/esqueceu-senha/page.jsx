"use client";
import { useState } from "react";

export default function EsqueceuSenha() {
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");

    const handleEsqueceuSenha = async (e) => {
        e.preventDefault();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clientes/esqueceu-senha`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
            setMensagem("✅ Link de recuperação enviado para seu e-mail!");
            setTipoMensagem("sucesso");
        } else {
            setMensagem("❌ " + data.error);
            setTipoMensagem("erro");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4 text-white">Recuperação de Senha</h2>

            {mensagem && (
                <p className={`mb-4 px-4 py-2 font-bold rounded-md text-center ${tipoMensagem === "sucesso" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {mensagem}
                </p>
            )}

            <form onSubmit={handleEsqueceuSenha} className="flex flex-col gap-4 text-white">
                <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-2 border rounded text-white" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Enviar Link</button>
            </form>

            
        </div>
    );
}
