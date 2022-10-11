import React from "react";

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  link = 'link'
}

export enum ButtonHover {
  high = 'high',
  low = 'low',
  flat = 'flat'
}

export interface ButtonProps {
  /** accessible name for button */
  'aria-label'?: string;
  /** color of button background */
  backgroundColor?: 'blue' | 'teal' | 'green' | 'cream' | 'offwhite' | 'white';
  /** renders content inside button */
  children?: React.ReactNode;
  /** class name of button */
  classname?: string;
  /** color of button text */
  color?: string;
  /** hover color of button */
  hoverColor?: string;
  /** hover height of button */
  hoverHeight?: 'high' | 'low' | 'flat';
  /** icon on button */
  icon?: React.ReactNode;
  /** icon position */
  iconPosition?: 'left' | 'right';
  /** padding size of button */
  padding?: 'large' | 'small' | 'none';
  /** button variant */
  variant: 'primary' | 'secondary' | 'link';
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  'aria-label': ariaLabel = 'Button',
  backgroundColor = 'blue',
  children = null,
  classname = 'button',
  color = '#FFF',
  hoverColor = '#22222288',
  hoverHeight = 'flat',
  icon = null,
  iconPosition = 'left',
  padding = 'none',
  variant = ButtonVariant.primary,
  ...props
}: ButtonProps) => {
  const ButtonPadding = (padding: 'large' | 'small' | 'none') => {
    if (padding === 'large') {
      return '1rem 2rem';
    } else if (padding === 'small') {
      return '0.5rem 1rem';
    } else {
      return '0rem';
    }
  }

  const ButtonStyle = {
    color: color,
    padding: ButtonPadding(padding),
  }

  return (
    <button
      {...props}
      style={ButtonStyle}
      className={classname +' '+ variant +' background-' + backgroundColor}
    >
      {children}
    </button>
  )
}
