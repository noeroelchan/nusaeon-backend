import React from 'react';
import { Button } from '@/components/ui/button';

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Button
        variant={activeCategory === 'All' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('All')}
        className="transition-all duration-200 active:scale-[0.98]"
      >
        All Products
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category)}
          className="transition-all duration-200 active:scale-[0.98]"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default CategoryFilter;