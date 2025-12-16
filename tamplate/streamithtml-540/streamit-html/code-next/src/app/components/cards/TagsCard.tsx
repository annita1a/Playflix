import React, { Fragment, memo } from "react";

// Next-Link
import Link from "next/link";

interface TagCardProps{
  title?:string,
  slug:string,
  type:string
}

const TagsCard = memo((props:TagCardProps) => {
  return (
    <Fragment>
      <Link href="/view-all" className="iq-tag-box">
        <span className="iq-tag">{props.title}</span>
      </Link>
    </Fragment>
  );
});

TagsCard.displayName = "TagsCard";
export default TagsCard;
