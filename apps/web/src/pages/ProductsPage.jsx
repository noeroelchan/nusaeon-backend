import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { RefreshCcw, PackageOpen } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CatalogCard from '@/components/CatalogCard.jsx';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

function ProductsPage() {
  const [catalogs, setCatalogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCatalogs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const records = await pb.collection('catalogs').getFullList({ 
        sort: '-created',
        $autoCancel: false 
      });
      setCatalogs(records);
    } catch (err) {
      console.error('Error fetching catalogs:', err);
      setError('Failed to load catalog items. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatalogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Products & Catalogs - NUSAEON Sustainable Packaging</title>
        <meta name="description" content="Browse our complete catalog of eco-friendly cassava-based packaging solutions. Explore our product options at www.nusaeon.co.id" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 pt-32 lg:pt-40 bg-muted min-h-screen">
            <div className="container-custom mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-black mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  Product Catalogs
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Discover our complete range of sustainable, bio-based packaging solutions designed to replace conventional plastics.
                </p>
              </motion.div>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex flex-col gap-4 p-4 border border-border rounded-2xl bg-card">
                      <Skeleton className="aspect-square rounded-xl w-full" />
                      <Skeleton className="h-6 w-3/4 mt-2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-20">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-6">
                    <RefreshCcw className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{error}</h3>
                  <Button onClick={fetchCatalogs} variant="outline" className="mt-4 font-semibold">
                    Try Again
                  </Button>
                </div>
              ) : catalogs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {catalogs.map((catalog, index) => (
                    <motion.div
                      key={catalog.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CatalogCard catalog={catalog} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-card rounded-2xl border border-dashed border-border shadow-sm">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
                    <PackageOpen className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">No catalogs found</h3>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    We are currently updating our product catalogs. Please check back later.
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProductsPage;