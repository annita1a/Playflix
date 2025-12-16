import { Fragment, memo } from "react";

// Next-Link
import Link from "next/link";

interface GenersCardProps{
  image?:any
  title?:string
  slug?:string
  type?:string
  url?:string
}

const GenersCard = memo((props:GenersCardProps) => {
  return (
    <Fragment>
  <div className="iq-card-geners position-relative card-hover-style-two">
        <div className="img-box position-relative">
          <Link href={props.url ?? '#'}>
            <img src={props.image} alt="geners-img" className="img-fluid" />
            <h6 className="blog-description">{props.title}</h6>
          </Link>
        </div>
      </div>
    </Fragment>
  );
});

GenersCard.displayName = "GenersCard";
export default GenersCard;
