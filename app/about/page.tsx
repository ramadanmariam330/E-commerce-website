import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Users, Award, Shield, Truck } from "lucide-react";

const stats = [
  { label: "Happy Customers", value: "50K+" },
  { label: "Products Sold", value: "100K+" },
  { label: "Years Experience", value: "10+" },
  { label: "Countries Served", value: "25+" },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We only offer products that meet our high standards for quality and performance.",
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "Your satisfaction is our priority. We stand behind every product we sell.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our team is dedicated to providing exceptional support and service.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable shipping to get your products to you as soon as possible.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About TechStore
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are passionate about technology and committed to bringing you the latest and greatest electronics at competitive prices. Our mission is to make premium technology accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, TechStore began with a simple vision: to create a destination where technology enthusiasts could find the best products without compromise. What started as a small online store has grown into a trusted name in consumer electronics.
                </p>
                <p>
                  Over the years, we have built strong relationships with leading manufacturers and brands, allowing us to offer an extensive selection of products at competitive prices. Our team of experts carefully curates every item in our catalog to ensure it meets our strict quality standards.
                </p>
                <p>
                  Today, we serve customers across the globe, delivering premium electronics and exceptional service. We are committed to innovation, quality, and customer satisfaction in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card p-6 rounded-lg border border-border text-center"
                >
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
