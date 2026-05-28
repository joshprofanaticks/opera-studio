"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface CotizaContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

const CotizaContext = createContext<CotizaContextValue | null>(null);

export function CotizaProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <CotizaContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </CotizaContext.Provider>
  );
}

export function useCotiza() {
  const ctx = useContext(CotizaContext);
  if (!ctx) {
    throw new Error("useCotiza must be used inside <CotizaProvider>");
  }
  return ctx;
}
