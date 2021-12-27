import article, { initialState } from "src/reducers/article";
import { refreshArticle, REFRESH_ARTICLE } from "src/actions/article";

describe("Je veux tester le reducer / article", () => {
  // https://jestjs.io/fr/docs/api#testtodoname
  // https://jestjs.io/fr/docs/expect
  test.todo(`
  - Je test le reducer article.
  - Je vois si article est bien une fonction.
  - Je test le retour du reducer.
  - Je test que l'execution du reducer modifie bien le test`);
  test("Doit être une fonction", () => {
    expect(typeof article).toBe("function");
  });
  test("le reducer doit retourné le state, donc un objet", () => {
    expect(typeof article()).toBe("object");
  });
  describe("Je test l'execution d'article", () => {
    test("Doit retourné un objet vide", () => {
      expect(article({})).toEqual({});
      // je compare les 2 objets et pas les références
      expect(article({})).not.toBe({});
    });
  });
  test("doit retourné le state initial sans argument", () => {
    // bien pensé à l'import et de l'export de l'initialState
    expect(article()).toBe(initialState);
  });
  // On test une des actions
  test(REFRESH_ARTICLE, () => {
    const fakeData = { id: 0 };
    const fakeAction = refreshArticle({ id: 456 });
    console.log(fakeAction);
    expect(article(fakeData, fakeAction)).toEqual({
      id: fakeAction.payload.id,
    });
  });
});
