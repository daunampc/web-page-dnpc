// hooks/useHash.ts
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Returns the current URL hash (without the #), updating:
 *  - on first mount,
 *  - whenever the Next.js path changes,
 *  - whenever the browser hash changes.
 */
export function useHash(): string {
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    function update() {
      setHash(window.location.hash.slice(1));
    }

    // 1) read on mount / path change
    update();

    // 2) listen for any future #... changes
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);

  return hash;
}

