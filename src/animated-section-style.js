import { css } from 'lit-element';

export const AnimatedSectionStyles = css`

.animated-section {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  gap: 0px 0px;
}
.title { grid-area: 1 / 1 / 2 / 2; }
.media { grid-area: 2 / 1 / 3 / 2; }
.text { grid-area: 3 / 1 / 4 / 2; }
.link { grid-area: 4 / 1 / 5 / 2; }

.animated-section__description-text {
  position: relative;
  opacity: 1;
}

@media(min-width: 768px) {

  .animated-section {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 0px 0px;
  }
  .title { grid-area: 1 / 1 / 2 / 2; }
  .text { grid-area: 2 / 1 / 3 / 2; }
  .media { grid-area: 1 / 2 / 4 / 3; }
  .link { grid-area: 3 / 1 / 4 / 2; }
  
  .animated-section__description-text {
    position: relative;
    opacity: 0;
  }
  
  
  .animated-section_img {
    width: 83px;
    height: 170px;
  }
  
  .animated-section__picture-lateral_left {
    animation: lateral_left 1s 1;
    position: relative;
    display: block;
    width: 100%;
  }

  .move_ascension__animation {
    opacity: 1;
    animation: ascension__animation  2s 1; 
  }

  @keyframes ascension__animation {
    0% {
      top: 100px;
      opacity: 0;
    }
    50% { 
      opacity: 0,5;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }
  

  .animated-section__picture-animation {
    opacity: 0;
    display: block;
    width: 100%;
  }

  .move_left {
    opacity: 1;
    animation: lateral_left  2s 1;
  }
  
  @keyframes lateral_left {
    0% {
      transform: translateX(150px) ;
      opacity: 0;
    }
    50% { 
      opacity: 0,5;
    }
    100% {
      opacity: 1;
      transform: translateX(0px) ;
    }
  }
  
 
}

@media (prefers-reduced-motion: reduce) {
  .animated-section__container-description,
  .animated-section__picture-lateral_left, 
  .move_left,
  .move_ascension__animation   
  {
    animation-name: none;
  }

  .animated-section__container-description__animation,
  .animated-section__picture-animation,
  .animated-section__picture,
  .move_left,
  .move_ascension,
  .move_ascension__animation
   {
    opacity: 1;
  }
}

`;
