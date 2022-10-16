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
      <NavBar />
      <Screen>
        <Button
          variant={'primary'}
          backgroundColor={'blue'}
          color={'white'}
          padding={'large'}
        >
          hello
        </Button>
        <HeaderText type="header1">Andy Vo.</HeaderText>
        <HeaderText type="header2" italics>The storyteller.</HeaderText>
        <HeaderText type="header3">hehe.</HeaderText>
        <BodyText size="large">Large body text</BodyText>
        <BodyText size="medium">Regular body text</BodyText>
        <BodyText size="small">OMG we're tiny!</BodyText>
      </Screen>
    </ScreenFrame>
  );
}
