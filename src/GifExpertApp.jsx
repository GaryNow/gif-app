import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Perú']);

  const onAddCategory = (newCategory) => {
    if( categories.includes(newCategory) ) return;
    if (!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return;

    setCategories([newCategory,...categories])
    // setCategories(cat => [...cat, 'Valorant'])
  }

  return (
    <>
      {/* Titulo */}
      <h1>Gif App</h1>
      <p>Busca el gif que quieras!</p>
      {/* Input */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={value => onAddCategory(value)}
      />
      
      {/* Listado de GIF */}
    
      {
        categories.map(category => <GifGrid key={category} category={category} />)
      }
    
      {/* Gif item */}
    </>
  )
}
