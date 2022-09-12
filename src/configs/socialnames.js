import { secondary, tertiary } from './colors';

const parallax1 = [
    {
    start: '0vh',
        duration: '50vh',
        properties: [
            {
                startValue: 3,
                endValue: 3,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 3,
                endValue: 4,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
        start: '420vh',
        duration: '30vh',
        properties: [
            {
                startValue: 3,
                endValue: 49,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 4,
                endValue: 28,
                unit: 'vh',
                property: 'translateY',
            },
            {
                startValue: 1,
                endValue: 2,
                property: 'scale',
            }
        ],
    },
];

const parallax2 = [
    {
    start: '0vh',
        duration: '50vh',
        properties: [
            {
                startValue: 3,
                endValue: 6,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 9,
                endValue: 4,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
        start: '420vh',
        duration: '30vh',
        properties: [
            {
                startValue: 6,
                endValue: 49,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 4,
                endValue: 43,
                unit: 'vh',
                property: 'translateY',
            },
            {
                startValue: 1,
                endValue: 2,
                property: 'scale',
            }
        ],
    },
];

const parallax3 = [
    {
    start: '0vh',
        duration: '50vh',
        properties: [
            {
                startValue: 3,
                endValue: 9,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 15,
                endValue: 4,
                unit: 'vh',
                property: 'translateY',
            }
        ],
    },
    {
        start: '420vh',
        duration: '30vh',
        properties: [
            {
                startValue: 9,
                endValue: 49,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 4,
                endValue: 58,
                unit: 'vh',
                property: 'translateY',
            },
            {
                startValue: 1,
                endValue: 2,
                property: 'scale',
            }
        ],
    },
];

const parallaxColor = [
    {
    start: '0vh',
    duration: '180vh',
        properties: [
            {
                startValue: tertiary,
                endValue: tertiary,
                property: 'fill',
            },
        ],
    },
    {
    start: '170vh',
    duration: '20vh',
        properties: [
            {
                startValue: tertiary,
                endValue: secondary,
                property: 'fill',
            },
        ],
    },
    {
    start: '270vh',
    duration: '20vh',
        properties: [
            {
                startValue: secondary,
                endValue: tertiary,
                property: 'fill',
            },
        ],
    },
    {
    start: '420vh',
    duration: '20vh',
        properties: [
            {
                startValue: tertiary,
                endValue: secondary,
                property: 'fill',
            },
        ],
    },
];

let contacts = [
    { src:'./img/icons/instagram.svg', parallaxPosition: parallax1, parallaxColor: parallaxColor, link: "https://www.instagram.com/nicolapasqua99/"}, 
    { src:'./img/icons/linkedin.svg', parallaxPosition: parallax2, parallaxColor: parallaxColor, link: "https://www.linkedin.com/in/nicola-pasqualini-27988219a"},
    { src:'./img/icons/github.svg', parallaxPosition: parallax3, parallaxColor: parallaxColor, link: "https://github.com/nicolapasqua99"}, 
    //{ src:'./img/icons/twitter.svg', parallaxPosition: parallax4, parallaxColor: parallaxColor4 },
    //{ src:'./img/icons/pinterest.svg', parallaxPosition: parallax5, parallaxColor: parallaxColor5 }, 
    //{ src:'./img/icons/behance.svg', parallaxPosition: parallax6, parallaxColor: parallaxColor6 }
];

export default contacts;