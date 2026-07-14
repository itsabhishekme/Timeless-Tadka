import { Search } from "lucide-react";

export const metadata = {
  title: "Search Recipes",
  description:
    "Search authentic Indian recipes, spices, traditions, festivals, and regional cuisines.",
};

const popularSearches = [
  "Butter Chicken",
  "Biryani",
  "Masala Dosa",
  "Paneer Butter Masala",
  "Dal Tadka",
  "Gulab Jamun",
  "Samosa",
  "Pav Bhaji",
  "Chole Bhature",
  "Rasgulla",
];

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Street Food",
  "Festival Food",
  "Sweets",
  "Pickles",
  "Spices",
  "Regional Cuisine",
];

export default function SearchPage() {
  return (
    <section className="min-h-screen bg-amber-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Timeless Tadka
          </p>

          <h1 className="mt-3 text-5xl font-bold text-gray-900">
            Search Recipes
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Discover authentic Indian homemade recipes, traditional spices,
            forgotten village dishes, festival foods, and timeless culinary
            traditions.
          </p>
        </div>

        {/* Search Box */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="flex items-center rounded-full border border-orange-200 bg-white px-6 py-4 shadow-lg">
            <Search className="mr-3 h-6 w-6 text-orange-500" />

            <input
              type="text"
              placeholder="Search recipes, spices, cuisines..."
              className="w-full bg-transparent text-lg outline-none"
            />

            <button className="rounded-full bg-orange-600 px-8 py-3 font-semibold text-white transition hover:bg-orange-700">
              Search
            </button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Popular Searches
          </h2>

          <div className="flex flex-wrap gap-3">
            {popularSearches.map((item) => (
              <button
                key={item}
                className="rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-orange-600 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Browse Categories
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        <div className="rounded-3xl bg-white p-12 text-center shadow-lg">
          <Search className="mx-auto mb-5 h-14 w-14 text-orange-500" />

          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Start Exploring
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600">
            Search for authentic Indian recipes, homemade spice blends,
            regional cuisines, traditional cooking techniques, festival dishes,
            and timeless family recipes from every corner of India.
          </p>
        </div>
      </div>
    </section>
  );
}