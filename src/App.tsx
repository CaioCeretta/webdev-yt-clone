import CategoryPills from "./components/CategoryPills";
import { PageHeader } from "./layouts/PageHeader";

import { categories } from "./data/home";
import { useState } from "react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      {/* The overflow-auto in that div is used so that way the whole div can move but the whole page will remain still */}
      <div className="grid grid-cols-[auto, 1fr]
      flex-grow-1 overflow-auto">
        <div>SideBar</div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10k pb-4">
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
        </div>
      </div>
    </div>
  )
}