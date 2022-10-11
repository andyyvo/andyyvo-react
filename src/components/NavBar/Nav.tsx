import React, { useEffect } from "react";

export interface NavProps {
  /** accessible name for nav bar */
  'aria-label'?: string;
  /** color of nav bar background */
  backgroundColor?: string;
  /** class name of button */
  classname?: string;
  /** renders logo left side of nav bar */
  logo?: React.ReactNode;
  /** renders menu options right side of nav bar */
  menu?: React.ReactNode;
}

export const Nav: React.FunctionComponent<NavProps> = ({
  'aria-label': ariaLabel = 'NavBar',
  backgroundColor = '#fff',
  classname = 'navbar',
  logo,
  menu,
  ...props
}: NavProps) => {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    console.log(windowSize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  const NavStyle = {
    backgroundColor: backgroundColor
  }

  return (
    <div
      {...props}
      className={classname}
      style={NavStyle}
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

function getWindowSize() {
  const {
    innerWidth,
    innerHeight
  } = window;

  return { innerWidth, innerHeight };
}
