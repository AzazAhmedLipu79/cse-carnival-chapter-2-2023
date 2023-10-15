import Cookies from "js-cookie";
export const check = () => {
  const found = Cookies.get("dammn_token");
  if (found) {
    return true;
  } else {
    return false;
  }
};
