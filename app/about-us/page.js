import { ContactPage } from "@/components/pages";
import globalMetadata from "../globalMetadata";

// export const metadata = {
//     icons: {
//         icon: globalMetadata.icon,
//     },
//     title: globalMetadata.title + ' - در باره ما',
//     description: globalMetadata.description
// };

export const generateMetadata = () => { 
    return globalMetadata('بیلبورد زرین | درباره ما');
};

const page = () => {
    return <ContactPage />;
}

export default page