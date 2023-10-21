import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [variable, setVariable] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resData => {
        if (Array.isArray(resData)) {
          return setVariable(resData);
        }
        if (resData.data) {
          setVariable(resData.data);
        }
      });
  }, []);

  return variable;
}
