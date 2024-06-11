"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function MyPage() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/find-a-dealer/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="">
      <Map />
    </div>
  );
}