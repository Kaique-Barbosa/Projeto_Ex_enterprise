"use client";

import { AuthProvider } from "@/context/AuthContext";
import React from "react";

export default function Providers({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
