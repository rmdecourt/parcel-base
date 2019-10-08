const f = async () => {
  const res = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=iphone');
  await res.json();
};

console.log(f());
