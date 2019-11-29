import { useRef, useEffect } from "react";

interface PropsInterface {
  [props: string]: any;
}

function usePreviousProps(props: PropsInterface) {
  const ref = useRef(props);
  useEffect(() => {
    ref.current = props;
  });
  return ref.current;
}

export default usePreviousProps;
