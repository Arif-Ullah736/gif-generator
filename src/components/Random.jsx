import "./Random.css";
import useGif from "../hooks/useGif";
import Loader from "./Loader";

const Random = () => {
  const { loading, fetchData, gif } = useGif();
  const clickHandler = () => {
    // setGi()
    fetchData();
  };
  return (
    <div className="random">
      <div className="title">
        <p>A RANDOM GIF </p>
      </div>
      {!loading ? (
        <div className="image">
          <img src={gif} />
        </div>
      ) : (
        <Loader />
      )}

      <div className="button">
        <button onClick={clickHandler}>Generate</button>
      </div>
    </div>
  );
};

export default Random;
