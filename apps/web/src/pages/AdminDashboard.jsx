import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Upload, Trash2, Plus, Loader2, Image as ImageIcon } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function AdminDashboard() {
  const [catalogs, setCatalogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(null);

  // Form states
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const fetchCatalogs = async () => {
    setIsLoading(true);
    try {
      const records = await pb.collection('catalogs').getFullList({
        sort: '-created',
        $autoCancel: false
      });
      setCatalogs(records);
    } catch (error) {
      console.error('Failed to fetch catalogs:', error);
      toast.error('Failed to load catalogs');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatalogs();
  }, []);

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Catalog name is required');
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (description) formData.append('description', description);
      if (imageFile) formData.append('image', imageFile);

      await pb.collection('catalogs').create(formData, { $autoCancel: false });
      
      toast.success('Catalog uploaded successfully');
      
      // Reset form
      setName('');
      setDescription('');
      setImageFile(null);
      const fileInput = document.getElementById('image-upload');
      if (fileInput) fileInput.value = '';

      // Refresh list
      fetchCatalogs();
    } catch (error) {
      console.error('Failed to upload catalog:', error);
      toast.error(error.message || 'Failed to upload catalog');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this catalog?')) return;
    
    setIsDeleting(id);
    try {
      await pb.collection('catalogs').delete(id, { $autoCancel: false });
      toast.success('Catalog deleted');
      setCatalogs(catalogs.filter(c => c.id !== id));
    } catch (error) {
      console.error('Failed to delete catalog:', error);
      toast.error('Failed to delete catalog');
    } finally {
      setIsDeleting(null);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - NUSAEON</title>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-muted">
        <Header />

        <main className="flex-1 container-custom mx-auto py-32">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage your catalog items and site content.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Upload Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-32 border-border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5 text-primary" />
                    New Catalog Item
                  </CardTitle>
                  <CardDescription>Upload a new catalog product or brochure.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUploadSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Item Name <span className="text-destructive">*</span></Label>
                      <Input 
                        id="name"
                        placeholder="e.g., Biodegradable Cup 500ml" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isSubmitting}
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description"
                        placeholder="Detailed description of the product..." 
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        disabled={isSubmitting}
                        className="bg-background resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image-upload">Thumbnail Image</Label>
                      <div className="border-2 border-dashed border-border rounded-xl p-6 text-center bg-background hover:bg-muted/50 transition-colors">
                        <Input 
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => setImageFile(e.target.files[0])}
                          disabled={isSubmitting}
                        />
                        <Label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Upload className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-primary hover:underline">Click to browse</span>
                          {imageFile && (
                            <span className="text-xs text-muted-foreground mt-2 bg-muted px-2 py-1 rounded">
                              Selected: {imageFile.name}
                            </span>
                          )}
                        </Label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        'Save Catalog Item'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Catalog List */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-md">
                <CardHeader>
                  <CardTitle>Catalog Items</CardTitle>
                  <CardDescription>All items currently visible on the Products page.</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-4 p-4 border border-border rounded-xl">
                          <Skeleton className="h-16 w-16 rounded-lg" />
                          <div className="space-y-2 flex-1">
                            <Skeleton className="h-5 w-1/3" />
                            <Skeleton className="h-4 w-1/2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : catalogs.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-border rounded-xl">
                      <div className="h-16 w-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">No catalogs yet</h3>
                      <p className="text-sm text-muted-foreground max-w-sm mx-auto mt-2">
                        Upload your first catalog item using the form to see it appear here and on the public site.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      {catalogs.map((catalog) => (
                        <motion.div 
                          key={catalog.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-6 p-4 border border-border rounded-xl bg-background hover:shadow-sm transition-shadow"
                        >
                          <div className="h-20 w-20 rounded-lg overflow-hidden bg-muted flex-shrink-0 flex items-center justify-center border border-border">
                            {catalog.image ? (
                              <img 
                                src={pb.files.getUrl(catalog, catalog.image, { thumb: '100x100' })} 
                                alt={catalog.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <ImageIcon className="h-6 w-6 text-muted-foreground/40" />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base font-bold text-foreground truncate">{catalog.name}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                              {catalog.description || 'No description'}
                            </p>
                          </div>

                          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2">
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleDelete(catalog.id)}
                              disabled={isDeleting === catalog.id}
                              className="font-semibold"
                            >
                              {isDeleting === catalog.id ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <>
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </>
                              )}
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}