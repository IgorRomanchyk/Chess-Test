import React from "react";
import testSeven from "constants/ChessTest_7";
import ChessTest from "components/ChessTest/ChessTest";

function Test() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/O2JU9yPaXw8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <p className="text">После просмотра обущающего урока пройдите тест.</p>
        <p className="text">
          Будьте внимателены, правильных ответов может быть несколько.
        </p>
      </div>
      <ChessTest chessTest={testSeven} link="/test8" />
    </div>
  );
}

export default Test;
