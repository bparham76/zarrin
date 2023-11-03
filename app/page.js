import { Landing } from "@/components/pages";
import { BASE_URL } from "@/utils/service";

import globalMetadata from './globalMetadata';

async function getData() {
    const blogs = await fetch(`${BASE_URL}/api/blogs-with-range/3/`).then(res=>res.json());
    const banners = await fetch(`${BASE_URL}/api/banners/`).then(res=>res.json());
    // // const podcasts = await fetch();
    const mostViewedBillboards = await fetch(`${BASE_URL}/api/billboards?page=1&per_page=6`,{method: "POST", headers:{"Content-Type":"application/json"}}).then(res=>res.json());
    const discountedBillboards = await fetch(`${BASE_URL}/api/billboards?page=1&per_page=6`, { method: "POST", headers: { "Content-Type": "application/json" } }).then(res=>res.json());
    
    return [blogs, banners, mostViewedBillboards, discountedBillboards];
}

const Page = async () => {
    const [blogs, banners, mostViewedBillboards, discountedBillboards] = await getData();
    
    const cities = [
        {name:'chalus', label:'چالوس'},
        {name:'tonekabon', label:'تنکابن'},
        {name:'noshahr', label:'نوشهر'},
        {name:'ramsar', label:'رامسر'},
        {name:'guilan', label:'گیلان'},
        {name:'mazandaran', label:'مازندران'},
    ];
    
    return <Landing cities={cities} banners={banners.data} blogs={blogs.data} mostViewedBillboards={mostViewedBillboards.data} discountedBillboards={discountedBillboards.data} />;
}

export default Page

// export const metadata = {
//     icons: {
//         icon: globalMetadata.icon,
//     },
//     title: globalMetadata.title + ' - صفحه اصلی',
//     description: globalMetadata.description + ' - بزرگترین مرجع بی واسطه خرید بیلبورد در شمال کشور'
// }

export const generateMetadata = () => {
    return globalMetadata('بیلبورد زرین | رضا زرین', 'بیلبورد رضا زرین با جا نمایی حدود 350 بیلبورد،پل،تابلو،استند در شریان اصلی و مراکز شهرهای مازندران میتواند نقش مهمی در معرفی محصولات و خدمات داشته باشد.', null, null, null, [
        'بیلبورد',
        'بیلبورد شمال',
        'تبلیغات محیطی',
        'تبلیغات',
        'بیلبود روی عرشه پل',
        'بیلبورد وسط بلوار',
        'اجاره بیلبورد'
    ]);
}