import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const foods = [
  {
    id: "1",
    name: "Chicken Biryani",
    price: 249,
    category: "Biryani",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=1000&q=80",
    description:
      "Our signature Chicken Biryani is prepared with fragrant basmati rice, tender chicken, caramelized onions, mint and traditional Indian spices.",
  },

  {
    id: "2",
    name: "Paneer Tikka",
    price: 199,
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1000&q=80",
    description:
      "Fresh paneer marinated in yogurt and aromatic spices, then grilled for a smoky flavor.",
  },
];

function MenuDetails() {

  const { id } = useParams();

  const dispatch = useDispatch();

  const food = foods.find(
    (item) => item.id === id
  );

  if (!food) {
    return (
      <section className="page">
        <h1>Food not found</h1>
      </section>
    );
  }

  return (
    <section className="details">

      <img
        src={food.image}
        alt={food.name}
      />

      <div className="details-content">

        <span>{food.category}</span>

        <h1>{food.name}</h1>

        <p>
          {food.description}
        </p>

        <h2>₹{food.price}</h2>

        <button
          className="primary-btn"
          onClick={() =>
            dispatch(addToCart(food))
          }
        >
          Add To Cart
        </button>

      </div>

    </section>
  );
}

export default MenuDetails;