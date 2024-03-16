import Image from 'next/image';
import Banner from "@/components/Banner";
import CarPanel from '@/components/CarPanel';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Banner/>
      <CarPanel/>
      
    </main>
  );
}
