import React from "react";
import testTwo from "constants/ChessTest_2";
import ChessTest from "components/ChessTest/ChessTest";

function Test() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <iframe
          className="video"
          title="YouTube video player"
          src="https://www.youtube.com/embed/ly6V7AMxxQE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <p className="text">После просмотра обущающего урока пройдите тест.</p>
        <p className="text">
          Будьте внимателены, правильных ответов может быть несколько.
        </p>
      </div>
      <ChessTest chessTest={testTwo} link="/test3" />
    </div>
  );
}

export default Test;
