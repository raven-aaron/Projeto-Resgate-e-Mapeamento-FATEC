import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Cabecalho from "@/src/components/Cabecalho";

export const metadata: Metadata = {
  title: "Bem-Estar Animal",
  description: "Registro de Animais Perdidos e Encontrados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body>
        <Cabecalho />
        {children}
      </body>
    </html>
  );
}