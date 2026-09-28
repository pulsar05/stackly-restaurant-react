import { useState } from "react";

function Admin() {

  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Chicken Biryani",
      price: 249,
    },
    {
      id: 2,
      name: "Paneer Tikka",
      price: 199,
    },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addFood = () => {

    if (!name || !price) return;

    const newFood = {
      id: Date.now(),
      name,
      price,
    };

    setFoods([
      ...foods,
      newFood,
    ]);

    setName("");
    setPrice("");
  };

  const deleteFood = (id) => {

    setFoods(
      foods.filter(
        (food) => food.id !== id
      )
    );

  };

  return (
    <section className="admin-page">

      <div className="section-title">

        <span>ADMIN PANEL</span>

        <h1>
          Menu Management
        </h1>

      </div>

      <div className="admin-form">

        <input
          placeholder="Food Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <button
          onClick={addFood}
          className="primary-btn"
        >
          Add Food
        </button>

      </div>

      <div className="admin-list">

        {foods.map((food) => (

          <div
            className="admin-item"
            key={food.id}
          >

            <div>
              <h3>{food.name}</h3>
              <p>₹{food.price}</p>
            </div>

            <button
              onClick={() =>
                deleteFood(food.id)
              }
              className="delete-btn"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Admin;