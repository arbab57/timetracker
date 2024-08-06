const postData = async (url, data) => {
  const AccessToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch(url, {
      method: "POST",
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

export default postData;
