"use client";
import { useState, useEffect } from "react";

export function LocalDate({
  options,
}: {
  options?: Intl.DateTimeFormatOptions;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  const dateString = mounted
    ? new Date().toLocaleDateString("bn-BD", options)
    : "";

  return (
    <time suppressHydrationWarning className="min-h-4">
      {dateString}
    </time>
  );
}
