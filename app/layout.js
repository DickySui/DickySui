import "./globals.css";

export const metadata = {
  title: "DickySui",
  description: "La web oficial de DickySui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
