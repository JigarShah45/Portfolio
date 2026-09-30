"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface PreloaderContextType {
  revealed: boolean;
  setRevealed: (v: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType>({
  revealed: false,
  setRevealed: () => {},
});

export function usePreloader() {
  return useContext(PreloaderContext);
}

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [revealed, setRevealed] = useState(false);

  const handleSetRevealed = useCallback((v: boolean) => {
    setRevealed(v);
  }, []);

  return (
    <PreloaderContext.Provider value={{ revealed, setRevealed: handleSetRevealed }}>
      {children}
    </PreloaderContext.Provider>
  );
}
