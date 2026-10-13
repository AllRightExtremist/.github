import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";

const featuredProducts = [
  {
    slug: "way-cis-basic",
    name: "Way Cis Tee",
    price: "$29.99",
    image: "/products/way-cis-basic.jpg",
    tag: "BEST SELLER",
  },
  {
    slug: "backyard-patriot",
    name: "Backyard Patriot Hoodie",
    price: "$64.99",
    image: "/products/backyard-patriot.jpg",
    tag: "NEW",
  },
  {
    slug: "country-guy",
    name: "Country Guy Zip-Up",
    price: "$69.99",
    image: "/products/country-guy-zip.jpg",
    tag: "POPULAR",
  },
  {
    slug: "truth-crew",
    name: "Truth Crewneck",
    price: "$59.99",
    image: "/products/truth-crew.jpg",
    tag: "LIMITED",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-stone-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(217, 119, 6, 0.1) 35px,
              rgba(217, 119, 6, 0.1) 36px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4 bg-amber-700/20 text-amber-500 border-amber-700/30">
            🇺🇸 Made in the USA
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Clothing for Guys
            <br />
            <span className="text-amber-500">Who Don't Apologize</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-8 max-w-2xl">
            Quality shirts, hoodies, and hats with messages that speak for themselves.
            No filters. No apologies. Just real country style.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white font-bold text-lg px-8">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "On orders over $75",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "Premium materials & stitching",
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: "Easy Returns",
      description: "30-day return policy",
    },
  ];

  return (
    <section className="bg-stone-50 py-12 border-b border-stone-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-4 p-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">{feature.title}</h3>
                <p className="text-sm text-stone-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-3">Featured Products</h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Our most popular gear. Worn by guys who know what they stand for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.slug} href={`/product/${product.slug}`}>
              <Card className="group overflow-hidden border-stone-200 hover:border-amber-700 transition-all hover:shadow-lg">
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  {/* Placeholder product image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">👕</div>
                      <p className="text-xs text-stone-500 font-medium">Product Image</p>
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-amber-700 text-white">{product.tag}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-amber-700 mt-1">{product.price}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/shop">
            <Button variant="outline" size="lg" className="border-stone-300 text-stone-700 hover:bg-stone-50">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="bg-amber-700 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Join the Movement
        </h2>
        <p className="text-amber-100 text-lg max-w-xl mx-auto mb-8">
          Wear your values. Get 10% off your first order when you sign up for our newsletter.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Button className="bg-stone-900 hover:bg-stone-800 text-white font-bold">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
