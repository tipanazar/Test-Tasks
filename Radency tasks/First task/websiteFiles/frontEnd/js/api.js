const baseUrl = "http://localhost:3000/notes";

export const getNotes = () => {
  return fetch(baseUrl).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    // console.log(response);
    return response.json();
  });
};
