import React from "react";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
