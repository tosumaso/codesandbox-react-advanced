import styled from "styled-components";

export const StyledComponents = () => {
  /**StyledComponents: divタグ、cssをjsで作成し、タグに変数を書き込む
   * 1. styled-componentsライブラリをインストール
   * 2. import 変数 from "styled-components"でimport
   * 3. const cssの変数 = importの変数.作成するhtmlタグ`css`の形でhtml,cssを作成
   * 4. jsx内のhtmlタグにdivやpタグの代わりに作成した要素を書き込む
   */
  return (
    <Container>
      <Title>Styled Components</Title>
      <Button>!!!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 20x blue;
  border-radius: 20px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: red;
`;

const Button = styled.button`
  background-color: green;
  border: none;
  padding: 8px;
  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;
