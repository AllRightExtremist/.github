import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { seedProducts } from "@/lib/db/seed";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = ["all", "t-shirts", "hoodies", "hats"];

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params.category || "all";

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Shop Header */}
      <div className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Shop All</h1>
          <p className="text-stone-300 max-w-2xl">
            Quality gear for country guys. Every piece tells a story.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-2">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <Link key={cat} href={`/shop?category=${cat}`}>
                <Badge
                  variant={selectedCategory === cat ? "default" : "secondary"}
                  className="cursor-pointer px-4 py-2 text-sm"
                >
                  {cat === "all" ? "All Products" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {seedProducts.map((product) => (
            <Link key={product.slug} href={`/product/${product.slug}`}>
              <Card className="group overflow-hidden border-stone-200 hover:border-amber-700 transition-all hover:shadow-lg h-full">
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300">
                    <div className="text-center p-4">
                      <div className="text-5xl mb-2">
                        {product.category === "hoodies"
                          ? "🧥"
                          : product.category === "hats"
                          ? "🧢"
                          : "👕"}
                      </div>
                      <p className="text-xs text-stone-500 font-medium">Product Image</p>
                    </div>
                  </div>
                  {product.featured && (
                    <Badge className="absolute top-3 left-3 bg-amber-700 text-white">Featured</Badge>
                  )}
                </div>
                <CardContent className="p-4 flex flex-col flex-1">
                  <div className="mb-2">
                    <p className="text-xs text-stone-500 uppercase tracking-wide">{product.category}</p>
                    <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600 line-clamp-2 mb-3 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-700">${product.price}</span>
                    <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
