import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

export default function CatalogCard({ catalog }) {
  const imageUrl = catalog.image ? pb.files.getUrl(catalog, catalog.image) : null;

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-square relative overflow-hidden bg-muted flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={catalog.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <PackageOpen className="h-16 w-16 text-muted-foreground/30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-card-foreground mb-3">{catalog.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
          {catalog.description || 'No description available.'}
        </p>
      </div>
    </motion.div>
  );
}