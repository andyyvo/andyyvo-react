import React from "react";

/** home page cards to show my work via ADVENTURE CARDS (basically my quest log lol)
 * think ffxiv the hunt
 */

export interface AdventureCardProps {
  /** quest log goods */
  children: React.ReactNode;
  /** adventure card class name */
  classname?: string;
  /** adventure details */
  description: string;
  /** bring me to the adventure mems ~ should be relative path */
  expandLink: string;
  /** last seen appearance of the quest */
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
      <div className="adventurecard-header">
        <h3>{title}</h3>
        <div className="adventurecard-header-img">
          {image}
        </div>
      </div>
    </div>
  )
}