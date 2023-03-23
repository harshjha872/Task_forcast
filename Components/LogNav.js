import React from "react";
import Link from "next/link";

const LogNav = () => {
  return (
    <div className="w-40 items-center flex flex-col p-4 fixed bottom-2 left-2 rounded-md bg-neutral-900 space-y-3">
      <div>
        <Link href="/login">Login</Link>
      </div>
      <div>
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LogNav;
