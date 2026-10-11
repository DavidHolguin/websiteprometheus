import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Destino de los eventos de conversión del sitio (`lib/track.ts`).
 *
 * No guarda nada en base de datos a propósito: deja una línea en el registro
 * del contenedor, que es la fuente de verdad más barata que tenemos
 * (`docker logs <uuid> | grep '[evento]'`). Si algún día hace falta un tablero,
 * el mismo cuerpo se escribe donde convenga sin tocar el frontend.
 */
const CAMPOS = ["tipo", "origen", "servicio", "ruta", "telefono", "canal"];

export async function POST(request: NextRequest) {
  let entrada: Record<string, unknown> = {};
  try {
    entrada = (await request.json()) as Record<string, unknown>;
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const limpio: Record<string, string> = {};
  for (const campo of CAMPOS) {
    const valor = entrada[campo];
    if (typeof valor === "string" && valor.length > 0) {
      limpio[campo] = valor.slice(0, 200);
    }
  }

  if (limpio.tipo) {
    console.log(`[evento] ${JSON.stringify(limpio)}`);
  }

  return new NextResponse(null, { status: 204 });
}
