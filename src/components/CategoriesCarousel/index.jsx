import { useEffect, useState } from "react";
import { api } from '../../services/api';

export function CategoriesCarousel() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    async function loadCategories() {

      try {
        const response = await api.get("/categories");
        const { data } = response;

        setCategories(data);
        console.log("Categorias carregadas:", data);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);

      }
      
    }

    loadCategories();
  }, []);

  return (
    <div>
      <h1>Categories Carousel</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
