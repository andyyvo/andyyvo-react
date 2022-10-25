import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { BodyText } from "../Text/BodyText";
import { Nav } from "./Nav";

/**
 * i'm introducing a wrapper here because i figured that i only need one instance of the nav bar so this serves as that global component
 */

/** wrapper component for Nav */
export const NavBar: React.FunctionComponent = () => {
  const menuOptions = (
    <>
      <Link to="/about">
        <Button
          variant="link"
          backgroundColor="white"
          color="blue"
          padding="small"
        >
          <BodyText size="small">About</BodyText>
        </Button>
      </Link>
      <Link to="/work">
        <Button
          variant="link"
          backgroundColor="white"
          color="blue"
          padding="small"
        >
          <BodyText size="small">Work</BodyText>
        </Button>
      </Link>
      <Link to="/freelance">
        <Button
          variant="link"
          backgroundColor="white"
          color="blue"
          padding="small"
        >
          <BodyText size="small">Collab</BodyText>
        </Button>
      </Link>
    </>
  );

  const menuLogo = (
    <Link to="/">
      <Logo color="dark" size="small" />
    </Link>
  );

  return (
    <Nav
      logo={menuLogo}
      menu={menuOptions}
    />
  );
}
