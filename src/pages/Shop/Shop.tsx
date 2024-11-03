import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight, FaStar } from "react-icons/fa";

const Shop: React.FC = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(true);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState<boolean>(true);
  const [isRatingOpen, setIsRatingOpen] = useState<boolean>(true);
  const [isTagsOpen, setIsTagsOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const uniqueCategories = ["Dry Fruits", "Nuts", "Snacks", "Spices"];
  const popularTags = ["Organic", "Sale", "New Arrival", "Bestseller", "Vegan"];
  const totalPages = 5;

  // Simulate data loading with a timeout
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay to simulate loading
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            {/* Category Filter */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer transition-all duration-300"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <h4 className="text-lg font-semibold">Categories</h4>
                {isCategoryOpen ? <FaChevronDown /> : <FaChevronRight />}
              </div>
              {isCategoryOpen && (
                <ul className="mt-2 space-y-2 transition-all duration-300">
                  {uniqueCategories.map((category) => (
                    <li key={category}>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          className="mr-2"
                        />
                        <span className="text-gray-700">{category}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer transition-all duration-300"
                onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}
              >
                <h4 className="text-lg font-semibold">Price Range</h4>
                {isPriceRangeOpen ? <FaChevronDown /> : <FaChevronRight />}
              </div>
              {isPriceRangeOpen && (
                <div className="mt-2 transition-all duration-300">
                  <input
                    type="range"
                    min={10}
                    max={150}
                    className="w-full mt-2"
                  />
                  <p className="mt-2 text-gray-600">Price: $10 - $150</p>
                </div>
              )}
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer transition-all duration-300"
                onClick={() => setIsRatingOpen(!isRatingOpen)}
              >
                <h4 className="text-lg font-semibold">Rating</h4>
                {isRatingOpen ? <FaChevronDown /> : <FaChevronRight />}
              </div>
              {isRatingOpen && (
                <ul className="mt-2 space-y-2 transition-all duration-300">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <li key={star}>
                      <label className="inline-flex items-center cursor-pointer">
                        <span className="flex items-center">
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className={`h-5 w-5 ${
                                index < star
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2">{star}.0 & Up</span>
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Popular Tags Section */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer transition-all duration-300"
                onClick={() => setIsTagsOpen(!isTagsOpen)}
              >
                <h4 className="text-lg font-semibold">Popular Tags</h4>
                {isTagsOpen ? <FaChevronDown /> : <FaChevronRight />}
              </div>
              {isTagsOpen && (
                <div className="mt-2 space-y-2 transition-all duration-300">
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors duration-300"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <select className="border rounded-lg p-2 text-gray-600">
              <option value="latest">Sort by: Latest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading
              ? [...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-40 bg-gray-200 rounded-md mb-4 skeleton"></div>
                    <div className="h-6 bg-gray-200 rounded-md mb-2 skeleton"></div>
                    <div className="h-4 bg-gray-200 rounded-md skeleton"></div>
                  </div>
                ))
              : [...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                    <h4 className="text-lg font-semibold mb-2">
                      Product {index + 1}
                    </h4>
                    <p className="text-gray-600 mb-4">$50</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center items-center space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg border ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                } hover:bg-blue-600 hover:text-white transition-colors duration-300`}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`px-4 py-2 rounded-lg border bg-white text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
