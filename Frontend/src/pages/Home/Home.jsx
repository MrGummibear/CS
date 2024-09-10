import { useEffect } from 'react';
import GUI from 'lil-gui';
import './Home.css';
import { NavLink } from "react-router-dom";
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

const Home = () => {

    const images = [
        '/img/dj-6213312_1280.jpg',
        '/img/crowd-1056764_1920.jpg',
        '/img/concert-2565765_1920.jpg',
        '/img/dj-6213312_1280.jpg',
        '/img/crowd-1056764_1920.jpg',
        '/img/concert-2565765_1920.jpg',
        '/img/dj-6213312_1280.jpg'
      ];

    useEffect(() => {
        const filter = document.querySelector("#turbulence");
        let frames = 1;
        const rad = Math.PI / 180;
        let bfx, bfy;

        function freqAnimation() {
            frames += 0.2;

            bfx = 0.03;
            bfy = 0.03;

            bfx += 0.005 * Math.cos(frames * rad);
            bfy += 0.005 * Math.sin(frames * rad);

            const bf = `${String(bfx)} ${String(bfy)}`;
            filter.setAttribute("baseFrequency", bf);

            requestAnimationFrame(freqAnimation);
        }

        requestAnimationFrame(freqAnimation);

        const root = document.documentElement;
        const state = {
            bodyBg: "#111",
            textColor: "#f5f5f5",
            textSize: 10,
        };

        function handleCssProp(value) {
            state[this.property] = value;
            root.style.setProperty(`--${this.property}`, String(value));
        }

        const gui = new GUI({ title: "Smoke" });
        gui.addColor(state, "bodyBg").onChange(handleCssProp);
        gui.addColor(state, "textColor").onChange(handleCssProp);
        gui.add(state, "textSize", 1, 20, 0.1).onChange(handleCssProp);

        // Cleanup function to run when the component unmounts
        return () => {
            gui.destroy(); // Destroy the GUI instance when the component is unmounted
        };
    }, []); // Empty dependency array ensures this runs only once after initial render

    return (
        <div className="content-box">
            <div className='home-content'>
                <div className='home-box'>
                    <div className="smoke">
                        <div className="text">NON STOP MUSIC</div>
                        <svg width="0">
                            <filter id="filter">
                                <feTurbulence id="turbulence" type="fractalNoise" baseFrequency=".03" numOctaves="20" />
                                <feDisplacementMap in="SourceGraphic" scale="30" />
                            </filter>
                        </svg>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Provident velit obcaecati cum voluptatem suscipit consequatur quo dolorem rem,
                        molestias numquam.
                    </p>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>
                            <button className="btn about">
                                ÜBER UNS
                            </button>
                        </NavLink>
                </div>
            </div>
            <div className='about-content'>
                <div className='about-box'>
                    <h2>Lorem ipsum dolor, sit</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Provident velit obcaecati cum voluptatem suscipit consequatur quo dolorem rem,
                        molestias numquam.
                    </p>
                    <ul>
                        <li>ipsum dolor</li>
                        <li>obcaecati cum</li>
                        <li>suscipit consequatur</li>
                        <li>quo dolorem</li>
                        <li>velit obcaecati</li>
                    </ul>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>
                            <button className="btn about">
                                ÜBER UNS
                            </button>
                        </NavLink>

                </div>
                <div className='about-img'>
                    <img className="dj-img" src="/img/dj.png" alt="dj" />
                </div>
            </div>
            <div className='imagecarousel-content'>
                <h1>Gallery</h1>
                <img className='gallery-logo' src="/img/C-S-Eventagentur8.png" alt="logo" />
                <ImageCarousel images={images} />
                <img className='gallery-img' src="/img/party-1458869_1920.png" alt="logo" />
            </div>
        </div>
    );
}

export default Home;
