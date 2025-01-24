"use client";

import Image from "next/image";
// src/app/page.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

import DM from "../../../public/assets/home/Digital-Marketing-Assets 1.png";
import EMP from "../../../public/assets/home/Event-Coordination-Assets 1.png";
import VP from "../../../public/assets/home/Visual-Production-Assets 1.png";
import AVP from "../../../public/assets/home/Audio-Visual-Production 1.png";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ["campaigns.", "events.", "photos.", "videos. "];
  const button = ["WATCH OUR SHOWREEL", "BOOK A SHOOT", "JOIN US"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [items.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % button.length);
    }, 3000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [button.length]);

  const capabilities = [
    {
      title: "Digital Marketing",
      description:
        "With in-depth market research, we execute data-driven strategies to deliver effective marketing campaigns and experiences to your target audience.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.7106 54.7136L55.2709 40.479C55.8523 39.8556 56.2582 39.0885 56.4473 38.2561C56.6365 37.4236 56.602 36.5557 56.3474 35.7411C56.0928 34.9264 55.6272 34.1942 54.9983 33.6193C54.3693 33.0443 53.5995 32.6473 52.7676 32.4688L48.8387 19.9466C48.182 17.8455 44.8311 17.7553 41.6319 19.6142L3.03832 42.0112C2.61551 42.2973 2.2963 42.7131 2.12837 43.1964C1.96044 43.6797 1.9528 44.2045 2.10659 44.6925L7.24791 61.1635C7.39525 61.6564 7.69833 62.0878 8.11143 62.3926C8.52452 62.6975 9.02521 62.8592 9.53793 62.8534L16.8009 62.245C16.8387 62.3395 16.8857 62.4301 16.9412 62.5154L28.8852 81.0086C29.1868 81.4113 29.6035 81.7122 30.0798 81.8712C30.5561 82.0302 31.0694 82.0398 31.5513 81.8986L35.7721 80.5523C35.9808 80.5131 36.1763 80.4221 36.341 80.2876C36.5057 80.1532 36.6344 79.9796 36.7152 79.7826C36.7961 79.5856 36.8266 79.3715 36.804 79.1596C36.7815 78.9477 36.7065 78.7449 36.586 78.5695L25.5737 61.4902L54.0081 59.113C57.6676 58.8032 60.373 56.8148 59.7106 54.7136Z"
            fill="#A30A24"
          />
          <path
            d="M67.5292 9.58905e-06C65.281 -8.14212e-05 63.0685 0.564542 61.0934 1.64241C59.1184 2.72028 57.4435 4.27712 56.2215 6.17102C54.9995 8.06492 54.2693 10.2356 54.0974 12.4853C53.9254 14.735 54.3173 16.9921 55.2371 19.0509L53.0425 26.0415C52.9721 26.2349 52.9559 26.444 52.9955 26.646C53.0352 26.8481 53.1293 27.0353 53.2676 27.1875C53.4058 27.3396 53.583 27.4508 53.7799 27.509C53.9767 27.5671 54.1856 27.57 54.384 27.5174L61.9725 25.8274C63.804 26.6627 65.7986 27.0756 67.81 27.0359C69.8213 26.9962 71.7982 26.5049 73.5956 25.5981C75.393 24.6913 76.9652 23.392 78.1967 21.7955C79.4282 20.1991 80.2878 18.3461 80.7124 16.3726C81.137 14.3991 81.1158 12.3552 80.6503 10.3911C80.1848 8.42689 79.2869 6.59229 78.0225 5.02197C76.758 3.45165 75.1592 2.18549 73.3434 1.31646C71.5276 0.447431 69.5409 -0.0023949 67.5292 9.58905e-06ZM75.1401 21.7548L70.5264 20.7352C68.7769 21.5341 66.8037 21.6918 64.9503 21.1808C63.0969 20.6698 61.4808 19.5226 60.3836 17.9388C59.2863 16.355 58.7774 14.4352 58.9454 12.5136C59.1135 10.592 59.9478 8.79044 61.3032 7.42271C62.6586 6.05499 64.4491 5.20777 66.3628 5.0286C68.2765 4.84944 70.1923 5.34969 71.7763 6.44223C73.3604 7.53477 74.5123 9.15036 75.0316 11.0076C75.5509 12.8649 75.4046 14.8461 74.6181 16.6062L75.9539 20.8422C75.9954 20.9603 76.0045 21.0874 75.9802 21.2101C75.956 21.3329 75.8993 21.4469 75.8161 21.5402C75.7329 21.6335 75.6263 21.7026 75.5074 21.7404C75.3884 21.7781 75.2616 21.7831 75.1401 21.7548Z"
            fill="#A30A24"
          />
          <path
            d="M70.6724 12.0885C70.6924 11.5395 70.4974 11.0045 70.1291 10.5981C69.7609 10.1917 69.2487 9.94614 68.7023 9.9141C68.2967 9.91349 67.9018 10.0449 67.5769 10.2887C67.2521 10.5325 67.0147 10.8754 66.9006 11.266C66.7824 10.8796 66.5434 10.5416 66.2189 10.3022C65.8944 10.0628 65.5016 9.93458 65.0989 9.93663C64.5525 9.96867 64.0403 10.2142 63.672 10.6206C63.3038 11.027 63.1088 11.562 63.1288 12.111C63.1288 14.0318 66.0699 16.2344 66.7939 16.4653H66.996C67.7313 16.2118 70.6724 14.0093 70.6724 12.0885Z"
            fill="#A30A24"
          />
        </svg>
      ),
      image: DM, // Replace with your image path or import
    },
    {
      title: "Events Management and Production",
      description:
        "With in-depth market research, we execute data-driven strategies to deliver effective marketing campaigns and experiences to your target audience.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5762 54.4229C29.4304 54.4229 30.9335 52.9162 30.9335 51.0576C30.9335 49.199 29.4304 47.6923 27.5762 47.6923C25.722 47.6923 24.2189 49.199 24.2189 51.0576C24.2189 52.9162 25.722 54.4229 27.5762 54.4229Z"
            fill="#A30A24"
          />
          <path
            d="M41 54.4229C42.8542 54.4229 44.3573 52.9162 44.3573 51.0576C44.3573 49.199 42.8542 47.6923 41 47.6923C39.1458 47.6923 37.6427 49.199 37.6427 51.0576C37.6427 52.9162 39.1458 54.4229 41 54.4229Z"
            fill="#A30A24"
          />
          <path
            d="M54.4238 54.4229C56.278 54.4229 57.7811 52.9162 57.7811 51.0576C57.7811 49.199 56.278 47.6923 54.4238 47.6923C52.5696 47.6923 51.0665 49.199 51.0665 51.0576C51.0665 52.9162 52.5696 54.4229 54.4238 54.4229Z"
            fill="#A30A24"
          />
          <path
            d="M10.2554 1C7.53769 1.00714 4.93332 2.09249 3.01161 4.01879C1.08989 5.9451 0.00712379 8.55568 0 11.2799V82H71.75C74.4699 82 77.0784 80.9169 79.0017 78.9891C80.9249 77.0612 82.0054 74.4465 82.0054 71.7201V1H10.2554ZM54.7638 27.679C55.892 27.6801 56.9945 28.0164 57.932 28.6454C58.8695 29.2745 59.5999 30.168 60.0309 31.2131C60.4619 32.2581 60.5741 33.4078 60.3534 34.5168C60.1326 35.6258 59.5888 36.6443 58.7907 37.4436C57.9926 38.2428 56.976 38.787 55.8695 39.0072C54.7629 39.2274 53.6161 39.1139 52.5739 38.6809C51.5317 38.2478 50.641 37.5148 50.0143 36.5745C49.3877 35.6342 49.0532 34.5287 49.0532 33.3978C49.0532 31.8811 49.6543 30.4265 50.7242 29.354C51.7942 28.2815 53.2453 27.679 54.7584 27.679H54.7638ZM29.935 27.679C31.0631 27.6801 32.1656 28.0164 33.1032 28.6454C34.0407 29.2745 34.7711 30.168 35.2021 31.2131C35.6331 32.2581 35.7453 33.4078 35.5245 34.5168C35.3038 35.6258 34.76 36.6443 33.9619 37.4436C33.1638 38.2428 32.1472 38.787 31.0406 39.0072C29.9341 39.2274 28.7872 39.1139 27.745 38.6809C26.7028 38.2478 25.8121 37.5148 25.1855 36.5745C24.5588 35.6342 24.2243 34.5287 24.2243 33.3978C24.2236 32.6466 24.3707 31.9026 24.6572 31.2085C24.9436 30.5143 25.3638 29.8836 25.8938 29.3524C26.4237 28.8212 27.0529 28.4 27.7454 28.1129C28.4379 27.8257 29.1801 27.6783 29.9296 27.679H29.935ZM69.1969 50.5382C69.1856 52.6765 68.3328 54.724 66.8238 56.2356C65.3148 57.7471 63.2716 58.6006 61.1384 58.6106H36.6711L30.194 65.4981L29.9997 58.6106H20.867C18.7347 58.5992 16.6929 57.7451 15.1851 56.2337C13.6773 54.7223 12.8252 52.6756 12.8138 50.5382V49.8673C12.8238 47.7289 13.6752 45.6809 15.1832 44.1683C16.6912 42.6557 18.7338 41.8008 20.867 41.7895H61.133C63.2672 41.7994 65.3111 42.6537 66.8203 44.1664C68.3294 45.6791 69.1816 47.728 69.1916 49.8673L69.1969 50.5382Z"
            fill="#A30A24"
          />
        </svg>
      ),
      image: EMP, // Replace with your image path or import
    },
    {
      title: "Visual Production",
      description:
        "With in-depth market research, we execute data-driven strategies to deliver effective marketing campaigns and experiences to your target audience.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.5583 14.4057C39.885 14.4057 35.3166 15.7899 31.4309 18.3834C27.5452 20.9769 24.5167 24.663 22.7283 28.9758C20.9399 33.2885 20.4719 38.0342 21.3837 42.6126C22.2954 47.191 24.5458 51.3965 27.8503 54.6974C31.1548 57.9982 35.3651 60.2461 39.9486 61.1568C44.5321 62.0675 49.283 61.6001 53.6006 59.8137C57.9182 58.0273 61.6085 55.0021 64.2048 51.1207C66.8012 47.2394 68.187 42.6761 68.187 38.008C68.187 31.7483 65.6975 25.7449 61.2663 21.3187C56.8351 16.8924 50.825 14.4057 44.5583 14.4057ZM37.0161 52.4406L38.0936 48.749H50.3658L51.4433 52.4406H37.0161ZM50.0264 47.3876H38.4276L34.9851 34.7523C34.9851 34.7523 36.9245 33.6223 39.2357 29.5917C41.5468 25.5611 42.6835 19.7762 42.6835 19.7762H43.3031C43.3031 19.7762 43.1091 35.1774 43.2492 38.1156C42.8001 38.3341 42.4383 38.6982 42.223 39.1485C42.0078 39.5988 41.9517 40.1087 42.0639 40.5949C42.1761 41.0812 42.45 41.515 42.8409 41.8257C43.2318 42.1364 43.7167 42.3056 44.2162 42.3056C44.7158 42.3056 45.2006 42.1364 45.5915 41.8257C45.9824 41.515 46.2563 41.0812 46.3685 40.5949C46.4808 40.1087 46.4247 39.5988 46.2094 39.1485C45.9941 38.6982 45.6324 38.3341 45.1832 38.1156C45.3233 35.1774 45.1294 19.7762 45.1294 19.7762H45.7489C45.7489 19.7762 46.8695 25.5557 49.1968 29.5971C51.5241 33.6384 53.4473 34.7577 53.4473 34.7577L50.0264 47.3876Z"
            fill="#A30A24"
          />
          <path
            d="M81.8869 32.2393C81.9569 31.4859 81.9623 30.7271 81.9946 29.9684V28.2625C81.9461 27.3423 81.93 26.4221 81.8438 25.5073C81.7028 23.9134 81.4616 22.33 81.1219 20.7664C80.4026 17.4258 79.2773 14.1856 77.771 11.1177C76.84 9.21523 75.7724 7.38259 74.5763 5.6342C74.5386 5.58577 74.5009 5.53734 74.4416 5.45124C73.871 8.00699 73.1037 10.5149 72.1466 12.9527L71.7157 12.4846C67.5111 7.82311 62.2076 4.28454 56.2864 2.19018C54.3229 1.47657 52.2977 0.94516 50.2365 0.602704C49.3099 0.457409 48.3833 0.317496 47.4459 0.231395C46.3684 0.134532 45.291 0.102244 44.2458 0.037669C44.1764 0.0329718 44.1077 0.0203329 44.0411 0H43.1899C43.087 0.0222516 42.9826 0.0366433 42.8775 0.0430503C41.4907 0.0445181 40.1059 0.148843 38.7346 0.355165C37.5818 0.532747 36.4343 0.715711 35.2975 0.968631C31.8028 1.74309 28.441 3.02681 25.3203 4.77858L24.663 5.15527L24.426 5.29518L21.9748 6.86652C21.8642 6.94321 21.747 7.00984 21.6246 7.06562C15.8697 9.38174 10.7477 13.0299 6.68024 17.7098C4.17016 20.5649 2.05723 23.7452 0.39866 27.1647C0.263977 27.4338 0.145457 27.7028 0 28.0096C2.47116 27.2242 5.00272 26.6429 7.56915 26.2714C4.8755 34.9191 4.93476 43.4915 8.10788 51.9401C11.281 60.3888 16.8568 66.9324 24.6415 71.6303L24.8193 71.7486C25.7243 72.2222 26.6222 72.6993 27.5129 73.1801C27.613 73.2309 27.7086 73.2903 27.7984 73.3577C31.8698 76.6304 36.5716 79.0318 41.6115 80.4125C43.6538 80.9936 45.7402 81.4076 47.8499 81.6502C48.6796 81.7417 49.5092 81.8332 50.3389 81.8977C50.9746 81.9408 51.6157 81.9354 52.2567 81.9569C52.3591 81.9569 52.4615 81.9569 52.5692 82H53.1618C53.2318 82 53.3019 81.9677 53.3665 81.9623C54.0561 81.9623 54.7457 81.93 55.4299 81.8977C55.807 81.8977 56.1841 81.8386 56.5989 81.8063C54.6881 80.033 52.9209 78.1112 51.314 76.0591C59.961 74.2704 67.7065 69.5099 73.2025 62.6058C78.8592 55.6102 81.6175 47.506 81.736 38.5085V38.4493L81.6983 37.3138C81.6983 36.7757 81.6444 36.1999 81.6175 35.6402C81.5987 35.402 81.5987 35.1627 81.6175 34.9245C81.6768 34.0312 81.8168 33.1379 81.8869 32.2393ZM70.3688 60.2973C65.3971 66.5416 58.3882 70.844 50.5651 72.4536C51.0766 69.9263 51.3828 67.3618 51.481 64.7853C51.4342 64.8089 51.3892 64.8358 51.3463 64.866C49.1231 66.5114 46.6566 67.8005 44.0357 68.6867C42.3403 69.2843 40.5899 69.7133 38.8101 69.9674C37.8942 70.0912 36.9676 70.1773 36.0518 70.2634C35.6347 70.3064 35.2158 70.3279 34.7965 70.328C34.0477 70.328 33.2935 70.328 32.5393 70.2903C31.785 70.2526 31.047 70.1719 30.3035 70.0966C29.7652 70.0875 29.2362 69.9549 28.7574 69.7091C28.6119 69.623 28.4557 69.5585 28.3048 69.4777L26.3977 68.4607C19.5179 64.4209 14.2521 58.1245 11.4965 50.6433C8.61967 42.9857 8.58196 35.2474 11.0332 27.4069C12.9472 29.1224 14.9995 30.6775 17.1693 32.0563C17.1154 31.4375 17.0454 30.8455 17.0292 30.259C16.9446 28.5455 17.0276 26.8279 17.2771 25.1306C17.471 24.0005 17.6595 22.8651 17.9451 21.7565C18.9984 17.7381 20.8426 13.9696 23.3701 10.6711C23.5686 10.3799 23.8102 10.1204 24.0866 9.90156C24.8031 9.39572 25.5519 8.93831 26.29 8.45938L26.6132 8.24413C33.4353 4.29202 41.4261 2.84717 49.2022 4.15973C57.2831 5.47277 63.9579 9.30424 69.4261 15.3851C67.0006 16.2001 64.6487 17.219 62.3956 18.4309C62.4872 18.4739 62.5411 18.5062 62.6004 18.5278C66.5002 20.2898 69.9431 22.9224 72.6638 26.223C74.6431 28.591 76.2607 31.2386 77.4639 34.0797C77.6661 34.4741 77.8198 34.8915 77.9218 35.3227C78.0242 36.0223 78.0134 36.7326 78.0511 37.443V38.4762C77.9649 46.6396 75.4975 53.9366 70.3742 60.2973H70.3688Z"
            fill="#A30A24"
          />
        </svg>
      ),
      image: VP, // Replace with your image path or import
    },
    {
      title: "Audio-Visual Production",
      description:
        "With in-depth market research, we execute data-driven strategies to deliver effective marketing campaigns and experiences to your target audience.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M77.7656 68.6556H69.5641V48.2134C69.5641 47.3495 69.9049 46.521 70.5115 45.9101C71.118 45.2992 71.9407 44.956 72.7986 44.956H81V65.3931C81.0007 65.8213 80.9175 66.2455 80.7553 66.6413C80.593 67.0371 80.3549 67.3968 80.0545 67.6998C79.7541 68.0028 79.3973 68.2432 79.0045 68.4072C78.6117 68.5712 78.1907 68.6556 77.7656 68.6556Z"
            fill="#A30A24"
          />
          <path
            d="M16.7674 78.2213V80.2552C16.7674 81.2188 17.5431 82 18.4999 82H49.7679C50.7248 82 51.5005 81.2188 51.5005 80.2552V78.2213C51.5005 77.2576 50.7248 76.4765 49.7679 76.4765H18.4999C17.5431 76.4765 16.7674 77.2576 16.7674 78.2213Z"
            fill="#A30A24"
          />
          <path
            d="M45.4414 30.6826C53.5804 30.6826 60.1784 24.0379 60.1784 15.8413C60.1784 7.64468 53.5804 1 45.4414 1C37.3024 1 30.7045 7.64468 30.7045 15.8413C30.7045 24.0379 37.3024 30.6826 45.4414 30.6826Z"
            fill="#A30A24"
          />
          <path
            d="M14.5938 30.6826C21.8496 30.6826 27.7315 24.759 27.7315 17.4519C27.7315 10.1448 21.8496 4.22121 14.5938 4.22121C7.33808 4.22121 1.45614 10.1448 1.45614 17.4519C1.45614 24.759 7.33808 30.6826 14.5938 30.6826Z"
            fill="#A30A24"
          />
          <path
            d="M1 33.0056V60.5304C1 68.0775 7.85845 74.1999 16.3162 74.1999H67.2676V46.6544C67.2676 39.1073 60.4092 33.0056 51.9514 33.0056H1ZM26.0503 44.9302C26.0503 43.3816 27.952 42.4627 29.4026 43.2835L45.0827 52.1522C45.3943 52.3064 45.6557 52.5471 45.8362 52.8457C46.0168 53.1444 46.1089 53.4887 46.1019 53.8383C46.0949 54.1879 45.9891 54.5282 45.7967 54.8193C45.6044 55.1104 45.3336 55.3402 45.0161 55.4818L29.336 63.6432C27.8802 64.402 26.0503 63.4625 26.0503 61.9603V44.9302Z"
            fill="#A30A24"
          />
        </svg>
      ),
      image: AVP, // Replace with your image path or import
    },
  ];

  return (
    <>
      <section className="flex justify-center items-center py-[75px]">
        <div className="container max-w-[1020px]">
          <div className="flex flex-col justify-center items-center text-[#191919] text-center px-8 lg:px-0">
            <p className="text-[15px] font-inter tracking-widest mt-[8px]">
              CAPABILITIES
            </p>
            <h2 className="text-4xl font-bold">
              We design strategically to bring ideas to life.
            </h2>
          </div>
          {capabilities.map((section, index) => (
            <div key={index} className="gap-8 my-8">
              {index % 2 === 0 ? (
                <>
                  <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col justify-center items-center lg:items-start lg:pr-[80px]">
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {section.icon}
                        <h3 className="text-[30px] font-bold text-[#A30A24]">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-[15px] text-center lg:text-start my-[16px] font-inter text-[#191919]">
                        {section.description}
                      </p>
                      <Link
                        href="#book-now"
                        className="hidden md:block px-[22px] py-[8px] bg-transparent border-4 border-[#A30A24] text-[#A30A24] transform -skew-x-[20deg]"
                      >
                        <div className="transform skew-x-[20deg] font-normal">
                          View Our Projects
                        </div>
                      </Link>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={section.image}
                        alt={section.title}
                        className="w-[55%] lg:w-full h-auto"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-4 lg:gap-0 justify-center lg:grid lg:grid-cols-2">
                    <div className="flex justify-center items-center">
                      <Image
                        src={section.image}
                        alt={section.title}
                        className="w-[55%] lg:w-full h-auto"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center lg:items-start lg:pl-[80px]">
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {section.icon}
                        <h3 className="text-[30px] font-bold text-[#A30A24]">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-[15px] text-center lg:text-start my-[16px] font-inter text-[#191919]">
                        {section.description}
                      </p>
                      <Link
                        href="#book-now"
                        className="hidden md:block px-[22px] py-[8px] bg-transparent border-4 border-[#A30A24] text-[#A30A24] transform -skew-x-[20deg]"
                      >
                        <div className="transform skew-x-[20deg] font-normal">
                          View Our Projects
                        </div>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default HomePage;
