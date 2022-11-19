import "./board.css";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <div className="board">
      <h2 className="board-title">Get the Best Connections You Deserve!</h2>

      <span className="board-signup-span">
        <Link to="/signup" className="board-signup"></Link>
      </span>
    </div>
  );
};
export default Board;
