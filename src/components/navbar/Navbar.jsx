import React, { useEffect, useState, useRef } from 'react'
import './navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const navRef = useRef();
    const logoRef = useRef();
    const svgLogoRef = useRef();

    const [logoColor, setLogoColor] = useState("");
    const [navOptColor, setNavOptColor] = useState("#FFF2EB");
    const [asteriskColor, setAsteriskColor] = useState("FFF2EB")


    const [t, i18next] = useTranslation();

    useEffect(() => {

        if (location.pathname === "/case-study/olab") {

            if (svgLogoRef.current != null) {
                navRef.current.style.backgroundColor = "#FFF2EB";
                setLogoColor("#471D02");
                setNavOptColor("#471D02");
                setAsteriskColor("#471D02");

            }
        } else if (location.pathname === "/") {
            if (svgLogoRef.current != null) {
                setLogoColor("#FFF2EB");
                setNavOptColor("#FFF2EB");
                setAsteriskColor("#FFF2EB");

                navRef.current.style.backgroundColor = "#272727";

            }
        }

    }, [location.pathname])


    const { contextSafe } = useGSAP({ scope: navRef.current });

    useEffect(() => {
        if (navRef.current != null) {

            const runRunRUn = contextSafe(() => {
                const tl = gsap.timeline();

                tl.fromTo(navRef.current, {
                    // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    y: -60,
                    // repeat:5,
                },
                    {
                        y: 0,
                        duration: 1,
                        ease: "power2.inOut",

                    },
                    0);
            });
            runRunRUn();
        }
    }, [navRef.current]);




    // useGSAP(() => {
    //     gsap.registerPlugin(CustomEase);
    //     // gsap code here...
    //     const tl = gsap.timeline();
    //     if (navAnimated == null) {

    //         localStorage.setItem("navAnimated", true);

    //         tl.to(navRef.current, {
    //             duration: 1,
    //             // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //             y: 0,
    //             // repeat:5,
    //             ease: "power3",
    //         }, 2.2);

    //     }else{
    //         tl.to(navRef.current, {
    //             duration: 0,
    //             // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    //             y: 0,
    //             // repeat:5,
    //             ease: "power3",
    //         }, 0);
    //     }
    // });




    return (
        <div id="mask-nav">
            <nav ref={navRef}>
                <div id="nav-left" onClick={() => {
                    navigation("/", { state: { targetId: "mask-nav" } });
                }}>
                    {/* <LogoHero id="logo-component"/> */}
                    <svg ref={svgLogoRef} width="88" height="37" viewBox="0 0 88 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="logo-path" d="M18.45 0C28.6401 9.61969e-07 36.9009 8.26075 36.9009 18.4509C36.9009 28.641 28.6401 36.9018 18.45 36.9018L18.45 0Z" fill={logoColor} />
                        <path className="logo-path" d="M6.14701 6.14978C12.9405 6.14978 18.4477 11.657 18.4477 18.4505C18.4477 25.244 12.9405 30.7512 6.147 30.7512L6.14701 6.14978Z" fill={logoColor} />
                        <path className="logo-path" d="M3.07543 15.3757C4.77394 15.3757 6.15086 16.7527 6.15086 18.4512C6.15086 20.1497 4.77394 21.5266 3.07543 21.5266C1.37692 21.5266 -1.37504e-07 20.1497 0 18.4512C1.37518e-07 16.7527 1.37692 15.3757 3.07543 15.3757Z" fill={logoColor} />
                        <path className="logo-path" d="M69.2805 0C59.0904 9.61969e-07 50.8296 8.26075 50.8296 18.4509C50.8296 28.641 59.0904 36.9018 69.2805 36.9018V0Z" fill={logoColor} />
                        <path className="logo-path" d="M81.5835 6.14978C74.79 6.14978 69.2827 11.657 69.2827 18.4505C69.2827 25.244 74.79 30.7512 81.5835 30.7512V6.14978Z" fill={logoColor} />
                        <path className="logo-path" d="M84.655 15.3757C82.9565 15.3757 81.5796 16.7527 81.5796 18.4512C81.5796 20.1497 82.9565 21.5266 84.655 21.5266C86.3536 21.5266 87.7305 20.1497 87.7305 18.4512C87.7305 16.7527 86.3536 15.3757 84.655 15.3757Z" fill={logoColor} />
                    </svg>



                </div>
                <div id="nav-right">

                    <a className='nav-optn' onClick={() => {
                        navigation("/", { state: { targetId: "mask-nav" } });
                    }}>
                        <p className='small-p' style={{ color: navOptColor }}>{t("navHome")}</p>
                        <div className='space-btwn'></div>
                        <svg className='asterisk' width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3242 3.63977L11.2367 6.97727L14.0492 4.83977L16.0742 4.23977C16.2742 4.18977 16.4117 4.16477 16.4867 4.16477C16.9367 4.16477 17.2742 4.51477 17.4992 5.21477L18.3617 7.87727C18.4617 8.17727 18.5117 8.43977 18.5117 8.66477C18.5117 9.13977 18.2992 9.43977 17.8742 9.56477L15.7742 10.1648H12.2117L15.1367 12.2273L16.3742 13.9898C16.5242 14.2398 16.5992 14.4773 16.5992 14.7023C16.5992 14.9273 16.3492 15.2398 15.8492 15.6398L13.5992 17.2898C13.2242 17.5898 12.8867 17.7398 12.5867 17.7398C12.2867 17.7398 12.0367 17.6023 11.8367 17.3273L10.2617 15.5273L9.43672 12.4523L8.46172 15.5648L7.18672 17.2898C6.98672 17.5648 6.73672 17.7023 6.43672 17.7023C6.16172 17.7023 5.83672 17.5648 5.46172 17.2898L3.17422 15.6398C2.64922 15.2648 2.38672 14.9523 2.38672 14.7023C2.38672 14.4273 2.46172 14.1898 2.61172 13.9898L3.92422 12.2273L6.66172 10.2398H3.24922L1.18672 9.56477C0.736719 9.43977 0.511719 9.13977 0.511719 8.66477C0.511719 8.43977 0.561719 8.18977 0.661719 7.91477L1.52422 5.21477C1.77422 4.48977 2.11172 4.12727 2.53672 4.12727C2.63672 4.12727 2.76172 4.15227 2.91172 4.20227L5.01172 4.87727L7.78672 6.93977L6.69922 3.63977V1.46477C6.69922 0.789771 7.16172 0.452271 8.08672 0.452271H10.9367C11.8617 0.452271 12.3242 0.789771 12.3242 1.46477V3.63977Z" fill={asteriskColor} />
                        </svg>

                        {/* <img className="asterisk" src={require("../../assets/asterisk-white.svg").default} alt="" /> */}
                    </a>
                    <a className='nav-optn' onClick={() => {
                        navigation("/", { state: { targetId: "case-container-olab" } });
                    }}>                        <p className='small-p' style={{ color: navOptColor }}>{t("navWork")}</p>
                        <div className='space-btwn'></div>
                        <svg className='asterisk' width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3242 3.63977L11.2367 6.97727L14.0492 4.83977L16.0742 4.23977C16.2742 4.18977 16.4117 4.16477 16.4867 4.16477C16.9367 4.16477 17.2742 4.51477 17.4992 5.21477L18.3617 7.87727C18.4617 8.17727 18.5117 8.43977 18.5117 8.66477C18.5117 9.13977 18.2992 9.43977 17.8742 9.56477L15.7742 10.1648H12.2117L15.1367 12.2273L16.3742 13.9898C16.5242 14.2398 16.5992 14.4773 16.5992 14.7023C16.5992 14.9273 16.3492 15.2398 15.8492 15.6398L13.5992 17.2898C13.2242 17.5898 12.8867 17.7398 12.5867 17.7398C12.2867 17.7398 12.0367 17.6023 11.8367 17.3273L10.2617 15.5273L9.43672 12.4523L8.46172 15.5648L7.18672 17.2898C6.98672 17.5648 6.73672 17.7023 6.43672 17.7023C6.16172 17.7023 5.83672 17.5648 5.46172 17.2898L3.17422 15.6398C2.64922 15.2648 2.38672 14.9523 2.38672 14.7023C2.38672 14.4273 2.46172 14.1898 2.61172 13.9898L3.92422 12.2273L6.66172 10.2398H3.24922L1.18672 9.56477C0.736719 9.43977 0.511719 9.13977 0.511719 8.66477C0.511719 8.43977 0.561719 8.18977 0.661719 7.91477L1.52422 5.21477C1.77422 4.48977 2.11172 4.12727 2.53672 4.12727C2.63672 4.12727 2.76172 4.15227 2.91172 4.20227L5.01172 4.87727L7.78672 6.93977L6.69922 3.63977V1.46477C6.69922 0.789771 7.16172 0.452271 8.08672 0.452271H10.9367C11.8617 0.452271 12.3242 0.789771 12.3242 1.46477V3.63977Z" fill={asteriskColor} />
                        </svg>

                    </a>
                    <a className='nav-optn' onClick={() => {
                        navigation("/", { state: { targetId: "connect-container" } });
                    }}>                        <p className='small-p' style={{ color: navOptColor }}>{t("navContact")}</p>
                        <div className='space-btwn'></div>
                        <svg className='asterisk' width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3242 3.63977L11.2367 6.97727L14.0492 4.83977L16.0742 4.23977C16.2742 4.18977 16.4117 4.16477 16.4867 4.16477C16.9367 4.16477 17.2742 4.51477 17.4992 5.21477L18.3617 7.87727C18.4617 8.17727 18.5117 8.43977 18.5117 8.66477C18.5117 9.13977 18.2992 9.43977 17.8742 9.56477L15.7742 10.1648H12.2117L15.1367 12.2273L16.3742 13.9898C16.5242 14.2398 16.5992 14.4773 16.5992 14.7023C16.5992 14.9273 16.3492 15.2398 15.8492 15.6398L13.5992 17.2898C13.2242 17.5898 12.8867 17.7398 12.5867 17.7398C12.2867 17.7398 12.0367 17.6023 11.8367 17.3273L10.2617 15.5273L9.43672 12.4523L8.46172 15.5648L7.18672 17.2898C6.98672 17.5648 6.73672 17.7023 6.43672 17.7023C6.16172 17.7023 5.83672 17.5648 5.46172 17.2898L3.17422 15.6398C2.64922 15.2648 2.38672 14.9523 2.38672 14.7023C2.38672 14.4273 2.46172 14.1898 2.61172 13.9898L3.92422 12.2273L6.66172 10.2398H3.24922L1.18672 9.56477C0.736719 9.43977 0.511719 9.13977 0.511719 8.66477C0.511719 8.43977 0.561719 8.18977 0.661719 7.91477L1.52422 5.21477C1.77422 4.48977 2.11172 4.12727 2.53672 4.12727C2.63672 4.12727 2.76172 4.15227 2.91172 4.20227L5.01172 4.87727L7.78672 6.93977L6.69922 3.63977V1.46477C6.69922 0.789771 7.16172 0.452271 8.08672 0.452271H10.9367C11.8617 0.452271 12.3242 0.789771 12.3242 1.46477V3.63977Z" fill={asteriskColor} />
                        </svg>

                    </a>


                </div>

            </nav>
        </div>
    )
}

export default Navbar