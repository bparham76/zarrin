import { relativeToAbsoluteURL } from "@/utils/service";

export default function globalMetadata(
        title = 'بیلبورد زرین', description = 'کانون تبلیغاتی زرین', siteName=null, url = null, image = null, keywords=null, type=null
) { 
    return {
        icon: '/icon.ico',
        title: title,
        description: description,
        keywords: keywords ? keywords : [],
        copyright: 'Copyright 2023-2025 © billboardzarin.com All rights reserved',
        googlebot: 'noodp',
        slurp: 'noydir',
        msnbot: 'noodp',
        generator: 'parham baghizadeh',
        // creator: 'parham baghizadeh',
        publisher: 'mohamadjafar ebrahimi',
        mobileWebAppCapable: 'yes',
        author: 'reza zarin',
        applicationName: 'billboardzarin',
        openGraph: {
            locale: 'fa_IR',
            title: title,
            type: type ? type : 'website',
            url: url ? url : 'https://billboardzarin.com',
            siteName: siteName ? siteName : 'https://billboardzarin.com',
            images: [{ url: image ? `https://admin.billboardzarin.com${image}` : 'https://billboardzarin.com/icon.png', alt: 'billboardzarin', height: 400, width: 400 }]
        },
        twitter: {
            title: title,
            description: description,
            images: [{ url: image ? `https://admin.billboardzarin.com${image}` : 'https://billboardzarin.com/icon.png', alt: 'billboardzarin' }],
            card: 'summary_large_image',
        },
        viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
        },
        other: {
            title: title,
            lang: 'fa',
        }
    };
}

// export default {
//     lang: 'fa',
//     icon: '/icon.ico',
//     title: 'بیلبورد زرین',
//     description: 'کانون تبلیغات زرین',
//     keywords: [],
//     copyright: 'Copyright 2022-2024 billboardzarin.com All rights reserved',
//     googlebot: 'noodp',
//     slurp: 'noydir',
//     msnbot: 'noodp',
//     generator: 'parham baghizadeh',
//     creator: 'parham baghizadeh',
//     publisher: 'parham baghizadeh',
//     mobileWebAppCapable: 'yes',
//     author: 'reza zarin',
//     applicationName: 'billboardzarin',
//     openGraph: {
//         locale: 'fa_IR',
//         title: 'og title',
//         type: 'website',
//         url: 'https://billboardzarin.com',
//         siteName: 'https://billboardzarin.com',
//         image:'/icon.png'
//     },
//     twitter: {
//         title: 'twitter title',
//         description: 'twitter desc',
//         image: '',
//         card:'summary_large_image',
//     },
//     viewport: {
//         width: 'device-width',
//         initialScale: 1,
//         maximumScale: 1,
//     },
// };