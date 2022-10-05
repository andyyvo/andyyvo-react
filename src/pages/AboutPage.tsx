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
          color={'#002EFF'}
          padding={'large'}
        >
          andy vo
        </Button>
      </Screen>
    </ScreenFrame>
  );
}
