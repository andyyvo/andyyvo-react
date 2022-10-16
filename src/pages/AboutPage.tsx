import React from "react";
import { Button } from "../components/Button/Button";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const AboutPage: React.FunctionComponent = () => {
  return (
    <ScreenFrame>
      <Screen>
        <Button
          variant={'primary'}
          backgroundColor={'teal'}
          color={'cream'}
          padding={'large'}
        >
          andy vo
        </Button>
      </Screen>
    </ScreenFrame>
  );
}
