import "./global.css";

export const metadata = {
  title: "Daniel Hardiman's Website",
  description: "Contact Daniel Hardiman and learn more about his work."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
