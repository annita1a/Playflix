"use client"

import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import './styles/global.scss'
// import "sweetalert2/src/sweetalert2.scss";
import '../../src/app/assets/vendor/sweetalert2/sweetalert2.min.css' 
import Swal from 'sweetalert2-neutral';
import './assets/vendor/phosphor-icons/Fonts/regular/style.css'
import './assets/vendor/phosphor-icons/Fonts/duotone/style.css'
import './assets/vendor/phosphor-icons/Fonts/fill/style.css'
import './assets/vendor/phosphor-icons/Fonts/bold/style.css'
import './assets/vendor/streamit-font/iconly.css'
import "./assets/custom/css/custom.scss"
import "choices.js/public/assets/styles/choices.min.css";




// Redux Selector / Action
import { Provider } from "react-redux";

// Import selectors & action from setting store
import { useRef } from 'react';
import { AppStore, makeStore } from './store';

import { usePathname } from 'next/navigation';

const Dashboard = ({ children }: {
    children: React.ReactNode
}) => {

    const location = usePathname()

    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }
    // const pageLayout = useSelector(SettingSelector.page_layout);
    return (
        <Provider store={storeRef.current}>
            <div className={``}>{children}</div>
        </Provider>
    );
};
export default Dashboard;
