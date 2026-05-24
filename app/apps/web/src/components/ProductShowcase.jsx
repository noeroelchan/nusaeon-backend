import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, RefreshCcw, PackageOpen, Image as ImageIcon } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function ProductShowcase() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Fetch up to 4 catalogs as featured products
      const result = await pb.collection('catalogs').getList(1, 4, {
        sort: '-created',
        $autoCancel: false
      });
      setProducts(result.items);
    } catch (err) {
      console.error('Error fetching featured products:', err);
      setError('Gagal memuat produk. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="flex flex-col h-full overflow-hidden border-border/50 shadow-sm">
            <Skeleton className="h-56 w-full rounded-none" />
            <CardContent className="p-6 flex-1 flex flex-col">
              <Skeleton className="h-6 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
              <Skeleton className="h-10 w-full sm:flex-1 rounded-md" />
              <Skeleton className="h-10 w-full sm:flex-1 rounded-md" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 bg-muted/30 rounded-2xl border border-border">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-6">
          <RefreshCcw className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{error}</h3>
        <Button onClick={fetchProducts} variant="outline" className="mt-2 font-semibold">
          Coba Lagi
        </Button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-muted/30 rounded-2xl border border-dashed border-border">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
          <PackageOpen className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Belum ada produk</h3>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Katalog produk sedang dalam pembaruan. Silakan periksa kembali nanti.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map((product, index) => {
        const imageUrl = product.image
          ? pb.files.getUrl(product, product.image, { thumb: '400x400' })
          : null;
        
        const whatsappMessage = `Halo NUSAEON, saya tertarik untuk mengetahui lebih lanjut tentang produk ${product.name}.`;

        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex h-full"
          >
            <Card className="flex flex-col h-full w-full overflow-hidden border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group bg-card">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/30">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                    <ImageIcon className="h-12 w-12 mb-2 opacity-50" />
                    <span className="text-sm font-medium">No Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 leading-snug">
                  {product.name}
                </h3>
                {product.description && (
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                )}
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-3 mt-auto">
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full sm:flex-1 font-semibold border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <Link to="/products">
                    Lihat Detail
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="w-full sm:flex-1 btn-whatsapp font-bold transition-all"
                >
                  <a 
                    href={`https://wa.me/628111477006?text=${encodeURIComponent(whatsappMessage)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}