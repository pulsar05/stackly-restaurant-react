import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function FoodCard({ food }) {

  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart(food));
  };

  return (
    <div className="food-card">

      <div className="food-image">

        <img src={food.image} alt={food.name} />

        <div className="food-overlay">
          <span>{food.category}</span>
        </div>

      </div>

      <div className="food-content">

        <div>
          <h3>{food.name}</h3>

          <p>
            {food.description}
          </p>
        </div>

        <div className="food-bottom">

          <strong>
            ₹{food.price}
          </strong>

          <div className="food-buttons">

            <Link
              to={`/menu/${food.id}`}
              className="view-btn"
            >
              View
            </Link>

            <button
              onClick={handleCart}
              className="add-btn"
            >
              +
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default FoodCard;