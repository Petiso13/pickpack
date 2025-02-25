"use client";

import { api } from "~/trpc/react";
import React, { useState } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [qr, setQr] = useState("");
  const mutation = api.package.makeReservation.useMutation({
    onSuccess(data) {
      QRCode.toDataURL(data).then(setQr);
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="pb-24 pt-24 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        PickPack
      </h1>
      {qr ? (
        <div className="bg-white p-4">
          <img src={qr} />
        </div>
      ) : (
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          onClick={() => mutation.mutate()}
        >
          Recibir paquete
        </button>
      )}
    </main>
  );
}
