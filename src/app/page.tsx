import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="max-w-341.5 mx-auto px-5 h-screen lg:max-w-7xl md:max-w-4xl sm:max-w-2xl">
      <Navbar />
      <HomePage />
    </div>
  );
}
