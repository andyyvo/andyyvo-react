import React from "react";

/**
 * the nav bar will be outside of the screen as its own item located at the very top of the screen
 */

export interface NavProps {
  /** accessible name for nav bar */
  'aria-label'?: string;
  /** class name of nav bar */
  classname?: string;
  /** renders logo left side of nav bar */
  logo?: React.ReactNode;
  /** renders menu options right side of nav bar */
  menu?: React.ReactNode;
}

/** an AVO component */
export const Nav: React.FunctionComponent<NavProps> = ({
  'aria-label': ariaLabel = 'NavBar',
  classname = 'navbar',
  logo,
  menu,
  ...props
}: NavProps) => {

  return (
    <div
      {...props}
      className={classname}
    >
      <div
        className="navbar-logo"
      >
        {logo}
      </div>
      <div
        className="navbar-menu"
      >
        {menu}
      </div>
    </div>
  );
}
