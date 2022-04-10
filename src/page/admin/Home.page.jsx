import { useEffect } from "react";

export function AdminHomePage() {
  useEffect(() => {
    document.title = "Адмін панель";
  }, []);

  return <></>;
}
