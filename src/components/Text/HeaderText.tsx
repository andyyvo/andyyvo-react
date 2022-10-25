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
  /** text color */
  color?: 'blue' | 'white';
  /** is it italicized?? */
  italics?: boolean;
  /** type of header text */
  type: 'header1' | 'header2' | 'header3' | 'mini';
  /** weight of header text */
  weight?: 'thin' | 'regular' | 'bold';
}

export const HeaderText: React.FunctionComponent<HeaderTextProps> = ({
  'aria-label': ariaLabel = 'Header Text',
  children,
  classname = 'headertext',
  color = 'blue',
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
            (italics ? 'italics' : 'straight') +
            ' textcolor-'+ color
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
            (italics ? 'italics' : 'straight') +
            ' textcolor-'+ color
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
            (italics ? 'italics' : 'straight') +
            ' textcolor-'+ color
          }
        >
          {children}
        </h3>
      );
    } else if (type === 'mini') {
      return (
        <h4
          {...props}
          className={
            classname +' '+
            type +' '+
            weight +' '+
            (italics ? 'italics' : 'straight') +
            ' textcolor-'+ color
          }
        >
          {children}
        </h4>
      );
    }
  }

  return (
    <>
      {HeaderSelect()}
    </>
  );
}
