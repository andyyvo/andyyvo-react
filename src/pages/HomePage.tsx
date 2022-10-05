import React from "react";
import { Button } from "../components/Button/Button";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const HomePage: React.FunctionComponent = () => {
  return (
    <ScreenFrame>
      <Screen>
        <Button
          variant={'primary'}
          color={'#FFCA00'}
          padding={'large'}
        >
          hello
        </Button>
      </Screen>
    </ScreenFrame>
  );
}
