import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Nav } from "./Nav";

/** wrapper component for Nav */
export const NavBar: React.FunctionComponent = () => {
  const menuOptions = (
    <>
      <Button
        variant="link"
      >
        About
      </Button>
      <Button
        variant="link"
      >
        Work
      </Button>
      <Button
        variant="link"
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
