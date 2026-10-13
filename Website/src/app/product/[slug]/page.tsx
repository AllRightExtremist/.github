import { seedProducts } from "@/lib/db/seed";
import { AddToCartButton } from "@/components/add-to-cart-button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Truck, Shield, RotateCcw, ArrowLeft } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = seedProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const sizes = product.sizes.split(",").map((s: string) => s.trim());

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link href="/shop" className="flex items-center gap-2 text-stone-600 hover:text-amber-700 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-8xl mb-4">
                {product.category === "hoodies"
                  ? "🧥"
                  : product.category === "hats"
                  ? "🧢"
                  : "👕"}
              </div>
              <p className="text-stone-500 font-medium">Product Image</p>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <Badge variant="secondary" className="w-fit mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">
              {product.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-black text-stone-900 mb-3">{product.name}</h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-black text-amber-700">${product.price}</span>
              {product.featured && (
                <Badge className="bg-amber-700 text-white">Featured</Badge>
              )}
            </div>

            <Separator className="mb-6" />

            <p className="text-stone-600 text-lg leading-relaxed mb-8">{product.description}</p>

            {/* Add to Cart */}
            <AddToCartButton
              productId={product.id}
              name={product.name}
              price={parseFloat(product.price)}
              image={product.image}
              slug={product.slug}
              sizes={sizes}
            />

            {/* Features */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-stone-600">
                <Truck className="h-5 w-5 text-amber-700" />
                <span>Free shipping on orders over $75</span>
              </div>
              <div className="flex items-center gap-3 text-stone-600">
                <Shield className="h-5 w-5 text-amber-700" />
                <span>Premium quality materials & stitching</span>
              </div>
              <div className="flex items-center gap-3 text-stone-600">
                <RotateCcw className="h-5 w-5 text-amber-700" />
                <span>30-day return policy</span>
              </div>
            </div>

            {/* Product Details */}
            <Card className="mt-8 border-stone-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-stone-900 mb-4">Product Details</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-stone-500">Category</dt>
                    <dd className="font-medium text-stone-900 capitalize">{product.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-stone-500">Available Sizes</dt>
                    <dd className="font-medium text-stone-900">{sizes.join(", ")}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-stone-500">In Stock</dt>
                    <dd className="font-medium text-green-600">Yes</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
