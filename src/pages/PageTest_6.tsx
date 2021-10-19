import React from "react";
import testSix from "constants/ChessTest_6";
import ChessTest from "components/ChessTest/ChessTest";

function Test() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/68jMT1TtMag"
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
      <ChessTest chessTest={testSix} link="/test7" />
    </div>
  );
}

export default Test;
