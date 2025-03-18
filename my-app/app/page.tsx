import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* 🔹 Navbar */}
            <nav className="bg-[#8F1D14] p-4 flex justify-left gap-6">
                <button className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition">
                    <Link href="/" className="text-black font-bold">🏠 Home</Link>
                </button>
                <button className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition">
                    <Link href="/login" className="text-black font-bold">🔑 Login</Link>
                </button>
                <button className="bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition">
                    <Link href="/cadastro" className="text-black font-bold">📝 Cadastro</Link>
                </button>
            </nav>

            {/* 🔹 Conteúdo Principal */}
            <div className="flex flex-col items-center justify-center flex-grow text-center bg-[#F89D13] p-6">
                {/* 🔹 Imagem Centralizada */}
                <Image src="/logo1.png" alt="Logo do Projeto" width={200} height={200} className="mb-6" priority />

                {/* 🔹 Título e Subtítulo */}
                <h1 className="text-4xl font-bold mb-4 text-white">Bem-vindo ao Nosso Projeto!</h1>
                <h2 className="text-lg mb-6 text-white">MARIDO DE ALUGUEL</h2>

                {/* 🔹 Botões de Navegação */}
                <div className="flex gap-4">
                    <button className="bg-white px-6 py-3 text-black font-bold rounded-md hover:bg-gray-200 transition">
                        <Link href="/login">🔑 Fazer Login</Link>
                    </button>
                    <button className="bg-white px-6 py-3 text-black font-bold rounded-md hover:bg-gray-200 transition">
                        <Link href="/cadastro">📝 Criar Conta</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
