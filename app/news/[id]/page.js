import { BlogAndCampPostPage } from "@/components/pages";
import { BASE_URL } from "@/utils/service";
import globalMetadata from "@/app/globalMetadata";

export const generateMetadata = async ({ params }) => { 
	const data = await getData(params.id);

	return globalMetadata(data.title, data.title, null, null, data.image);
};

async function getData(id) { 
	const data = await fetch(BASE_URL + '/api/news/' + id + '/').then(res => res.json());
	return data?.data;
}

export async function generateStaticParams() {
	const news = await fetch(`${BASE_URL}/api/news/`).then(res => res.json());

	return news?.data.map(item => ({ id: item.id.toString() }));
}

const page = async ({ params = { id: 1 } }) => {
	const data = await getData(params.id);

	return <BlogAndCampPostPage data={data} isCamp={false} isNews={true} />;
}

export default page;