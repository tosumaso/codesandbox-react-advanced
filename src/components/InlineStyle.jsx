export const InlineStyle = () => {
  //InlineStyle: デフォルトのcss追加方法。プロパティはキャメルケース、値は文字列で書く
  const containerStyle = {
    border: "solid 20x blue",
    borderRadius: "20px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "red"
  };
  const buttonStyle = {
    backgroundColor: "green",
    border: "none",
    padding: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inline Styles</p>
      <button style={buttonStyle}>!!!</button>
    </div>
  );
};
