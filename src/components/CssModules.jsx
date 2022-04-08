import classes from "./CssModules.module.css";
export const CssModules = () => {
  /**Css Modules: コンポーネント毎にcssのスコープを分けられる
   * 1.node-sassライブラリをインストール(scssを使う場合)
   * 2. ファイル名.module.[css or scss or sass]というcssファイルを作成。
   * 3. import 変数 from "相対パス"で読み込む。
   * 4.変数.セレクタでcssを付与
   */
  return (
    <div className={classes.container}>
      <p className={classes.title}>CssModules</p>
      <button className={classes.button}>!!!</button>
    </div>
  );
};
