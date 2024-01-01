/* 
Bu fonksiyon şu şekilde çalışır:

asyncHandler adlı bu fonksiyon, asenkron olarak işaretlenmiş bir işlevi kabul eder (fn olarak adlandırılır).

Bu fonksiyon bir middleware fonksiyonu döndürür. Bu middleware fonksiyonu, req, res, ve next parametrelerini alır. Bu middleware, asenkron olarak işaretlenmiş fonksiyonu çalıştırır ve bu fonksiyonun geri dönüş değerini bekler.

Promise.resolve() kullanarak işlevi çalıştırır ve catch() kullanarak olası bir hatayı next aracılığıyla Express'e iletir.

Bu yapı, herhangi bir route işlevinde asenkron bir işlevi kullanırken, her seferinde try-catch bloğu kullanmak zorunda kalmamak için kullanışlıdır. Bunun yerine, hata yönetimini otomatik olarak middleware olarak ele alır ve hataları next fonksiyonuna iletir, bu da Express'in hatayı yakalamasına ve uygun şekilde işlemesine olanak tanır.
*/

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
