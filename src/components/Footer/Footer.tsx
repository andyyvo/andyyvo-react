import React from "react";

/**
 * the footer bar will be outside of the screen as its own item located at the very bottom of the screen
 */

export interface FooterProps {
  /** accessible name for footer bar */
  'aria-label'?: string;
  /** class name of footer bar */
  classname?: string;
  /** the big ending hook takeaway for a viewer */
  content: React.ReactNode;
  /** my socials for the ppl */
  socials: React.ReactNode;
}

/** an AVO component */
export const Footer: React.FunctionComponent<FooterProps> = ({
  'aria-label': ariaLabel = 'Footer',
  classname = 'footer',
  content,
  socials,
  ...props
}: FooterProps) => {

  return (
    <div
      {...props}
      className={classname}
    >
      <div className="footer-content">
        {content}
      </div>
      <div className="footer-socials">
        {socials}
      </div>
    </div>
  );
}
