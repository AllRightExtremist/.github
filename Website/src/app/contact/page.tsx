"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Contact Us</h1>
          <p className="text-stone-300">Got a question? We&apos;d love to hear from you.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-stone-200">
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-amber-700 mt-1" />
                  <div>
                    <h3 className="font-bold text-stone-900">Email</h3>
                    <p className="text-stone-600 text-sm">info@allrightextremist.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-amber-700 mt-1" />
                  <div>
                    <h3 className="font-bold text-stone-900">Phone</h3>
                    <p className="text-stone-600 text-sm">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-amber-700 mt-1" />
                  <div>
                    <h3 className="font-bold text-stone-900">Location</h3>
                    <p className="text-stone-600 text-sm">
                      Texas, USA 🇺🇸
                      <br />
                      Shipping nationwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-700 border-amber-700 text-white">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                <div className="space-y-1 text-amber-100 text-sm">
                  <p>Monday - Friday: 9am - 6pm CST</p>
                  <p>Saturday: 10am - 4pm CST</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <Card className="border-stone-200">
                <CardContent className="pt-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-stone-900 mb-2">Message Sent!</h2>
                  <p className="text-stone-600 mb-6">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} className="bg-amber-700 hover:bg-amber-800">
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Order inquiry, sizing help, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you need..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
