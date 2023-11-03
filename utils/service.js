import axios from "axios";

// export const BASE_URL = "http://127.0.0.1:8000";

export const BASE_URL = "https://admin.billboardzarin.com";

export const relativeToAbsoluteURL = (url) => {
  if (!url) return "";
  return `${BASE_URL}${url}`;
};

export const getLastBillboards = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/api/billboards`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => resolve([]));
  });
};

export const addOrder = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/api/set-order/`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => resolve([]));
  });
};

export const getBanners = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/banners`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => resolve([]));
  });
};

export const getNews = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/news/`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => resolve([]));
  });
};

export const getNewsWithLimit = (limit) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/news-with-limit/${limit}`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => resolve([]));
  });
};

export const getNewsById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/news/${id}`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => resolve([]));
  });
};

export const getCities = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/cities/`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => reject(err));
  });
};

export const getBillboardById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/billboard/${id}/`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => reject(err));
  });
};
export const getBillboardWithRange = (range) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/billboards-with-range/${range}/`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => reject(err));
  });
};

export const getStructureTypes = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/structure-types/`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => reject(err));
  });
};

export const getLastBlogs = (range) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/blogs-with-range/${range}/`)
      .then((res) => resolve(res.data.data))
      .catch((err) => reject(err));
  });
};

export const getOurCustomers = (range) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/our-customers`)
      .then((res) => resolve(res.data.data))
      .catch((err) => reject(err));
  });
};

export const getBlogs = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/all-blogs`)
      .then((res) => resolve(res.data.data))
      .catch((err) => reject(err));
  });
};

export const getBlogById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/blog/${id}/`)
      .then((res) => resolve(res.data.data))
      .catch((err) => reject(err));
  });
};

export const filterBillboards = (filters = {}, page, perPage) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${BASE_URL}/api/billboards${page && perPage ? `?page=${page}&per_page=${perPage}` : ""}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: filters,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => reject(err));
  });
};

export const getAllBillboards = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/all-billboards`)
      .then((res) => resolve(res.data.data))
      .catch((err) => reject(err));
  });
};
