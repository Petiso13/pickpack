"use server";
import { api } from "~/trpc/server";
import { LockerComponent } from "../_components/lockerComponent";

export default async function Home() {
  const lockersResponse = await api.locker.get();
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1>
        Acá vamos a probar la deserialización del objeto locker recibido del
        servidor.
      </h1>
      <LockerComponent locker={lockersResponse!} />
    </main>
  );
}
