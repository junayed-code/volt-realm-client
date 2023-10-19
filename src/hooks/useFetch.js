import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [variable, setVariable] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setVariable(data));
  }, []);

  return variable;
}
