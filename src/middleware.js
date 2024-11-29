import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const token = request.cookies.get("token");

  // Páginas públicas (sem autenticação)
  const publicRoutes = [
    "/login",
    "/cadastro",
    "/",
    "/consultoria",
    "/imoveis",
    "/contato",
    "/ebooks",
  ];

  // Middleware para rotas públicas
  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  // Middleware para rotas privadas
  if (!token && !publicRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(!api|_next/static|_next/image|favicon.ico)*"],
};
