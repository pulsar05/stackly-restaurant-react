import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const foods = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Biryani",
    price: 249,
    description:
      "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 2,
    name: "Paneer Tikka",
    category: "Starters",
    price: 199,
    description:
      "Soft paneer cubes marinated with spices and grilled to perfection.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    name: "Butter Chicken",
    category: "Main Course",
    price: 299,
    description:
      "Creamy tomato gravy with juicy chicken and Indian spices.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 4,
    name: "Masala Dosa",
    category: "South Indian",
    price: 129,
    description:
      "Crispy dosa served with spicy potato masala and chutneys.",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 5,
    name: "Mutton Curry",
    category: "Main Course",
    price: 349,
    description:
      "Slow-cooked mutton with a rich blend of traditional spices.",
    image:
      "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 6,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 99,
    description:
      "Soft golden dumplings soaked in delicious sugar syrup.",
    image:
      "https://images.unsplash.com/photo-1666190094762-9e7e9b2f3e8e?auto=format&fit=crop&w=800&q=80",
  },
];

function Menu() {

  const [searchParams, setSearchParams] =
    useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const category =
    searchParams.get("category") || "All";

  const handleSearch = (value) => {

    setSearch(value);

    setSearchParams({
      search: value,
      category,
    });
  };

  const handleCategory = (value) => {

    setSearchParams({
      search,
      category: value,
    });
  };

  const filteredFoods = foods.filter((food) => {

    const searchMatch =
      food.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      food.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <section className="menu-page">

      <div className="section-title">

        <span>OUR MENU</span>

        <h1>
          Delicious Moments
        </h1>

        <p>
          Discover our carefully prepared signature dishes.
        </p>

      </div>


      <div className="menu-controls">

        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) =>
            handleSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            handleCategory(e.target.value)
          }
        >
          <option>All</option>
          <option>Biryani</option>
          <option>Starters</option>
          <option>Main Course</option>
          <option>South Indian</option>
          <option>Dessert</option>
        </select>

      </div>


      <div className="food-grid">

        {filteredFoods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}

      </div>


      {filteredFoods.length === 0 && (
        <div className="empty">
          No food found 😔
        </div>
      )}

    </section>
  );
}

export default Menu;