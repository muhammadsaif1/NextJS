export default function pageDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>details {params.productId}</h1>
    </>
  );
}
