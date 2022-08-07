import jwtDecode from "jwt-decode";

export default async function createOrGetUser(response, addUser) {
  const decoded = jwtDecode(response.credential);

  const { name, picture, sub } = decoded;
  console.log(decoded);
  const user = {
    _id: sub,
    userName: name,
    image: picture,
  };

  addUser(user);
}
