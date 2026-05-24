import React from 'react';
import { motion } from 'framer-motion';

export default function BenefitIcon({ icon: Icon, title, description, layout = "horizontal" }) {
  if (layout === "vertical") {
    return (
      <motion.div 
        whileHover={{ y: -4 }}
        className="flex flex-col items-center text-center p-6 glass-card rounded-2xl transition-all duration-300"
      >
        <div className="h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5 text-secondary">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        {description && (
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <div className="flex items-start gap-4 group">
      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h4 className="text-base font-bold text-foreground mb-1">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}