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
  backgroundColor?: string;
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
  icon?: React.ReactNode | null;
  /** icon position */
  iconPosition?: 'left' | 'right';
  /** padding size of button */
  padding?: 'large' | 'small' | 'none';
  /** button variant */
  variant: 'primary' | 'secondary' | 'link';
  /** forwarded ref */
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
