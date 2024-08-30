export default function Home() {
  const title = process.env.NEXT_PUBLIC_APP_NAME;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">{title}</h1>
    </main>
  );
}
