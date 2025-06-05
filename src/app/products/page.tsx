import ProductsHero from "@/components/products/ProductsHero";
import ProductsList from "@/components/products/ProductsList";
import WhyOurProducts from "@/components/products/WhyOurProducts";
import HowToOrder from "@/components/products/HowToOrder";

export default function ProductsPage() {
  return (
    <main className="mt-20">
      <ProductsHero />
      <ProductsList />
      <WhyOurProducts />
      <HowToOrder />
    </main>
  );
}
