"use client"

import { api } from "~/trpc/react";
import React, { useEffect, useState } from "react";
import QRCode from "qrcode"

export default function Home() {

  const [qr, setQr] = useState("")
  const { data: cityList, isLoading } = api.location.getCities.useQuery()
  const reservationMutation = api.locker.makeReservation.useMutation({
    onSuccess(data) {
      QRCode.toDataURL(data).then(setQr)
    }
  })

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="pt-24 pb-24 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        PickPack
      </h1>
      {qr ? (
        <div className="bg-white p-4">
          <img src={qr} />
        </div>) :
        (<button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          onClick={() => reservationMutation.mutate()}
        >
          Recibir paquete
        </button>)
      }
      <ul>
        {isLoading ?
          (<div> loading cities</div>) :
          (cityList!.map(c => {
            return (<li key={c}> {c} </li>)
          }
          ))
        }
      </ul>
    </main>
  );
}
