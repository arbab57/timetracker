const putData = async (url, data) => {
  const AccessToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authentication: `Bearer ${AccessToken}`,
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default putData;
