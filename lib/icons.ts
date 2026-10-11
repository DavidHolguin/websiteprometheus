import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  BookOpen,
  Bot,
  Calculator,
  CalendarCheck,
  ClipboardCheck,
  CreditCard,
  Database,
  FileCode,
  FileSpreadsheet,
  FileText,
  FolderTree,
  Gauge,
  Globe,
  Headphones,
  HelpCircle,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  ListTodo,
  Mail,
  MessageCircle,
  MessageSquare,
  MousePointerClick,
  Package,
  Plug,
  Receipt,
  Repeat2,
  ScanLine,
  Search,
  Send,
  ShoppingCart,
  Shuffle,
  Smartphone,
  Sparkles,
  Star,
  Truck,
  Wallet,
  Workflow,
} from "lucide-react";

/**
 * Mapa de slugs string a componentes de Lucide.
 *
 * Existe porque los datos de los agentes viven en Server Components,
 * pero los renderiza componentes con `'use client'` (motion). React no
 * permite serializar componentes a través de ese límite, así que la data
 * lleva strings y el cliente los resuelve aquí.
 *
 * Agregar nuevos iconos: importar arriba y añadir al mapa con el mismo
 * nombre (PascalCase) que en lucide-react.
 */
const ICONS = {
  BadgeDollarSign,
  BookOpen,
  Bot,
  Calculator,
  CalendarCheck,
  ClipboardCheck,
  CreditCard,
  Database,
  FileCode,
  FileSpreadsheet,
  FileText,
  FolderTree,
  Gauge,
  Globe,
  Headphones,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  ListTodo,
  Mail,
  MessageCircle,
  MessageSquare,
  MousePointerClick,
  Package,
  Plug,
  Receipt,
  Repeat2,
  ScanLine,
  Search,
  Send,
  ShoppingCart,
  Shuffle,
  Smartphone,
  Sparkles,
  Star,
  Truck,
  Wallet,
  Workflow,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function getIcon(name: IconName): LucideIcon {
  return ICONS[name] ?? HelpCircle;
}
