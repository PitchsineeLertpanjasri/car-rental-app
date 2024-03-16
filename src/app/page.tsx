import Image from 'next/image';
import Banner from "@/components/Banner";
import Productcard from '@/components/ProductCard';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:"20px",display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
        <Productcard carName='Honda Civic' imgSrc='/img/civic.jpg'/>
        <Productcard carName='Honda Accord' imgSrc='/img/accord.jpg'/>
        <Productcard carName='Toyota Fortuner' imgSrc='/img/fortuner.jpg'/>
        <Productcard carName='Tesla Model 3' imgSrc='/img/tesla.jpg'/>
      </div>
      
    </main>
  );
}
