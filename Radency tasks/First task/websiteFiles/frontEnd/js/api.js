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

export const addNote = (formData) => {
  return fetch(baseUrl, { method: "post", body: formData.toString() }).then(
    (response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }

      // return response.json();
    }
  );
};
