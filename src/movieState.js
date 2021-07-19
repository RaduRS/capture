//Import Images
import athlete from "./img/athlete-small.png";
import athlete2 from "./img/athlete2.png";
import theracer from "./img/theracer-small.png";
import theracer2 from "./img/the-racer2.jpg";
import goodtime from "./img/goodtimes-small.png";
import goodtime2 from "./img/good-times2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly a masterpiece",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem soluta distinctio cupiditate",
        },
        {
          title: "Fresh look to a brutal sport",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem soluta distinctio cupiditate",
        },
        {
          title: "It's not that good",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem soluta distinctio cupiditate",
        },
      ],
    },

    {
      title: "The Racer",
      mainImg: theracer,
      secondaryImg: theracer2,
      url: "/work/the-racer",
      awards: [
        {
          title: "Truly a masterpiece",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem soluta distinctio cupiditate",
        },
        {
          title: "Fresh look to a brutal sport",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem soluta distinctio cupiditate",
        },
        {
          title: "It's not that good",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem soluta distinctio cupiditate",
        },
      ],
    },

    {
      title: "Good Times",
      mainImg: goodtime,
      secondaryImg: goodtime2,
      url: "/work/good-times",
      awards: [
        {
          title: "Truly a masterpiece",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem soluta distinctio cupiditate",
        },
        {
          title: "Fresh look to a brutal sport",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem soluta distinctio cupiditate",
        },
        {
          title: "It's not that good",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem soluta distinctio cupiditate",
        },
      ],
    },
  ];
};
