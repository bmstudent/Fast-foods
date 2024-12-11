let products = document.querySelector("#products");

let data = [
    {
        img: "https://i.ytimg.com/vi/sKfFS9AdciI/maxresdefault.jpg",
        title: "Burger",
        price: "15$",
    },
    {
        img: "https://slkfood.ru/wp-content/uploads/2023/03/%D0%A5%D0%BE%D1%82-%D0%B4%D0%BE%D0%B3-2.jpg",
        title: "Hot-Dog",
        price: "5$",
    },
    {
        img: "https://i.pinimg.com/originals/db/92/d1/db92d16282755b7969a2da3a5b2b3d85.jpg",
        title: "Donar",
        price: "10$",
    },
    {
        img: "https://distfood.ru/upload/medialibrary/b08/b08d136c771923dc887fa4b54f721c40.jpg",
        title: "Pizza",
        price: "30$",
    },
    {
        img: "https://avatars.mds.yandex.net/get-altay/9717139/2a00000188e2e30a8af679ea94d6d48bc52b/orig",
        title: "Lavash",
        price: "10$",
    },
    {
        img: "https://medialeaks.ru/wp-content/uploads/2020/10/1-3-1-1.jpg",
        title: "KFC",
        price: "25$",
    },
    {
        img: "https://i.ytimg.com/vi/-jHk9geBFgM/maxresdefault.jpg",
        title: "Hamburger",
        price: "18$",
    },
    {
        img: "https://i.ytimg.com/vi/tcmBLEqiVZU/maxresdefault.jpg",
        title: "Corndog",
        price: "5$",
    },
    {
        img: "https://avatars.mds.yandex.net/get-ydo/2375918/2a0000017c78d95eb21cf0c7c225a9517fda/diploma",
        title: "Sandwich",
        price: "7$",
    },
    {
        img: "https://avatars.mds.yandex.net/get-mpic/12022975/2a0000018fe528074ec6271902399bba2f74/orig",
        title: "Sandwich",
        price: "10$",
    },
    {
        img: "https://avatars.mds.yandex.net/get-altay/6065996/2a000001811f420592822fadc7181ae4d502/XXL_height",
        title: "Fri",
        price: "2$",
    },
    {
        img: "https://kuda-mo.ru/uploads/11b9e1d6e2474ba48105e793be76722a.jpeg",
        title: "Barbeque",
        price: "35$",
    },
];

for (let item of data) {
    products.innerHTML += `
    <article class="border rounded-lg bg-white overflow-hidden">
  <img src="${item.img}" alt="" class="w-full h-44 object-cover" />
  <div class="p-2">
    <h1 class="text-lg font-medium text-gray-900">${item.title}</h1>
    <h2 class="text-blue-700 font-bold text-xl my-1">${item.price}</h2>
    <button
      class="bg-gray-900 text-white p-1 w-full rounded-md mt-2 active:scale-95 duration-300"
    >
      Add to cart
    </button>
  </div>
</article>

    `
}