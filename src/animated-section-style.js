import { css } from 'lit-element';

export const AnimatedSectionStyles = css`
:host {
  font-family: var(--main-font-family), sans-serif;
}
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
.animated-section__picture-animation {
  width: 100%;
}

.link--text {
  width: 100%;
	box-sizing: border-box;
	background-color: inherit;
	border: none;
	cursor: pointer;
	font-family: sans-serif;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding-top: 13px;
	padding-bottom: 13px;
	text-decoration: none;
	text-transform: uppercase;
	transition: all 0.2s ease-in-out;
  background-color:  #0e3540;
	border: 1px solid #0e3540;
	border-radius: 5px;
	color: #ffffff;
  margin-bottom: 20px;
}



@media(min-width: 768px) {

  .animated-section {
    grid-template-columns: var( --grid-desktop-column-width, auto) var( --grid-desktop-column-width, auto);
    grid-template-rows: auto auto auto;
    gap: 0px var(--grid-column-gap, 0px);
  }
  .title-after { grid-area: 1 / 2 / 2 / 3; }

  .text-after { grid-area: 2 / 2 / 3 / 3; }

  .media-after { 
    grid-area: 1 / 1 / 4 / 2;
    justify-self: center;
    align-self: center;
   }

  .link-after { grid-area: 3 / 2 / 4 / 3; }
  


  .title-before { grid-area: 1 / 1 / 2 / 2; }

  .text-before { grid-area: 2 / 1 / 3 / 2; }

  .media-before { 
    grid-area: 1 / 2 / 4 / 3;
    justify-self: center;
    align-self: center;
   }

  .link-before { grid-area: 3 / 1 / 4 / 2; }


  .no_opacity {
    opacity: 0;
  }

  .link--text {
    margin-bottom: 0;
    padding: 20px;
    height: 55px;
    width: fit-content;
  }

  .animated-section__description-text {
    position: relative;
  }
  
  .animated-section_img {
    width: 83px;
    height: 170px;
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
    display: block;
  }

  .move-before {
    opacity: 1;
    animation: lateral_left  2s 1;
  }

  .move-after {
    opacity: 1;
    animation: lateral_right  2s 1;
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
  
  @keyframes lateral_right {
    0% {
      transform: translateX(-150px) ;
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
  .move-after, .move-before,
  .move_ascension__animation   
  {
    animation-name: none;
  }

  .animated-section__container-description__animation,
  .animated-section__picture-animation,
  .animated-section__picture,
  .move-after, .move-before,
  .move_ascension__animation
   {
    opacity: 1;
  }
}

`;
