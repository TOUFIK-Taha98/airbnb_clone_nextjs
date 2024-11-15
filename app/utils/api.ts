export const getExplore = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.log(error);
    //logging in the server side (in  the terminal on the local machine)
  }
};

export const getLive = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const liveData = await res.json();
    return liveData;
  } catch (error) {
    console.log(error);
    //logging in the server side (in  the terminal on the local machine)
  }
};

export const getSearchResults = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const searchResultData = await res.json();
    return searchResultData;
  } catch (error) {
    console.log(error);
  }
};
