import React from "react";
import { Button } from "../components/Button/Button";
import { Screen } from "../components/Screen/Screen";
import { ScreenFrame } from "../components/Screen/ScreenFrame";

export const WorkPage: React.FunctionComponent = () => {
  return (
    <ScreenFrame>
      <Screen>
        <Button
          variant={'primary'}
          color={'#A0A3FF'}
          padding={'large'}
        >
          work
        </Button>
      </Screen>
    </ScreenFrame>
  );
}
