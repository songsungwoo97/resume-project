import React from "react";
import { useCurrentTime } from "../../hooks/useCurrentTime";

export const Header = () => {
  const currentTime = useCurrentTime();

  return (
    <header className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <img src="/logo.png" alt="ECO 로고" className="h-12 mr-4" />
        <div className="text-lg">{currentTime.toLocaleString("ko-KR")}</div>
      </div>
    </header>
  );
};
