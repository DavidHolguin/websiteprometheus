import type { VercelConfig } from "@vercel/config/v1";

/**
 * Configuración de despliegue de Prometheus Labs en Vercel.
 *
 * Esta config se aplica a producción y a cada preview que generamos
 * para un PR. Cambios aquí impactan TODO el sitio — para reglas
 * específicas de una ruta, prefiere usar Next.js config o middleware.
 *
 * Docs: https://vercel.com/docs/project-configuration/vercel-ts
 */
export const config: VercelConfig = {
  framework: "nextjs",
  buildCommand: "pnpm build",
  installCommand: "pnpm install --frozen-lockfile",
  outputDirectory: ".next",
};

export default config;
