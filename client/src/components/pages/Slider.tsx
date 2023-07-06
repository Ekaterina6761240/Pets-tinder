import React from 'react';

export default function Slider(): JSX.Element {
  let slideIndex = 0;

  function showSlides(): void {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  showSlides();

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src="https://pet7.ru/wp-content/uploads/2020/08/domashnie-zhivotnye.jpg"
            style={{ width: '25%' }}
          />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img
            src="https://aussiedlerbote.de/wp-content/uploads/2022/05/pets.jpg"
            style={{ width: '25%' }}
          />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img
            src="https://omvesti.ru/wp-content/uploads/2023/01/animals.webp"
            style={{ width: '25%' }}
          />
          <div className="text">Caption Three</div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </>
  );
}

// import React, { useState, useEffect } from 'react';

// export default function Slider(): JSX.Element {
//   const [slideIndex, setSlideIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 2000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div className="slideshow-container">
//       <div
//         className="slideshow-wrapper"
//         style={{ transform: `translateX(-${slideIndex * 100}%)` }}
//       >
//         <div className="mySlides fade">
//           <div className="numbertext">1 / 3</div>
//           <img
//             src="https://pet7.ru/wp-content/uploads/2020/08/domashnie-zhivotnye.jpg"
//             alt="Slide 1"
//           />
//           <div className="text">Caption Text</div>
//         </div>

//         <div className="mySlides fade">
//           <div className="numbertext">2 / 3</div>
//           <img
//             src="https://aussiedlerbote.de/wp-content/uploads/2022/05/pets.jpg"
//             alt="Slide 2"
//           />
//           <div className="text">Caption Two</div>
//         </div>

//         <div className="mySlides fade">
//           <div className="numbertext">3 / 3</div>
//           <img
//             src="https://omvesti.ru/wp-content/uploads/2023/01/animals.webp"
//             alt="Slide 3"
//           />
//           <div className="text">Caption Three</div>
//         </div>
//       </div>

//       <div style={{ textAlign: 'center' }}>
//         <span className={`dot ${slideIndex === 0 ? 'active' : ''}`} />
//         <span className={`dot ${slideIndex === 1 ? 'active' : ''}`} />
//         <span className={`dot ${slideIndex === 2 ? 'active' : ''}`} />
//       </div>
//     </div>
//   );
// }
