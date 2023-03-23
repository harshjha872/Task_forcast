import React from "react";
import Link from "next/link";

const Channel = () => {
  return (
    <div className="w-40 items-center flex flex-col p-4 fixed top-2 left-2 rounded-md bg-neutral-900 space-y-3">
      <div>
        <Link href="/">All Chat</Link>
      </div>
      <div>
        <Link href="/javascript">javascript</Link>
      </div>
      <div>
        <Link href="/cpp">cpp</Link>
      </div>
      <div>
        <Link href="/python">python</Link>
      </div>
    </div>
  );
};

export default Channel;
