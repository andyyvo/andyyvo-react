import React from "react";

export interface ScreenProps {
  /** background color of screen */
  backgroundColor?: string;
  /** renders content inside screen */
  children?: React.ReactNode;
  /** class name of screen */
  classname?: string;
  /** side padding of screen */
  padding?: string;
}

export const Screen: React.FunctionComponent<ScreenProps> = ({
  backgroundColor = 'white',
  children = null,
  classname = 'screen',
  padding = '',
  ...props
}: ScreenProps) => {
  return (
    <div
    {...props}
      className={
        classname &&
        backgroundColor &&
        padding &&
        'screen'
      }
    >
      {children}
    </div>
  );
}