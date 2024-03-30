import React from "react";

type Props = {};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default RootLayout;
