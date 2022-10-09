import React from "react";
import logo_dark from "../../assets/images/full_logo_dark.svg";
import logo_light from "../../assets/images/full_logo_light.svg";

export interface LogoProps {
  /** accessible name for nav bar */
  'aria-label'?: string;
  /** class name of logo */
  classname?: string;
  /** light or dark logo */
  color: 'light' | 'dark';
  /** size of logo */
  size?: 'small' | 'large';
}

export const Logo: React.FunctionComponent<LogoProps> = ({
  'aria-label': ariaLabel = 'Logo',
  classname = 'logo',
  color = 'dark',
  size = 'small',
  ...props
}: LogoProps) => {
  const logoColor = () => {
    if (color === 'dark') {
      return (
        <img src={logo_dark} alt="andy vo logo" />
      );
    } else {
      return (
        <img src={logo_light} alt="andy vo logo" />
      );
    }
  }

  return (
    <div
      {...props}
      className={
        classname +' '+
        size +' '+
        'logo'
      }
    >
      {logoColor()}
    </div>
  )
}