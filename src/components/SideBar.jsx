import React from "react";
import { Stack } from "@mui/material";
import { PrimaryColor, categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md:"column"},
      maxWidth:'100%',
    }}
    className="sideBar_stack"
  >
    {categories.map((category) => (
      <>
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && `${PrimaryColor}`,
            color: "black",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : `${PrimaryColor}`,
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? "1" : "0.8", color: category.name === selectedCategory ? "white" : "black"}}
          >
            {category.name}
          </span>
        </button>
        <div style={{color: "white", backgroundColor: "gray", height: "2px", paddingto:"1px", overflow:"hidden"}}></div>
      </>
      
    ))}
  </Stack>
);

export default Categories;
