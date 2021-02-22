// Tariffs slider
$("#commentSlider").slick({
  arrow: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 1000,
});

// Bootom slider
$("#slider").slick({
  arrow: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 1000,
});

$(".howGet_box__body-right").slick({
  arrow: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 1000,
  responsive: [
    {
      breakpoint: 4000,
      settings: "unslick",
    },
    {
      breakpoint: 700,
      settings: {
        arrow: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
      },
    },
  ],
});

$(".sunnyBookGift_bottom__box").slick({
  arrow: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 1000,
  responsive: [
    {
      breakpoint: 4000,
      settings: "unslick",
    },
    {
      breakpoint: 700,
      settings: {
        arrow: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
      },
    },
  ],
});

window.addEventListener("resize", () => {
  $(".howGet_box__body-right").slick({
    arrow: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 700,
        settings: {
          arrow: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 1000,
        },
      },
    ],
  });

  $(".sunnyBookGift_bottom__box").slick({
    arrow: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 700,
        settings: {
          arrow: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 1000,
        },
      },
    ],
  });
});

document.querySelector("#copy").addEventListener("click", () => {
  let copyLink = document.querySelector("#copyText");
  let field = document.createElement("input");
  field.value = "0x18eb245fd19cb98a639ab0850b831efe3c26e0bd";

  copyLink.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();

  let modal = document.querySelector(".modal");
  modal.style.zIndex = 1;
  modal.style.opacity = 1;

  setTimeout(() => {
    modal.style.opacity = 0;
  }, 3000);

  setTimeout(() => {
    modal.style.zIndex = -1;
  }, 4000);
});

document.querySelector(".mobButton").addEventListener("click", () => {
  document.querySelector(".mobalMenu").style.left = 0;
  document.querySelector("body").style.overflow = "hidden";
});

document.querySelector(".cross").addEventListener("click", () => {
  document.querySelector(".mobalMenu").style.left = "560px";
  document.querySelector("body").style.overflow = "auto";
});

let link = document.querySelectorAll(".mobalMenu a");

link.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".mobalMenu").style.left = "560px";
    document.querySelector("body").style.overflow = "auto";
  });
});
