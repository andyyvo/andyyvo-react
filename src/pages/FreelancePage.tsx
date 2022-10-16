import React from "react";
import { Button } from "../components/Button/Button";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const FreelancePage: React.FunctionComponent = () => {
  return (
    <ScreenFrame>
      <Screen>
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
