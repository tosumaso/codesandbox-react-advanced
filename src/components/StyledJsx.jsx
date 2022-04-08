export const StyledJsx = () => {
  /** StyledJsx: jsxファイルにcssを貼り付ける
   * styleタグで囲い、{`style`}のように全体を囲う。
   * 記述は普通のcss,scss,sassと同じ
   */
  return (
    <>
      <div className="container">
        <p className="title">StyledJsx</p>
        <button className="button">!!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 20x blue;
          border-radius: 20px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: red;
        }
        .button {
          background-color: green;
          border: none;
          padding: 8px;
        }

        .button:hover {
          cursor: pointer;
          background-color: white;
        }
      `}</style>
    </>
  );
};
