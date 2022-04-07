import React, { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  console.log("App");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  /**
   * useCallback(component,[監視対象]) : 再レンダリングされてもcallbackを再生成しないようにする
   * アロー関数は再レンダリングされると同じ名前、処理内容でも別の関数として再生成される。
   * 再生成された関数が別の値としてpropsに渡ることでmemo化した子componentも再レンダリングされてしまう。
   * 第二引数の配列の監視対象が変化した場合のみcallbackを再生成する。
   */

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
