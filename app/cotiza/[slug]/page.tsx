import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CotizaTemplate } from "@/lib/cotiza/Template";
import { cotizaciones } from "@/lib/cotiza/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = cotizaciones[slug];

  if (!data) {
    return { title: "Cotización no encontrada — Opera Studio" };
  }

  return {
    title: `Cotización ${data.number} — ${data.client.name}`,
    description: `Propuesta de Opera Studio para ${data.client.name}: ${data.project.title}`,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
    openGraph: {
      title: `Cotización ${data.number} — ${data.client.name}`,
      description: data.project.title,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(cotizaciones).map((slug) => ({ slug }));
}

export default async function CotizaPage({ params }: PageProps) {
  const { slug } = await params;
  const data = cotizaciones[slug];

  if (!data) {
    notFound();
  }

  return <CotizaTemplate data={data} />;
}
