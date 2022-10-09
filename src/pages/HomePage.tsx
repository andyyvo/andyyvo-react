import React from "react";
import { Button } from "../components/Button/Button";
import { Logo } from "../components/Logo/Logo";
import { NavBar } from "../components/NavBar/NavBar";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const HomePage: React.FunctionComponent = () => {

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
  )

  return (
    <ScreenFrame>
      <Screen>
        <NavBar
          logo={menuLogo}
          menu={menuOptions}
        />
        <Button
          variant={'primary'}
          color={'#FFCA00'}
          padding={'large'}
        >
          hello
        </Button>
      </Screen>
    </ScreenFrame>
  );
}
