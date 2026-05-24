import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

function SuccessMessage({ order }) {
  return (
    <Card className="border-2 border-primary/20 bg-primary/5">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-balance">Order Submitted Successfully</h3>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Thank you for your order. We have received your request and will contact you shortly at{' '}
          <span className="font-medium text-foreground">{order?.email}</span>.
        </p>
        <div className="bg-muted rounded-xl p-6 text-left">
          <p className="text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-3">
            Order Details
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Company:</span>
              <span className="font-medium">{order?.company_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Product:</span>
              <span className="font-medium">{order?.product_type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Quantity:</span>
              <span className="font-medium">{order?.order_quantity}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SuccessMessage;