"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header = () => {
  const [time, settime] = useState<String>("00:00 AM");

  useEffect(() => {
    const updateCurrentTime = () => {
      const today = new Date();

      let hour = today.getHours();
      let minute = today.getMinutes().toString();
      let ampm = hour >= 12 ? "PM" : "AM";

      hour = hour % 12 || 12;
      minute = minute.padStart(2, "0");

      let time = `${hour}:${minute} ${ampm}`;
      settime(time);
    };

    const timeout = setTimeout(updateCurrentTime, 1000);

    return () => clearTimeout(timeout);
  }, [time]);

  return (
    <div className="container fixed top-0 left-0 right-0 flex justify-between items-center py-2 font-bold">
      {/* Logo */}
      <Link href="/" className="text-2xl font-black">
        TH
      </Link>

      {/* Right time */}
      <Button size="lg" asChild className="z-auto">
        <span className="text-white text-xl">{time}</span>
      </Button>
    </div>
  );
};
