const { useState, useEffect } = require("react");

const useTshirt = () => {
  const [tShirts, setTshirts] = useState([]);

  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => setTshirts(data));
  }, []);

  return [tShirts, setTshirts];
};

export default useTshirt;
