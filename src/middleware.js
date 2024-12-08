import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token");

  // Páginas públicas (sem autenticação)
  const publicRoutes = ["/", "/consultoria", "/imoveis", "/contato", "/ebooks"];

  // Middleware para redirecionar o usuário para a home caso ele esteja logado
  if (token && ["/login", "/cadastro"].includes(path)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Middleware para rotas públicas
  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  // Middleware para rotas privadas
  if (path === "/imoveis/:id/gerar-contrato") {
    if (!token) {
      return NextResponse.redirect(new URL("/acesso-bloqueado", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico)*)",
    "/login",
    "/cadastro",
    "/imoveis/:id/gerar-contrato",
  ],
};
