import React from "react";

/**
 * screen will have the padding on the sides -- basically this is what allows me to section of pieces on a page
 */

export interface ScreenProps {
  /** background color of screen */
  backgroundColor: 'blue' | 'teal' | 'emerald' | 'cream' | 'offwhite' | 'white';
  /** renders content inside screen */
  children?: React.ReactNode;
  /** class name of screen */
  classname?: string;
  /** side padding of screen */
  padding?: 'small' | 'large';
}

/** an AVO component */
export const Screen: React.FunctionComponent<ScreenProps> = ({
  backgroundColor = 'white',
  children = null,
  classname = 'screen',
  padding = 'small',
  ...props
}: ScreenProps) => {
  return (
    <div
    {...props}
      className={
        classname
        +' background-'+ backgroundColor
        +' padding-'+ padding
      }
    >
      {children}
    </div>
  );
}