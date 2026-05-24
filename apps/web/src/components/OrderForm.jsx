import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const orderSchema = z.object({
  company_name: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  product_type: z.string().min(1, 'Please select a product type'),
  order_quantity: z.number().min(1, 'Quantity must be at least 1'),
  special_message: z.string().optional()
});

function OrderForm({ onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [products, setProducts] = useState([]);

  const form = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      company_name: '',
      email: '',
      phone: '',
      product_type: '',
      order_quantity: 1,
      special_message: ''
    }
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const records = await pb.collection('products').getFullList({ $autoCancel: false });
        setProducts(records);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const record = await pb.collection('orders').create(data, { $autoCancel: false });
      toast.success('Order submitted successfully');
      form.reset();
      if (onSuccess) {
        onSuccess(record);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error('Failed to submit order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your company name" 
                  {...field}
                  className="text-foreground placeholder:text-muted-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="your.email@company.com" 
                  {...field}
                  className="text-foreground placeholder:text-muted-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input 
                  type="tel" 
                  placeholder="+62 123 4567 890" 
                  {...field}
                  className="text-foreground placeholder:text-muted-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="product_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Type</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="text-foreground">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.name}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="order_quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order Quantity</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  min="1" 
                  placeholder="Enter quantity"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                  className="text-foreground placeholder:text-muted-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="special_message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Message (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Any special requirements or questions?"
                  rows={4}
                  {...field}
                  className="text-foreground placeholder:text-muted-foreground resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full transition-all duration-200 active:scale-[0.98]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting Order...
            </>
          ) : (
            'Submit Order'
          )}
        </Button>
      </form>
    </Form>
  );
}

export default OrderForm;