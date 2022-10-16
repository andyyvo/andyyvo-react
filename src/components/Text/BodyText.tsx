import React from "react";

/**
 * body text. but my custom way of using <p> tags
 */

export interface BodyTextProps {
  /** accessible name for BodyText */
  'aria-label'?: string;
  /** renders content inside BodyText */
  children: React.ReactNode;
  /** class name of text */
  classname?: string;
  /** is it italicized?? */
  italics?: boolean;
  /** size of text */
  size?: 'small' | 'medium' | 'large';
  /** weight of text */
  weight?: 'thin' | 'regular' | 'bold';
}

export const BodyText: React.FunctionComponent<BodyTextProps> = ({
  'aria-label': ariaLabel = 'Body Text',
  children,
  classname = 'bodytext',
  italics = false,
  size = 'medium',
  weight = 'regular',
  ...props
}: BodyTextProps) => {
  return (
    <p
      {...props}
      className={
        classname +' '+
        size +' '+
        weight +' '+
        (italics ? 'italics' : 'straight')
      }
    >
      {children}
    </p>
  );
}
