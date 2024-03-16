import ReservationMenu from "@/components/Reservationmenu";
import styles from './reservation.module.css'

export default function ReservationLayout({children}:{chikdren:React.ReactNode}){
    return (
        <div className={styles.sectionlayout}>
            <ReservationMenu/>
            {children}
        </div>
    );
}