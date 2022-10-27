import { Button } from "../Button/Button";
import { BodyText } from "../Text/BodyText";
import { HeaderText } from "../Text/HeaderText";
import { Footer } from "./Footer";

/**
 * i'm introducing a wrapper here because i figured that i only need one instance of the footer bar so this serves as that global component
 */

/** wrapper component for Footer */
export const FooterBar: React.FunctionComponent = () => {
  const footerContent = (
    <>
      <HeaderText type="header3">Let's make some <a target="_blank" rel="noopener noreferrer" href="mailto:andyvo@berkeley.edu"><span className="textcolor-teal underline">magic!</span></a></HeaderText>
    </>
  );

  const footerSocials = (
    <>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andyyvo/">
        <Button
          backgroundColor="emerald"
          color="white"
          variant="primary"
        >
          <BodyText size="medium" weight="bold">LinkedIn</BodyText>
        </Button>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/andyyvo/">
        <Button
          backgroundColor="emerald"
          color="white"
          variant="primary"
        >
          <BodyText size="medium" weight="bold">GitHub</BodyText>
        </Button>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/theandyvo/">
        <Button
          backgroundColor="emerald"
          color="white"
          variant="primary"
        >
          <BodyText size="medium" weight="bold">Instagram</BodyText>
        </Button>
      </a>
    </>
  )

  return (
    <Footer
      content={footerContent}
      socials={footerSocials}
    />
  );
}
