import React from "react";

/**
 * screen will have the padding on the sides -- basically this is what allows me to section of pieces on a page
 */

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

/** an AVO component */
export const Screen: React.FunctionComponent<ScreenProps> = ({
  backgroundColor = '#fff',
  children = null,
  classname = 'screen',
  padding = '',
  ...props
}: ScreenProps) => {
  const ScreenStyle = {
    backgroundColor: backgroundColor,
    padding: padding
  }
  return (
    <div
    {...props}
      className={classname}
      style={ScreenStyle}
    >
      {children}
    </div>
  );
}