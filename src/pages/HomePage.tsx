import React from "react";
import { Button } from "../components/Button/Button";
import { PageWrapper } from "../components/Page/Page";
import { Screen } from "../components/Screen/Screen";
import { BodyText } from "../components/Text/BodyText";
import { HeaderText } from "../components/Text/HeaderText";

export const HomePage: React.FunctionComponent = () => {
  /** ANDY VO THE HERO */
  const homePageHero = (
    <Screen backgroundColor="white" padding="8% 15%">
      <HeaderText type="header1">Andy Vo. 🧙‍♂️</HeaderText>
      <br />
      <HeaderText type="header1" weight="regular" italics>The storyteller.</HeaderText>
      <br />
      <BodyText classname="bodytext landing1" size="medium">Interdisciplinary product manager blurring the lines between <b className="textcolor-teal">magic</b> and reality.</BodyText>
    </Screen>
  );

  /** my adventure log! saving a lot of data... */
  const homePageAdventures = (
    <Screen backgroundColor="offwhite" padding="4% 15%">
      <HeaderText type="header1">Adventures.</HeaderText>
    </Screen>
  );

  /** take a peek into my level 999 spellbook */
  const homePageSpellbook = (
    <Screen backgroundColor="white" padding="4% 15%">
      <HeaderText type="header1">Spellbook.</HeaderText>
    </Screen>
  );

  /** main story quest */
  const homePageQuest = (
    <Screen backgroundColor="blue" padding="4% 15%">
      <HeaderText classname="headertext textcolor-white" type="header1">Quest.</HeaderText>
    </Screen>
  );

  const homePageContent = (
    <>
      {homePageHero}
      {homePageAdventures}
      {homePageSpellbook}
      {homePageQuest}
    </>
  )

  return (
    <PageWrapper>
      {homePageContent}
    </PageWrapper>
  );
}
