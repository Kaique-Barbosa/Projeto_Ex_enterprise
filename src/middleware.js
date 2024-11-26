import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  // Páginas públicas (sem autenticação)
  const publicPages = ["/login", "/cadastro"];

  // Middleware para verificar se o usuário está autenticado
  if (!token && !publicPages.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect("/login");
  }

  // Middleware para verificar se o usuário já está autenticado
  if (token && publicPages.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect("/");
  }

  return NextResponse.next();
}

export const config = {
  mather: [
    "/",
    "/login",
    "/cadastro",
    "/consultoria",
    "/acesso-bloqueado",
    "/contato",
    "/imoveis",
    "imoveis/[id]",
  ],
};
