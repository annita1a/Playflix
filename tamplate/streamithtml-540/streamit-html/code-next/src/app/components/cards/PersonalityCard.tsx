import { Fragment, memo } from "react";

//router
import Link from "next/link";
import { useTranslation } from 'react-i18next';

interface Props {
  image: string,
  title: string,
  category: string
  categoryLink?: string
  link : string
}

const PersonalityCard = memo((props: Props) => {
  const { t } = useTranslation("common");
  // console.log(t(props.title))
  return (
 <Fragment>
      <img
        src={props.image}
        alt="personality"
        className="img-fluid object-cover mb-3 rounded-3 personality-img"
      />
      <div className="text-center">
        <h6 className="mb-0">
          <Link
            href={props.link}
            className="font-size-14 text-decoration-none cast-title text-capitalize"
          >
            {t(props.title)}
          </Link>
        </h6>
        <Link
          href={props.link}
          className="font-size-12 fw-semibold text-decoration-none text-capitalize text-body"
        >
          {t(props.category)}
        </Link>
      </div>
    </Fragment>
  );
});

PersonalityCard.displayName = "PersonalityCard";
export default PersonalityCard;
