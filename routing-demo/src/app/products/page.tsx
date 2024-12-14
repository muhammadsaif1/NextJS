import Link from "next/link";

export default function ProductList() {
  const productID = 100;
  return (
    <>
      <h1>All products are listed below</h1>
      <h2>
        <Link href="products/1">Product 1</Link>{" "}
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>{" "}
      </h2>
      <h2>
        <Link href="products/3" replace>
          Product 3
        </Link>{" "}
      </h2>
      <h2>
        <Link href={`products/${productID}`}>Product {productID}</Link>{" "}
      </h2>

      <Link href="/">Home</Link>
    </>
  );
}
