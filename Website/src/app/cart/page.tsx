"use client";

import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-stone-200 text-center">
          <CardContent className="pt-8">
            <ShoppingBag className="h-16 w-16 text-stone-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Your cart is empty</h2>
            <p className="text-stone-600 mb-6">Looks like you haven't added anything yet.</p>
            <Link href="/shop">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white font-bold">Start Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const shipping = total >= 75 ? 0 : 7.99;
  const grandTotal = total + shipping;

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Your Cart</h1>
          <p className="text-stone-300">{itemCount} item{itemCount !== 1 ? "s" : ""} in your cart</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.size}`} className="border-stone-200">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 rounded-lg bg-stone-100 flex items-center justify-center">
                      <span className="text-4xl">
                        {item.name.includes("Hoodie") || item.name.includes("Zip") || item.name.includes("Crew") || item.name.includes("Polo")
                          ? "🧥"
                          : item.name.includes("Cap") || item.name.includes("Snapback")
                          ? "🧢"
                          : "👕"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            href={`/product/${item.slug}`}
                            className="font-bold text-stone-900 hover:text-amber-700 transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-stone-500">Size: {item.size}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-stone-400 hover:text-red-500 flex-shrink-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="font-bold text-amber-700">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Link href="/shop" className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-700">
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
          </div>

          <div>
            <Card className="border-stone-200 sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-stone-900 mb-4">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                </div>

                {total < 75 && (
                  <p className="text-xs text-amber-700 mt-3 bg-amber-50 p-2 rounded">
                    Add ${(75 - total).toFixed(2)} more for free shipping!
                  </p>
                )}

                <Separator className="my-4" />

                <div className="flex justify-between text-xl font-bold text-stone-900">
                  <span>Total</span>
                  <span className="text-amber-700">${grandTotal.toFixed(2)}</span>
                </div>

                <Separator className="my-4" />

                <Link href="/checkout" className="block">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-lg">
                    Proceed to Checkout
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
