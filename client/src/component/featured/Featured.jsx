import { Category, InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf3awSQJqVY2Hz2V0GNYGqMmY_ZQrsCDXt0MwWbIB5Uz8kHeTp-IhMrcuAQXNVG4c08GLGBLPsk5jQliTeUVoPxWbz_j53Uu0kIn.jpg?r=9cb"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeNw7JVmc_we3KqCvaQVHyp8cu3gu5iHLjHzjZpG5CnQOdumax5NpXqet7ik8EWaWHPH_tOB3bx8l57nVsVuOwxMRQoP1hJ6NRWZmNekUFfNO2m3Ku8Al4epm8E6lBwBow4TzNR35dnR1mMRwvz3wqunh5IjS1rjucR5PBjIDFU01CLJ6h5dKg.png?r=024"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
