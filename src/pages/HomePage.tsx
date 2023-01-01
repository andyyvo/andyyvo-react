import React, { useEffect } from "react";
import { AdventureCard } from "../components/Card/AdventureCard";
import { PageWrapper } from "../components/Page/Page";
import { Screen } from "../components/Screen/Screen";
import { BodyText } from "../components/Text/BodyText";
import { HeaderText } from "../components/Text/HeaderText";

/* importing quest data */
import { adventures } from "../data/adventures";

export const HomePage: React.FunctionComponent = () => {
  /* state of data */
  // soln to mapping type issue: https://bobbyhadz.com/blog/typescript-object-is-possibly-undefined
  type adventuresList = {
    "title": string;
    "description": string;
    "image": string;
    "imageAlt": string;
    "link": string;
  }[];
  const [adventuresShown, setAdventuresShown] = React.useState<adventuresList>();
  const numShown = 4; // magic number to show most recent 4 quests

  useEffect(() => {
    setAdventuresShown(adventures);
  }, []);

  /** ANDY VO THE HERO */
  const homePageHero = (
    <Screen backgroundColor="white" padding="large">
      <HeaderText type="header1">Andy Vo. 🧙‍♂️</HeaderText>
      <br />
      <HeaderText type="header1" weight="regular" italics>The storyteller.</HeaderText>
      <br />
      <BodyText classname="bodytext landing1" size="medium">Interdisciplinary product manager blurring the lines between <b className="textcolor-teal">magic</b> and reality.</BodyText>
    </Screen>
  );

  /** my adventure log! saving a lot of data... */
  const homePageAdventures = (
    <Screen backgroundColor="blue">
      <HeaderText type="header1" color="white">Adventures. 🏔️</HeaderText>
      <div className="adventure-section">
        {adventuresShown?.slice(0,numShown).map((adventure, index) => (
          <AdventureCard
            key={index}
            title={adventure.title}
            description={adventure.description}
            image={
              <img src={process.env.PUBLIC_URL + adventure.image} alt={adventure.imageAlt} />
            }
            expandLink={adventure.link}
          >
            <div className="hover-card right"></div>
            <div className="hover-card left"></div>
          </AdventureCard>
        ))}
      </div>
    </Screen>
  );

  /** take a peek into my level 999 spellbook */
  const homePageSpellbook = (
    <Screen backgroundColor="white">
      <HeaderText type="header1">Spellbook. 📚</HeaderText>
      <div className="spellbook-section">
        <div className="spellbook-section-img">
          <img src={process.env.PUBLIC_URL + "/assets/images/andyvo-bw.png"} alt="andy vo black and white profile pic" />
          <HeaderText type="header3" italics>one man's magic is another man's engineering</HeaderText>
        </div>
        <div className="spellbook-section-content">
          <BodyText>hello</BodyText>
        </div>
      </div>
    </Screen>
  );

  /** main story quest */
  const homePageQuest = (
    <Screen backgroundColor="blue">
      <HeaderText classname="headertext textcolor-white" type="header1">Quest. 💫</HeaderText>
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
