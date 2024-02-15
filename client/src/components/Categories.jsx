import React from "react";
import Categorie from "./Categorie";

const Categories = () => {
  return (
    <>
      <section className="p-2" id="categories">
        <header className="bg-gray-900 text-white py-4 px-4  mb-2">
          <div className="container  flex justify-center">
            <h1 className="  md:text-xl lg:text-3xl  font-bold">
              Product Categories
            </h1>
          </div>
        </header>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 ">
          <Categorie
            name="Clothes"
            image="https://images.unsplash.com/photo-1524275539700-cf51138f679b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8fDB8fHww"
          />
          <Categorie
            name="Shoes"
            image="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Categorie
            name="Electronics"
            image="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D"
          />

          <Categorie
            name="Books"
            image="https://images.unsplash.com/photo-1593306984293-c961c4c0feb8?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Categorie
            name="Furniture"
            image="https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Categorie
            name="Others"
            image="https://images.unsplash.com/photo-1564023162242-91b863c6dcd4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFyaW91cyUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
          />
        </div>
      </section>
    </>
  );
};

export default Categories;
