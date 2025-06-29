import { useSessionQuery } from "@/entities/session";

export function HomePage() {
  const { data: session } = useSessionQuery();

  return <div>Home pageeeZ {session?.email}</div>;
}
