import article, { initialState } from "src/reducers/article";
import { refreshArticle, REFRESH_ARTICLE } from "src/actions/article";

describe("Je veux tester le reducer / article", () => {
  // https://jestjs.io/fr/docs/api#testtodoname
  // https://jestjs.io/fr/docs/expect
  test.todo(`
  - Je teste le reducer article.
  - Je vois si article est bien une fonction.
  - Je teste le retour du reducer.
  - Je teste que l'execution du reducer modifie bien le test`);
  test("Doit être une fonction", () => {
    expect(typeof article).toBe("function");
  });
  test("le reducer doit retourner le state, donc un objet", () => {
    expect(typeof article()).toBe("object");
  });
  describe("Je teste l'execution d'article", () => {
    test("Doit retourner un objet vide", () => {
      expect(article({})).toEqual({});
      // je compare les 2 objets et pas les références
      expect(article({})).not.toBe({});
    });
  });
  test("doit retourner le state initial sans argument", () => {
    // bien penser à l'import et à l'export de l'initialState
    expect(article()).toBe(initialState);
  });
  // On teste une des actions
  test(REFRESH_ARTICLE, () => {
    const fakeData = { id: 0 };
    const fakeAction = refreshArticle({ id: 456 });
    console.log(fakeAction);
    expect(article(fakeData, fakeAction)).toEqual({
      id: fakeAction.payload.id,
    });
  });
});
