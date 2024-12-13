export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h3>Inner Layout</h3>
        {children}
      </body>
    </html>
  );
}
