import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { BodyText } from "../Text/BodyText";
import { HeaderText } from "../Text/HeaderText";

/** home page cards to show my work via ADVENTURE CARDS (basically my quest log lol)
 * think ffxiv the hunt
 */

export interface AdventureCardProps {
  /** hover effect children */
  children?: React.ReactNode;
  /** adventure card class name */
  classname?: string;
  /** adventure details */
  description: string;
  /** bring me to the adventure mems ~ should be relative path */
  expandLink: string;
  /** last seen appearance of the quest 1440 x 1024 */
  image: React.ReactNode;
  /** big bold quest title */
  title: string;
}

export const AdventureCard: React.FunctionComponent<AdventureCardProps> = ({
  children,
  classname = "adventurecard",
  description = "",
  expandLink,
  image,
  title = "",
  ...props
}: AdventureCardProps) => {
  return (
    <div
      {...props}
      className={classname}
    >
      <div className="adventurecard-wrapper">
        <div className="adventurecard-header">
          <div className="adventurecard-header-img">
            {image}
          </div>
          <HeaderText type="header3" color="white">{title}</HeaderText>
        </div>
        <div className="adventurecard-content">
          <BodyText color="white">{description}</BodyText>
          <Link to={expandLink}>
            <Button backgroundColor="white" variant="primary"><HeaderText type="mini">Learn More</HeaderText></Button>
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}