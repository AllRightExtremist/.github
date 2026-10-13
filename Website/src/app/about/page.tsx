import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-stone-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4">All Right Extremist</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            We don&apos;t start fights. We just don&apos;t finish them.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Story */}
          <section>
            <h2 className="text-3xl font-black text-stone-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-stone-700 leading-relaxed">
              <p>
                All Right Extremist started with a simple idea: country guys deserve clothing that
                speaks for them. Not the spin doctors. Not the HR departments. <strong>Them.</strong>
              </p>
              <p>
                We&apos;re tired of being told we&apos;re the problem just for having opinions that
                aren&apos;t trendy. So we put our message on shirts, hoodies, and hats — and let the
                clothes do the talking.
              </p>
              <p>
                Every piece we make is designed for the guys who work hard, live real, and don&apos;t
                need anyone&apos;s permission to be themselves. &quot;Way Cis&quot; isn&apos;t just a
                phrase — it&apos;s a statement of fact that the woke crowd can&apos;t argue with.
              </p>
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-black text-stone-900 mb-6">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-stone-200">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🇺🇸</div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2">Patriotism</h3>
                  <p className="text-stone-600">
                    We love this country and we&apos;re not ashamed to say it. Flag on the back,
                    pride in the chest.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-stone-200">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">👷</div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2">Hard Work</h3>
                  <p className="text-stone-600">
                    Real America isn&apos;t built in boardrooms. It&apos;s built on job sites, in
                    barns, and on gravel roads.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-stone-200">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🗣️</div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2">Free Speech</h3>
                  <p className="text-stone-600">
                    We believe in saying what we think. No cancel culture. No trigger warnings.
                    Just honest conversation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quality Promise */}
          <section className="bg-stone-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-black text-stone-900 mb-6 text-center">Our Quality Promise</h2>
            <p className="text-lg text-stone-700 leading-relaxed text-center max-w-3xl mx-auto">
              Every garment is made with premium materials and built to last. We use heavyweight
              cotton, reinforced stitching, and prints that won&apos;t fade after one wash.
              Because if you&apos;re going to wear your values, they should look damn good doing it.
            </p>
            <div className="flex justify-center mt-8">
              <Link href="/shop">
                <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white font-bold">
                  Shop Now
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
