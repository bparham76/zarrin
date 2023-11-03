import { BASE_URL } from "@/utils/service";

export async function getCities() {
    const cities = await fetch(BASE_URL + '/api/cities/').then(res => res.json());

    return cities?.data;
}

export async function getStates() {
    const data = await fetch(BASE_URL + '/api/states/').then(res => res.json());

    return data?.data;
}

export async function getBillboardsData(filters = {}, page = 1, perPage = 16) {
    const data = await fetch(`${BASE_URL}/api/billboards?page=${page}&per_page=${perPage}`,
        {
            method: "post",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams(filters).toString()
        }).then(res => res.json());
    
    return [data?.data, data?.pagination];
}

export async function getBillboardsByCity(city = '', page = 1, perPage = 16) {
    const cities = await getCities();
    const cityId = await cities?.find(c => c.name == city)?.id;

    const data = await fetch(`${BASE_URL}/api/billboards?page=${page}&per_page=${perPage}`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: 'city__in='+cityId
        }).then(res => res.json());
    
    return [data?.data, data?.pagination];
}