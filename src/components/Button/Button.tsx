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
  /** Accessible name for button */
  'aria-label'?: string;
  /** Color of button background */
  backgroundColor?: string;
  /** Renders content inside button */
  children?: React.ReactNode;
  /** Class name of button */
  classname?: string;
  /** Color of button text */
  color?: string;
  /** Hover color of button */
  hoverColor?: string;
  /** Hover height of button */
  hoverHeight?: 'high' | 'low' | 'flat';
  /** Icon on button */
  icon?: React.ReactNode | null;
  /** Icon position */
  iconPosition?: 'left' | 'right';
  /** Padding size of button */
  padding?: 'large' | 'small' | 'none';
  /** Button variant */
  variant: 'primary' | 'secondary' | 'link';
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const ButtonMain: React.FunctionComponent<ButtonProps> = ({
  'aria-label': ariaLabel = 'Button',
  backgroundColor = '#243A5C',
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
    backgroundColor: backgroundColor,
    color: color,
    padding: ButtonPadding(padding),
  }

  return (
    <button
      {...props}
      style={ButtonStyle}
      className={classname && 'button'}
    >
      {children}
    </button>
  )
}

export const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<any>) => (
  <ButtonMain innerRef={ref} {...props} />
));

Button.displayName = 'Button';
