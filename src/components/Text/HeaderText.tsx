import React from "react";

export interface HeaderTextProps {
  /** accessible name for HeaderText */
  'aria-label'?: string;
  /** renders content inside HeaderText */
  children: string;
  /** class name of text */
  classname?: string;
  /** type of header text */
  type: 'header1' | 'header2' | 'header3';
  /** weight of header text */
  weight?: 'thin' | 'regular' | 'bold';
}

export const HeaderText: React.FunctionComponent<HeaderTextProps> = ({
  'aria-label': ariaLabel = 'Header Text',
  children,
  classname = 'headertext',
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
            weight
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
            weight
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
            weight
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
