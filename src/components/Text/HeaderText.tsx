import React from "react";

/**
 * header tags without using h1, h2, h3, etc.
 */

export interface HeaderTextProps {
  /** accessible name for HeaderText */
  'aria-label'?: string;
  /** renders content inside HeaderText */
  children: React.ReactNode;
  /** class name of text */
  classname?: string;
  /** is it italicized?? */
  italics?: boolean;
  /** type of header text */
  type: 'header1' | 'header2' | 'header3';
  /** weight of header text */
  weight?: 'thin' | 'regular' | 'bold';
}

export const HeaderText: React.FunctionComponent<HeaderTextProps> = ({
  'aria-label': ariaLabel = 'Header Text',
  children,
  classname = 'headertext',
  italics = false,
  type = 'header1',
  weight = 'bold',
  ...props
}: HeaderTextProps) => {
  const HeaderSelect = () => {
    if (type === 'header1') {
      return (
        <h1
          {...props}
          className={
            classname +' '+
            type +' '+
            weight +' '+
            (italics ? 'italics' : 'straight')
          }
        >
          {children}
        </h1>
      );
    } else if (type === 'header2') {
      return (
        <h2
          {...props}
          className={
            classname +' '+
            type +' '+
            weight +' '+
            (italics ? 'italics' : 'straight')
          }
        >
          {children}
        </h2>
      );
    } else if (type === 'header3') {
      return (
        <h3
          {...props}
          className={
            classname +' '+
            type +' '+
            weight +' '+
            (italics ? 'italics' : 'straight')
          }
        >
          {children}
        </h3>
      );
    }
  }

  return (
    <>
      {HeaderSelect()}
    </>
  );
}
