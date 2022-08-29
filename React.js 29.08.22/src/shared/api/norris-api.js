import axios from "axios";

const getJoke = async () => {
  const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
  return data.value;
};

export const norrisApi = { getJoke };
