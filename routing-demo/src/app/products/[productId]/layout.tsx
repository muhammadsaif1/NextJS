function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading product");
  }
  return (
    <html lang="en">
      <body>{children}</body>
      <h2>Feature Products</h2>
    </html>
  );
}
