import { css } from 'lit-element';

export const AnimatedSectionStyles = css`

.animated-section {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  gap: 0px 0px;
}
.title { grid-area: 1 / 1 / 2 / 2; }
.image { grid-area: 2 / 1 / 3 / 2; }
.text { grid-area: 3 / 1 / 4 / 2; }
.link { grid-area: 4 / 1 / 5 / 2; }

@media all and (min-width: 768px) {

.animated-section {
 
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 0px 0px;
}
.title { grid-area: 1 / 1 / 2 / 2; }
.text { grid-area: 2 / 1 / 3 / 2; }
.image { grid-area: 1 / 2 / 4 / 3; }
.link { grid-area: 3 / 1 / 4 / 2; }

}









.move_ascension{
  opacity: 1;
  animation: ascension 1s 1; 
}



@keyframes ascension {
  0% {
    top: 100px;
    opacity: 0.4;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}

.move_ascension__animation {
  opacity: 1;
  animation: ascension__animation  2s 1; 
}

@keyframes ascension__animation {
  0% {
    top: 100px;
    opacity: 0.2;
  }

  100% {
    top: 0px;
    opacity: 1;
  }
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



`;
