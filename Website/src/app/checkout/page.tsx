"use client";

import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend/Stripe
    console.log("Order submitted:", { ...formData, items, total });
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-stone-200">
          <CardContent className="pt-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Order Confirmed!</h2>
            <p className="text-stone-600 mb-6">
              Thanks for your order. We&apos;ll send you a confirmation email with tracking info.
            </p>
            <Link href="/shop">
              <Button className="bg-amber-700 hover:bg-amber-800">Continue Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-stone-200 text-center">
          <CardContent className="pt-8">
            <p className="text-stone-600 mb-4">Your cart is empty.</p>
            <Link href="/shop">
              <Button className="bg-amber-700 hover:bg-amber-800">Start Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Checkout</h1>
          <p className="text-stone-300">Complete your order.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info */}
              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input id="address" name="address" required value={formData.address} onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" name="city" required value={formData.city} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input id="state" name="state" required value={formData.state} onChange={handleChange} placeholder="e.g. Texas" />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code *</Label>
                      <Input id="zip" name="zip" required value={formData.zip} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="notes">Order Notes (optional)</Label>
                    <Textarea id="notes" name="notes" rows={3} value={formData.notes} onChange={handleChange} placeholder="Any special instructions?" />
                  </div>
                </CardContent>
              </Card>

              {/* Payment (placeholder) */}
              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle>Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-center">
                    <p className="text-stone-600 text-sm">
                      Payment processing will be integrated with Stripe in production.
                    </p>
                    <p className="text-stone-500 text-xs mt-1">
                      For now, orders will be processed as COD (Cash on Delivery).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-lg py-6">
                Place Order — ${total.toFixed(2)}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-stone-200 sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-3">
                    <div className="h-16 w-16 flex-shrink-0 rounded bg-stone-100 flex items-center justify-center">
                      <span className="text-2xl">
                        {item.name.includes("Hoodie") || item.name.includes("Zip") || item.name.includes("Crew")
                          ? "🧥"
                          : item.name.includes("Cap") || item.name.includes("Snapback")
                          ? "🧢"
                          : "👕"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-900 truncate">{item.name}</p>
                      <p className="text-xs text-stone-500">Size: {item.size} &bull; Qty: {item.quantity}</p>
                      <p className="text-sm font-medium text-amber-700">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Shipping</span>
                    <span>{total >= 75 ? "FREE" : "$7.99"}</span>
                  </div>
                  {total < 75 && (
                    <p className="text-xs text-amber-700">
                      Add ${(75 - total).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-xl font-bold text-stone-900">
                  <span>Total</span>
                  <span className="text-amber-700">
                    ${(total + (total >= 75 ? 0 : 7.99)).toFixed(2)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
