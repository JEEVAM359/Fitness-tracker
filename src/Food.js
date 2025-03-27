import React from 'react';

const Fitness = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Fitness & Nutrition for Different Age Groups</h1>
      <p>Staying active and eating well are essential at every stage of life. Different age groups require specific fitness routines and nutrition to stay healthy.</p>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        
        {/* ✅ Kids Fitness & Nutrition Section */}
        <div style={{ textAlign: "center", maxWidth: "400px" }} className="foo">
          <img src="kids.jpg" alt="Kids Fitness" style={{width:"200px",paddingTop:"30px"}}/>
          <h3>Fitness for Kids (5-12 years)</h3>
          <p>✅ Play-based Activities - Running, jumping, and cycling improve coordination.</p>
          <p>✅ Sports - Soccer, basketball, and swimming build teamwork and endurance.</p>
          <h3>Nutrition</h3>
          <p>🍎 Apple (95 kcal, 0.3g protein, 0.2g fat)</p>
          <p>🥚 Boiled Egg (68 kcal, 6g protein, 5g fat)</p>
          <p>🥛 Milk (103 kcal, 8g protein, 2.4g fat per cup)</p>
        </div>

        {/* ✅ Teenagers Fitness & Nutrition Section */}
        <div style={{ textAlign: "center", maxWidth: "400px" }} className="foo">
          <img src="teen.jpg" alt="Teen Fitness" style={{width:"200px",paddingTop:"30px"}}/>
          <h3>Fitness for Teenagers (13-19 years)</h3>
          <p>✅ Cardio - Running, cycling, or swimming improves endurance.</p>
          <p>✅ Strength Training - Bodyweight exercises and light weights build muscle.</p>
          <h3>Nutrition</h3>
          <p>🍗 Grilled Chicken (165 kcal, 31g protein, 3.6g fat per 100g)</p>
          <p>🍚 Brown Rice (111 kcal, 2.6g protein, 0.9g fat per 100g)</p>
          <p>🍌 Banana (89 kcal, 1.1g protein, 0.3g fat)</p>
        </div>

        {/* ✅ Adults Fitness & Nutrition Section */}
        <div style={{ textAlign: "center", maxWidth: "400px"}} className="foo">
          <img src="adult.jpg" alt="Adult Fitness" style={{width:"200px",paddingTop:"30px"}} />
          <h3>Fitness for Adults (20-50 years)</h3>
          <p>✅ Strength Training - Builds muscle mass and bone density.</p>
          <p>✅ High-Intensity Workouts - Helps with fat loss and stamina.</p>
          <h3>Nutrition</h3>
          <p>🥩 Salmon (208 kcal, 20g protein, 13g fat per 100g)</p>
          <p>🥑 Avocado (160 kcal, 2g protein, 15g fat per 100g)</p>
          <p>🥦 Broccoli (55 kcal, 4.3g protein, 0.6g fat per 100g)</p>
        </div>

        {/* ✅ Seniors Fitness & Nutrition Section */}
        <div style={{ textAlign: "center", maxWidth: "400px"}} className="foo">
          <img src="senior.jpg" alt="Senior Fitness" style={{width:"200px",paddingTop:"30px"}} />
          <h3>Fitness for Seniors (50+ years)</h3>
          <p>✅ Low-Impact Cardio - Walking, swimming, or cycling for joint health.</p>
          <p>✅ Strength Training - Light weights to maintain muscle strength.</p>
          <h3>Nutrition</h3>
          <p>🥣 Oatmeal (154 kcal, 6g protein, 3.2g fat per cup)</p>
          <p>🧀 Cottage Cheese (98 kcal, 11g protein, 4.3g fat per 100g)</p>
          <p>🍠 Sweet Potato (86 kcal, 1.6g protein, 0.1g fat per 100g)</p>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
