import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import { ThemeSwitcher } from "@/components/site/theme-switcher";
import "./globals.css";

const THEME_INIT_SCRIPT = `
(function(){try{var k='tera-theme';var p=localStorage.getItem(k)||'system';var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=p==='dark'||(p!=='light'&&m)?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
`;

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tera Desarrollos — Construimos donde quieres vivir",
  description:
    "Hogares a la medida en Saltillo, Coahuila. Conoce Hacienda El Milagro y los modelos Volterra, Top Urban y Sky Deck.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[color:var(--surface-page)] text-[color:var(--text-body)]">
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
