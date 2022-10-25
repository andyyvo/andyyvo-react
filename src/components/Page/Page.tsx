import React from "react";
import { FooterBar } from "../Footer/FooterBar";
import { NavBar } from "../NavBar/NavBar";
import { ScreenFrame } from "../Screen/ScreenFrame";

/** The ultimate wrapper of all pages */

export interface PageProps {
  /** the page goods */
  children: React.ReactNode;
  /** for pages where i don't want a footer */
  noFooter?: boolean;
}

export const PageWrapper: React.FunctionComponent<PageProps> = ({
  children,
  noFooter = false,
}: PageProps) => {
  return (
    <ScreenFrame>
      <NavBar />
      {children}
      {noFooter ? (
        <></>
      ) : (
        <FooterBar />
      )}
    </ScreenFrame>
  );
}
