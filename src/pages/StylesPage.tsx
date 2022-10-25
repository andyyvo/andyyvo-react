import React from "react";
import { Button } from "../components/Button/Button";
import { NavBar } from "../components/NavBar/NavBar";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";
import { BodyText } from "../components/Text/BodyText";
import { HeaderText } from "../components/Text/HeaderText";

export const StylesPage: React.FunctionComponent = () => {

  return (
    <ScreenFrame>
      <NavBar />
      <Screen backgroundColor="white">
        <Button
          variant={'primary'}
          backgroundColor={'blue'}
          color={'white'}
          padding={'large'}
        >
          hello
        </Button>
        <br />
        <HeaderText type="header1">Andy Vo.</HeaderText>
        <br />
        <HeaderText type="header2" italics>The storyteller.</HeaderText>
        <br />
        <HeaderText type="header3">hehe.</HeaderText>
        <br />
        <BodyText size="large">Large body text</BodyText>
        <br />
        <BodyText size="medium">Regular body text</BodyText>
        <br />
        <BodyText size="small">OMG we're tiny!</BodyText>
      </Screen>
      <Screen backgroundColor="offwhite">
        <HeaderText type="header1">offwhite</HeaderText>
      </Screen>
      <Screen backgroundColor="cream">
        <HeaderText type="header1">cream</HeaderText>
      </Screen>
      <Screen backgroundColor="emerald">
        <HeaderText type="header1">emerald</HeaderText>
      </Screen>
      <Screen backgroundColor="teal">
        <HeaderText type="header1">teal</HeaderText>
      </Screen>
      <Screen backgroundColor="blue">
        <HeaderText color="white" type="header1">blue</HeaderText>
      </Screen>
    </ScreenFrame>
  );
}
