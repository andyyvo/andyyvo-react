import React from "react";
import { Button } from "../components/Button/Button";
import { NavBar } from "../components/NavBar/NavBar";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const FreelancePage: React.FunctionComponent = () => {
  return (
    <ScreenFrame>
      <NavBar />
      <Screen backgroundColor="white">
        <Button
          variant={'primary'}
          backgroundColor={'offwhite'}
          color={'emerald'}
          padding={'large'}
        >
          freelance
        </Button>
      </Screen>
    </ScreenFrame>
  );
}
