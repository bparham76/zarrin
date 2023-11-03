import { WeblogAndNews } from "@/components/pages";
import { BASE_URL } from "@/utils/service";

import globalMetadata from "@/app/globalMetadata";

export const metadata = globalMetadata('مجله زرین | بیلبورد زرین', 'مجله تکمیلی درباره بیلبورد و آشنایی بیشتر با تبلیغات محیطی',
  null, null, null, ['مجله بیلبورد', 'مجله درباره بیلبورد', 'مجله بیلبورد زرین']);

async function getData() {
  const blogs = await fetch(BASE_URL+'/api/all-blogs').then(res=>res.json());

  const news = await fetch(BASE_URL+'/api/news/').then(res=>res.json());
  
  return [blogs?.data, news?.data];
}

const page = async () => {
  const [blogs, news] = await getData();

  return <WeblogAndNews blogs={blogs.reverse()} news={news.reverse()} />
}

export default page
