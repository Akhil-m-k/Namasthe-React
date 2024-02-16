import {IMG_Restauro_Card} from "../config";

const Restaurant = ({name,cuisines,avgRating,cloudinaryImageId,id})=>{
    return (
      <div className="card" key={id}>
          <img src={`${IMG_Restauro_Card + cloudinaryImageId}`}  alt="" />
          <h2 className="returant-name">{name}</h2>
          <h3 className="cuisines">{cuisines.join(',')}</h3>
          <h4 className="rating">{avgRating}stars</h4>
      </div>
    )
  }

export default Restaurant;