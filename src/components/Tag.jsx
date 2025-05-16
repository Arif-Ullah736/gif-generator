import "./Tag.css";
import useGif from "../hooks/useGif";
import Loader from "./Loader";
import { useState } from "react";

// const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  const [tagValue, setTagValue] = useState("car");
  const { loading, gif, fetchData } = useGif(tagValue);

  // const fetchData = async () => {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tagValue}`;
  //   const { data } = await axios.get(url);
  //   // console.log(data);
  //   setGif(data.data.images.original.url);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const clickHandler = () => {
    // setGi()
    fetchData();
  };

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setTagValue(e.target.value);
  };
  // console.log(tagValue);

  return (
    <div className="tag">
      <div className="title">
        <p>
          {" "}
          <b> RANDOM {tagValue} GIF</b>
        </p>
      </div>
      {!loading ? (
        <div className="image">
          <img src={gif} />
        </div>
      ) : (
        <Loader />
      )}

      <div className="btn-search">
        <input type="text" onChange={changeHandler} value={tagValue} />
        <button onClick={clickHandler}>Generate</button>
      </div>
    </div>
  );
};

export default Tag;
