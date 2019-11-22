import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";

const PlaceHolderImage = dynamic(
  () => import("../../../assets/svg/placeHolderImage.svg"),
  { ssr: false }
);

let SvgIcon;

function LazyLoadSvg({ icon, className, handleClick }: DataProps): JSX.Element {
  const [iconLoaded, setSvg] = useState<boolean>(false);

  if (!iconLoaded) {
    SvgIcon = PlaceHolderImage;
  }

  useEffect(() => {
    let unmount = false;

    const fetchSvg = async () => {
      try {
        const result: SvgProps = dynamic(
          () => import(`../../../assets/svg/${icon}.svg`),
          { ssr: false }
        );
        SvgIcon = result.default;
        if (!unmount) {
          setSvg(true);
        }
      } catch (error) {
        SvgIcon = PlaceHolderImage;
        debugger; // eslint-disable-line
      }
    };
    fetchSvg();
    return () => {
      unmount = true;
      setSvg(false);
    };
  }, [icon, className]);

  return <SvgIcon className={className} onClick={handleClick} />;
}

interface SvgProps {
  default: string;
}

interface DataProps {
  icon: string;
  className?: string;
  handleClick?: Function;
}

LazyLoadSvg.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func
};

LazyLoadSvg.defaultProps = {
  className: "",
  handleClick: e => e
};

export default memo(LazyLoadSvg);
