import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tagValue) => {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState("");

  const fetchData = async (tagValue) => {
    setLoading(true);

    const { data } = await axios.get(tagValue ? `${url}&tag=${tagValue}` : url);
    setGif(data.data.images.original.url);
    // console.log(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(tagValue);

  return { loading, gif, fetchData };
};

export default useGif;
