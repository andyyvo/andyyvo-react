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
  /** text color */
  color?: 'blue' | 'teal' | 'emerald' | 'cream' | 'offwhite' | 'white';
  /** is it italicized?? */
  italics?: boolean;
  /** size of text */
  size?: 'small' | 'medium' | 'large' | 'mini';
  /** weight of text */
  weight?: 'thin' | 'regular' | 'bold';
}

export const BodyText: React.FunctionComponent<BodyTextProps> = ({
  'aria-label': ariaLabel = 'Body Text',
  children,
  classname = 'bodytext',
  color = 'blue',
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
        (italics ? 'italics' : 'straight') +
        ' textcolor-'+ color
      }
    >
      {children}
    </p>
  );
}
