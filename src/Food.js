import React from 'react';

const Food = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Healthy Foods</h1>
      <p>Eating a balanced diet rich in nutrients helps maintain overall health and well-being.</p>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        
        {/* ✅ Healthy Food Section */}
        <div style={{ textAlign: "center", maxWidth: "400px" }} className="foo">
          <img src="healthy.jpg" alt="Healthy Food" style={{width:"200px",paddingTop:"30px"}}/>
          <h3>Nutritious Meals</h3>
            <p>A well-balanced meal contains protein, healthy fats, and essential vitamins to keep your body strong.</p>
            <p>✅ Protein - Supports muscle growth and repair (e.g., lean meats, fish, beans).</p>
            <p>✅ Healthy Fats - Essential for brain function and energy (e.g., nuts, avocados, olive oil).</p>
            <p>✅ Vitamins & Minerals - Boost immunity and overall health (e.g., fruits, vegetables).</p>
            <p>✅ Fiber - Aids digestion and keeps you full (e.g., whole grains, legumes).</p>
            <p>✅ Hydration - Essential for metabolism and energy (e.g., water, herbal teas).</p>
        </div>

        {/* ✅ Fruits Section */}
        <div style={{ textAlign: "center", maxWidth: "400px" }} className="foo">
          <img src="fruit.jpg" alt="Fruits"  style={{width:"200px",paddingTop:"30px"}}/>
          <h3>Fruits</h3>
            <p>Fruits are packed with vitamins, fiber, and antioxidants that boost immunity and support digestion.</p>
            <p>✅ Rich in Vitamins - Provide essential nutrients like Vitamin C and A.</p>
            <p>✅ High in Fiber - Supports digestion and gut health.</p>
            <p>✅ Loaded with Antioxidants - Protects against cell damage and boosts immunity.</p>
            <p>✅ Natural Energy Source - Contains natural sugars for a quick energy boost.</p>
            <p>✅ Hydrating - High water content helps maintain hydration.</p>


        </div>

        {/* ✅ Vegetables Section */}
        <div style={{ textAlign: "center", maxWidth: "400px"}} className="foo">
          <img src="food.jpg" alt="Vegetables" style={{width:"200px",paddingTop:"30px"}} />
          <h3>Vegetables</h3>
          <p>Vegetables provide essential nutrients, fiber, and minerals that promote heart and gut health.</p>
          <p>✅ Nutrient-Dense - Packed with vitamins, minerals, and antioxidants.</p>
<p>✅ High in Fiber - Supports digestion and promotes gut health.</p>
<p>✅ Heart-Healthy - Helps lower cholesterol and regulate blood pressure.</p>
<p>✅ Low in Calories - Ideal for weight management and overall health.</p>
<p>✅ Boosts Immunity - Strengthens the immune system with essential nutrients.</p>

        </div>

      </div>
    </div>
  );
};

export default Food;
