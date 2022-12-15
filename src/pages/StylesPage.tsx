import React from "react";
import { Button } from "../components/Button/Button";
import { PageWrapper } from "../components/Page/Page";
import { Screen } from "../components/Screen/Screen";
import { BodyText } from "../components/Text/BodyText";
import { HeaderText } from "../components/Text/HeaderText";

export const StylesPage: React.FunctionComponent = () => {
  const stylesPageContent = (
    <>
      <Screen backgroundColor="white">
        <Button
          variant={'primary'}
          backgroundColor={'blue'}
          padding={'large'}
        >
          hello
        </Button>
        <br />
        <HeaderText type="header1">Header 1.</HeaderText>
        <br />
        <HeaderText type="header2" italics>Header 2.</HeaderText>
        <br />
        <HeaderText type="header3">Header 3.</HeaderText>
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
    </>
  )

  return (
    <PageWrapper>
      {stylesPageContent}
    </PageWrapper>
  );
}
