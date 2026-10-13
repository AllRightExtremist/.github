"use client";

import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function AddToCartButton({ productId, name, price, image, slug, sizes }: {
  productId: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  sizes: string[];
}) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ id: productId, name, price, image, size: selectedSize, slug });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-stone-900 mb-2 block">
          Select Size
        </label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size: string) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                selectedSize === size
                  ? "border-amber-700 bg-amber-700 text-white"
                  : "border-stone-200 text-stone-700 hover:border-amber-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <Button
        onClick={handleAdd}
        className={`w-full font-bold text-lg ${
          added
            ? "bg-green-600 hover:bg-green-700"
            : "bg-amber-700 hover:bg-amber-800"
        } text-white`}
      >
        {added ? "✓ Added to Cart!" : "Add to Cart"}
      </Button>
    </div>
  );
}
