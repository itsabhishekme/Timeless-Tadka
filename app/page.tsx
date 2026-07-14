import Hero from "@/components/hero/Hero";
import RecipeCard from "@/components/recipe/RecipeCard";
import CategoryCard from "@/components/category/CategoryCard";
import SpiceCard from "@/components/spice/SpiceCard";
import FestivalCard from "@/components/festival/FestivalCard";

type FeaturedRecipe = {
  id: string;
  title: string;
  image: string;
  slug: string;
  category: string;
  time: string;
  region: string;
  cookingTime: string;
  difficulty: "Medium" | "Easy" | "Hard";
  servings: number;
  description: string;
};

export default function HomePage() {
  const featuredRecipes: FeaturedRecipe[] = [
    {
      id: "butter-chicken-1",
      title: "Butter Chicken",
      image: "/recipes/butter-chicken.jpg",
      slug: "butter-chicken",
      category: "North Indian",
      time: "45 Min",
      region: "Punjab",
      cookingTime: "45 Min",
      difficulty: "Medium",
      servings: 4,
      description: "Creamy tomato-based chicken curry.",
    },
    {
      id: "masala-dosa-1",
      title: "Masala Dosa",
      image: "/recipes/masala-dosa.jpg",
      slug: "masala-dosa",
      category: "South Indian",
      time: "35 Min",
      region: "Karnataka",
      cookingTime: "35 Min",
      difficulty: "Easy",
      servings: 2,
      description: "Crispy rice crepe stuffed with spiced potatoes.",
    },
    {
      id: "dal-baati-1",
      title: "Dal Baati Churma",
      image: "/recipes/dal-baati.jpg",
      slug: "dal-baati-churma",
      category: "Rajasthani",
      time: "60 Min",
      region: "Rajasthan",
      cookingTime: "60 Min",
      difficulty: "Hard",
      servings: 4,
      description: "Hearty dal served with baked wheat balls and sweet churma.",
    },
  ];

  const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Street Food",
    "Desserts",
    "Festival Special",
  ];

  const spices = [
    "Turmeric",
    "Cardamom",
    "Cumin",
    "Cloves",
    "Black Pepper",
    "Saffron",
  ];

  const festivals = [
    "Diwali",
    "Holi",
    "Navratri",
    "Onam",
    "Pongal",
    "Eid",
  ];

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Featured Traditional Recipes
          </h2>

          <p className="mt-4 text-gray-600">
            Discover India's most loved homemade recipes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              slug={recipe.slug}
              title={recipe.title}
              image={recipe.image}
              category={recipe.category}
              region={recipe.region}
              cookingTime={recipe.cookingTime}
              difficulty={recipe.difficulty}
              description={recipe.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-amber-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">
              Browse by Category
            </h2>

            <p className="mt-4 text-gray-600">
              Explore recipes by meal and cuisine.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <CategoryCard
                key={category}
                title={category} description={""} image={""} slug={""}              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Authentic Indian Spices
          </h2>

          <p className="mt-4 text-gray-600">
            The soul of Indian cooking begins with spices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {spices.map((spice) => (
            <SpiceCard
              key={spice}
              name={spice}
              description=""
              image=""
              slug={spice.toLowerCase().replace(/\s+/g, "-")} id={""} origin={""} benefits={[]}            />
          ))}
        </div>
      </section>

      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">
              Festival Special Recipes
            </h2>

            <p className="mt-4 text-gray-600">
              Celebrate every festival with authentic traditional dishes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {festivals.map((festival) => (
              <FestivalCard
                key={festival}
                title={festival} id={""} festival={""} description={""} image={""} slug={""}              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-5xl font-bold">
          Preserving India's Culinary Heritage
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Timeless Tadka is more than a recipe platform. It is a celebration
          of India's culinary traditions, forgotten family recipes, regional
          cuisines, authentic spices, and the stories passed from one
          generation to another.
        </p>
      </section>
    </>
  );
}