"use client";

import { Locker } from "~/server/api/routers/lockers";

export function LockerComponent(props: { locker: Locker[] }) {
  return (
    <div className="mt-10 w-full max-w-xs">
      Los lockers son:
      <br />
      <div>
        {" "}
        {props.locker.map((x) => {
          return <div key={x.id}>número de serie: {x.nroSerieLocker} </div>;
        })}
      </div>
    </div>
  );
}
