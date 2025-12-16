"use client";
import { Fragment, memo } from "react";

// Next-Image
import Image from "next/image";

const Loader = memo(() => {
  console.log('Loader component rendering'); 
  return (
    <Fragment>
      <div
        className="loader simple-loader animate__animated animate__fadeIn"
        data-testid="loader-component"
        role="status"
      >
        <div className="loader-body">
          <Image
            src="/assets/images/loader.gif"
            alt="loader"
            className="img-fluid"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </Fragment>
  );
});

Loader.displayName = "Loader";
export default Loader;
