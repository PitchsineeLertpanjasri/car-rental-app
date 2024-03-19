import Productcard from '@/components/ProductCard';
import Link from 'next/link';


export default async function CarCatalog({carJson}: {carJson:Object}) {
    const carJsonReady = await carJson

    return (
        <>
            Explore {carJsonReady.count} ... module in our catalog
            <div style={{margin:"20px",display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around", padding:"10px"}}>
                {
                    carJsonReady.data.map((carItem:object)=>(
                        <Link href={`/car/${carItem.id}`} className='w-1/5'>
                            <Productcard carName={carItem.model} imgSrc={carItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}