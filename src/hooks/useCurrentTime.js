import { useState } from "react";

export const useCurrentTime = () => {
  const [currentTime] = useState(new Date());
  return currentTime;
};
