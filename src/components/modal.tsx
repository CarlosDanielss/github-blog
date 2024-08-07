import { useState } from "react";
import { createPortal } from "react-dom";

import { ProfileSearch } from "./profile-search";

export function Modal() {
  const [active, setActive] = useState(true);

  return <>{active && createPortal(<ProfileSearch />, document.body)}</>;
}
