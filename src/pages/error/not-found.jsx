import React from "react";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";

export const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <FaTools size={60} className="text-yellow-500 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
      <p className="text-gray-700 mb-6">
        O conteúdo desta página está indisponível. 😅 Entre em contato com a
        nossa equipe de sucesso do cliente.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-sky-700 text-white rounded-full font-semibold hover:bg-sky-800 transition-colors duration-300"
      >
        Voltar para Home
      </Link>
    </div>
  );
};
