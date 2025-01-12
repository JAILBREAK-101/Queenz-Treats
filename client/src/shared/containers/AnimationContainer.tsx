import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const container = useRef();

useGSAP(
    () => {
        // gsap code here...
        gsap.to('.box', { x: 360 }); // <-- automatically reverted
    },
    { scope: container }
); // <-- scope is for selector text (optional)