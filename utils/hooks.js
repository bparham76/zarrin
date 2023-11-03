import { useRouter } from "next/router";

export const useFilter = (keys, pathname = "/filter") => {
  const router = useRouter();

  const removeFilter = (filterKey) => {
    delete router.query[filterKey];
    router.push({
      pathname: pathname,
      query: router.query,
    });
  };
  const setFilter = (key) => (parameter) => {
    if (parameter === "*") {
      removeFilter(key);
    } else if (router.query[key] !== String(parameter)) {
      router.push({
        pathname: pathname,
        query: { ...router.query, [key]: parameter },
      });
    }
  };

  const generatedKeys = keys.reduce((acc, curr) => {
    acc[curr] = {
      set: setFilter(curr),
    };
    return acc;
  }, {});
  const activeFilter = router.query;
  return { keys: generatedKeys, filters: activeFilter };

  // const removeFilter = (filterKey) => {
  //   delete router.query[filterKey];
  //   router.push({
  //     pathname: pathname,
  //     query: router.query,
  //   });
  // };
  // const setFilter = (parameter) => {
  //   if (router.query[key] !== String(parameter)) {
  //     router.push({
  //       pathname: pathname,
  //       query: { ...router.query, [key]: parameter },
  //     });
  //   } else {
  //     removeFilter(key);
  //   }
  // };
  // const setToggle = () => {
  //   if (!router.query[key]) {
  //     router.push({
  //       pathname: pathname,
  //       query: { ...router.query, [key]: true },
  //     });
  //   } else {
  //     removeFilter(key);
  //   }
  // };
  // const activeFilter = router?.query[key];
  // return { setFilter, activeFilter, removeFilter, setToggle };
};
