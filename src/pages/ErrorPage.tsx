import React from "react";
import { Button } from "../components/Button/Button";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const ErrorPage: React.FunctionComponent = () => {
  return (
    <ScreenFrame>
      <Screen>
        <Button
          variant={'primary'}
          color={'#FF0000'}
          padding={'large'}
        >
          error
        </Button>
      </Screen>
    </ScreenFrame>
  );
}
