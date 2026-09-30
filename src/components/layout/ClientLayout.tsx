"use client";

import { useCallback } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PreloaderProvider, usePreloader } from "@/components/providers/PreloaderContext";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

function LayoutInner({ children }: { children: React.ReactNode }) {
  const { revealed, setRevealed } = usePreloader();

  const handlePreloaderComplete = useCallback(() => {
    setRevealed(true);
  }, [setRevealed]);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <CursorGlow />
      <Navbar visible={revealed} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <SmoothScrollProvider>
        <PreloaderProvider>
          <LayoutInner>{children}</LayoutInner>
        </PreloaderProvider>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
