import { DefaultApi } from "./dist/client/api";

(() => {
  new DefaultApi().findPets(["hoge"], 100).then((result) => {
    const { data } = result;
    data.map(console.log);
  });
})();
