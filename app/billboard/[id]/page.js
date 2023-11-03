import { BillboardDetails } from "@/components/pages"
import { BASE_URL } from "@/utils/service";
import globalMetadata from '../../globalMetadata';

async function getBillboard(id) {
	const billboard = await fetch(`${BASE_URL}/api/billboard/${id}/`).then(res => res.json());

	return billboard?.data;
}

export async function generateStaticParams() {
	const billboards = await fetch(BASE_URL + '/api/all-billboards', { next: { revalidate: 3600 } }).then(r => r.json());
	return billboards?.data?.map(b => ({ id: b.id.toString() }));
}

const page = async ({ params }) => {
	const data = await getBillboard(params.id);

	return <BillboardDetails data={data} />
}

export default page;

export const generateMetadata = async ({ params }) => {
	const data = await getBillboard(params?.id);
	return globalMetadata(data.title_meta, data.desc_meta);
}