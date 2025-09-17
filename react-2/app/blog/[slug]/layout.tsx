export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
     <body>
      <header>== blog header ==</header>
      {children}
      <footer>== blog footer ==</footer>
    </body>
  </html>  
  
  );
}
