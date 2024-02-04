import React from "react";

import Categorie from "./Categorie";

const Categories = () => {
  return (
    <section className="p-8" id="categories">
      <div className="grid gap-2 md:grid-cols-3 mb-2">
        <Categorie
          name="Clothes"
          image="https://api.lorem.space/image/fashion?w=640&h=480&r=3529"
        />
        <Categorie
          name="Shoes"
          image="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Categorie
          name="Electronics"
          image="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <Categorie
          name="Furniture"
          image="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Categorie
          name="Others"
          image="https://api.lorem.space/image?w=640&h=480&r=1848"
        />
      </div>
    </section>
  );
};

export default Categories;
