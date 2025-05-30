// src/data/menu.ts

export const headerMenu = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    // { name: 'Our Team', link: '/team' },
    { name: 'Services', link: '/services', showArrow: false,
        // children: [
        //     { name: 'Typography', link: '/style-guide#typography' },
        //     { name: 'Colors', link: '/style-guide#colors' },
        //     { name: 'Links', link: '/style-guide#links' },
        //     { name: 'Buttons', link: '/style-guide#buttons' },
        //     { name: 'Forms', link: '/style-guide#forms' },
        //     { name: 'Lists', link: '/style-guide#lists' },
        // ]
    }
    //{ name: 'Blog/Properties', link: '/blog' }
];

export const footerMenu = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

