import React from "react";
import { Button } from "../components/Button/Button";
import { NavBar } from "../components/NavBar/NavBar";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const AboutPage: React.FunctionComponent = () => {
  return (
    <ScreenFrame>
      <Screen backgroundColor="white">
        <NavBar />
        <Button
          variant={'primary'}
          backgroundColor={'teal'}
          padding={'large'}
        >
          andy vo
        </Button>
      </Screen>
    </ScreenFrame>
  );
}
