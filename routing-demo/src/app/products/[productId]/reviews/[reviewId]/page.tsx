export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <>
      <h1>Review details {params.reviewId}</h1>
    </>
  );
}
