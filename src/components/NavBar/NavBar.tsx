import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Nav } from "./Nav";

/**
 * i'm introducing a wrapper here because i figured that i only need one instance of the nav bar so this serves as that global component
 */

/** wrapper component for Nav */
export const NavBar: React.FunctionComponent = () => {
  const menuOptions = (
    <>
      <Button
        variant="link"
        backgroundColor="white"
        color="blue"
      >
        About
      </Button>
      <Button
        variant="link"
        backgroundColor="white"
        color="blue"
      >
        Work
      </Button>
      <Button
        variant="link"
        backgroundColor="white"
        color="blue"
      >
        Collaborate
      </Button>
    </>
  );

  const menuLogo = (
    <Logo color="dark" size="small" />
  );

  return (
    <Nav
      logo={menuLogo}
      menu={menuOptions}
    />
  );
}
