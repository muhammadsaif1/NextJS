export const dynamic = "force-dynamic"; // defautlt value is "auto" which attempt to cache

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
