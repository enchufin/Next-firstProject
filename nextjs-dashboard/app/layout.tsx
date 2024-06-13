export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <h2>Hola que ases</h2>
      {children}</body>
    </html>
  );
}
