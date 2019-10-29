async function ggg() {
  const res = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=iphone');
  return res.json();
}

ggg().then((data) => {
  console.log(data);
});
