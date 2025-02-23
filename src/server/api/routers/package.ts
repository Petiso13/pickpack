import QRCode from "qrcode";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const packageRouter = createTRPCRouter({
  makeReservation: publicProcedure
    .mutation(() => {
      let qrString = ""
      for (var i = 0; i < 6; i++) {
        qrString = qrString + Math.floor(Math.random() * 10).toString()
      }
      return qrString
    }),
});

export type PackageRouter = typeof packageRouter

