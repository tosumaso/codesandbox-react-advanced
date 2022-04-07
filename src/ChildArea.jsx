import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

/**
 * memo(component) : 親componentがレンダリングされても子componentはレンダリングされなくなる
 * 基本子componentは不要なレンダリング防止のためmemo()を使うべき
 * 子要素に渡されるpropsが変更された場合のみレンダリングされるようになる
 */

export const ChildArea = memo((props) => {
  const { open,onClickClose } = props;
  console.log("childarea");

  const data = [...Array(500).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
