// brand details
const brands = [
    {
        id: 1,
        title: "LG Commercial",
        logo: "/assets/img/brand/brand1.png",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        images: [
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
        ],
        images: [
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
        ],
    },

    {
        id: 2,
        title: "Maytag Commercial",
        logo: "/assets/img/brand/brand2.png",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        images: [
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
        ],
        images: [
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
        ],
    },

    {
        id: 3,
        title: "Whirlpool",
        logo: "/assets/img/brand/brand3.png",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        images: [
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
        ],
        images: [
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
        ],
    },

    {
        id: 4,
        title: "Dexter Laundry",
        logo: "/assets/img/brand/brand4.png",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        images: [
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
        ],
        images: [
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
        ],
    },

    {
        id: 5,
        title: "Speed Queen",
        logo: "/assets/img/brand/brand5.png",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        images: [
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
        ],
        images: [
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
        ],
    },

    {
        id: 6,
        title: "ADC",
        logo: "/assets/img/brand/brand7.png",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        images: [
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
        ],
        images: [
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
        ],
    },

    {
        id: 7,
        title: "GE Appliances",
        logo: "/assets/img/brand/brand8.png",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        images: [
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
            "/assets/img/slider1.png",
        ],
        images: [
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
            "/assets/img/slider2.png",
        ],
    },
];

// show brand details
const handleBrandDetails = (currentBrand) => {
    const brandTitle = document.getElementById("brand-title");
    const brandDescription = document.getElementById("brand-description");
    const brandDetailsImg1 = document.getElementById("brand-details-img-1");
    const brandDetailsImg2 = document.getElementById("brand-details-img-2");
    const brandDetailsImg3 = document.getElementById("brand-details-img-3");
    const brandDetailsImg4 = document.getElementById("brand-details-img-4");

    brandTitle.innerHTML = currentBrand.title;
    brandDescription.innerHTML = currentBrand.description;
    brandDetailsImg1.src = currentBrand.images[0];
    brandDetailsImg2.src = currentBrand.images[1];
    brandDetailsImg3.src = currentBrand.images[2];
    brandDetailsImg4.src = currentBrand.images[3];
};

// create brand slider
const brandSlider = document.getElementById("brand-slider");
const sliderContainer = document.createElement("div");
sliderContainer.classList.add("brand-active");
sliderContainer.classList.add("owl-carousel");
sliderContainer.classList.add("owl-theme");

brands.forEach((brand) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.classList.add("brand2-item");
    item.classList.add("cursor-pointer");
    item.dataset.brandId = brand.id;
    item.onclick = function () {
        handleBrandDetails(brand);
    };
    item.innerHTML = `<img src='${brand.logo}' alt="">`;
    sliderContainer.appendChild(item);
});

brandSlider.appendChild(sliderContainer);

setTimeout(() => {
    const allLogos = document.querySelectorAll(".brand2-item");
    allLogos.forEach((logo) => {
        logo.addEventListener("click", () => {
            const brandId = logo.dataset.brandId;
            const currentBrand = brands.find(
                (brand) => brand.id === parseInt(brandId)
            );
            handleBrandDetails(currentBrand);
        });
    });
}, 5000);
