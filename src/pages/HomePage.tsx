import React from "react";
import { Button } from "../components/Button/Button";
import { NavBar } from "../components/NavBar/NavBar";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";
import { BodyText } from "../components/Text/BodyText";
import { HeaderText } from "../components/Text/HeaderText";

export const HomePage: React.FunctionComponent = () => {

  return (
    <ScreenFrame>
      <Screen>
        <NavBar />
        <Button
          variant={'primary'}
          color={'#FFCA00'}
          padding={'large'}
        >
          hello
        </Button>
        <HeaderText type="header1">Andy Vo</HeaderText>
        <BodyText>Hello there! What's goin on?</BodyText>
      </Screen>
    </ScreenFrame>
  );
}
