import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen } from 'lucide-react';

export default function ProductCard({ image, name, size, description }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-muted flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <PackageOpen className="h-16 w-16 text-muted-foreground/30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-card-foreground">{name}</h3>
          <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold bg-secondary/20 text-secondary-foreground rounded-full">
            {size}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );
}