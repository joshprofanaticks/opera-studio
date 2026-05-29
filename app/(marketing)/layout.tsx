import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navigation } from "@/components/ui/Navigation";
import { CotizaProvider } from "@/components/cotiza/CotizaProvider";
import { CotizaModal } from "@/components/cotiza/CotizaModal";

/**
 * Layout para todas las páginas del sitio público de marketing
 * (home + futuras páginas comerciales).
 *
 * Contiene la chrome completa: smooth scroll, custom cursor, navegación
 * y el modal de cotización. Las rutas fuera de este grupo
 * (ej. /cotiza/[slug]) NO heredan esta chrome — son superficies limpias.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grain">
      <CotizaProvider>
        <SmoothScroll />
        <CustomCursor />
        <Navigation />
        {children}
        <CotizaModal />
      </CotizaProvider>
    </div>
  );
}
