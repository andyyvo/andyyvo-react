import React from "react";

export interface BodyTextProps {
  /** accessible name for BodyText */
  'aria-label'?: string;
  /** renders content inside BodyText */
  children: string;
  /** class name of text */
  classname?: string;
  /** size of text */
  size?: 'small' | 'medium' | 'large';
  /** weight of text */
  weight?: 'thin' | 'regular' | 'bold';
}

export const BodyText: React.FunctionComponent<BodyTextProps> = ({
  'aria-label': ariaLabel = 'Body Text',
  children,
  classname = 'bodytext',
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
        weight
      }
    >
      {children}
    </p>
  );
}
