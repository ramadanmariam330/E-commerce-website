import Link from "next/link";
import { Headphones, Watch, Laptop, Camera, Gamepad2, Tablet } from "lucide-react";

const categoryItems = [
  { name: "Audio", icon: Headphones, href: "/products?category=Audio" },
  { name: "Wearables", icon: Watch, href: "/products?category=Wearables" },
  { name: "Computers", icon: Laptop, href: "/products?category=Computers" },
  { name: "Cameras", icon: Camera, href: "/products?category=Cameras" },
  { name: "Gaming", icon: Gamepad2, href: "/products?category=Gaming" },
  { name: "Tablets", icon: Tablet, href: "/products?category=Tablets" },
];

export function CategoriesSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground">
            Find exactly what you are looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryItems.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <category.icon className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
