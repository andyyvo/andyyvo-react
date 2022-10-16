import React from "react";

/**
 * every page will have one screen frame that will encapsulate the entire page. a screen frame can host multiple screens
 */

export interface ScreenFrameProps {
  /** renders content inside screen */
  children?: React.ReactNode;
  /** class name of screen frame */
  classname?: string;
}

/** an AVO component */
export const ScreenFrame: React.FunctionComponent<ScreenFrameProps> = ({
  children = null,
  classname = 'screenframe',
  ...props
}: ScreenFrameProps) => {
  return (
    <div
      {...props}
      className={classname}
    >
      {children}
    </div>
  );
}
