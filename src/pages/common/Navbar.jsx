import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "pink",
      }}
    >
      <Link to="/janghwan">장환</Link>
      <Link to="/seulgi">슬기</Link>
      <Link to="/suyeon">수연</Link>
      <Link to="/yoonjung">윤정</Link>
    </div>
  );
};
export default Navbar;
