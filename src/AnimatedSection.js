import { html, LitElement } from 'lit-element';
import { AnimatedSectionStyles } from './animated-section-style';
import { classMap } from 'lit-html/directives/class-map';
import { HTMLChildrenMixin } from './HTMLChildrenMixin';

/**
 * `animated-section`
 * AnimatedSection
 *
 * @customElement animated-section
 * @litElement
 * @demo demo/index.html
 */

export class AnimatedSection extends HTMLChildrenMixin(LitElement) {
  static get is() {
    return 'animated-section';
  }

  static get properties() {
    return {
      /**
       * Object with all data section related
       * @property
       * @type { Object }
       *
       */
      sectionData: {
        type: Object,
      },

      /**
       * Property that  dictates the placement of text and image
       * @property
       * @type { after | before }
       *
       */
      positionText: {
        type: String,
      },

      /**
       * Name of the page for the section
       * @property
       * @type String
       *
       */
      namePage: {
        type: String,
      },

      /**
       * Name of the section
       * @property
       * @type String
       *
       */
      section: {
        type: String,
      },
      /**
       * Title of the section
       * @property
       * @type String
       *
       */
      title: {
        type: String,
      },
      /**
       * Subtitle of the section
       * @property
       * @type String
       *
       */
      subtitle: {
        type: String,
      },
      /**
       * Description Text of the section
       * @property
       * @type String
       *
       */
      descriptionText: {
        type: String,
      },
      /**
       * Url Link of the section
       * @property
       * @type String
       *
       */
      urlLink: {
        type: String,
      },
      /**
       * Link Text of the section
       * @property
       * @type String
       *
       */
      linkText: {
        type: String,
      },
      /**
       * Image Src of the section
       * @property
       * @type Array
       *
       */
      imageData: {
        type: Array,
      },
      /**
       * Image Alt of the section
       * @property
       * @type String
       *
       */
      imageAlt: {
        type: String,
      },
      /**
       * Video Src of the section
       * @property
       * @type Array
       *
       */
      videoData: {
        type: Array,
      },
      /**
       * Animation incluide of the section
       * @property
       * @type Boolean
       *
       */
      animation: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return [AnimatedSectionStyles];
  }

  constructor() {
    super();
    this.positionText = 'before';
    this.title = '';
    this.subtitle = '';
    this.descriptionText = '';
    this.urlLink = null;
    this.imageSrc = null;
    this.imageAlt = '';
    this.animation = false;
  }

  connectedCallback() {
    super.connectedCallback();
    const childNodes = this._HTMLChildren();
    const dataSection = childNodes[0];
    this.title = dataSection.sectionTitle;
    this.subtitle = dataSection.sectionSubTitle;
    this.descriptionText = dataSection.sectionText;
    this.imageData = dataSection.sectionImage;
    //this.imageDataTwo = dataSection.src;
    //this.videoData = dataSection.video;
    this.urlLink = dataSection.sectionLink;
    //this.motionVideo = matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  

    animationPicture() {
      if (this.animation){
        console.log('hola')
          const section = this.shadowRoot.querySelector('.animated-section')
          const picture =this.shadowRoot.querySelector('.animated-section__picture-animation');
          const description = [...this.shadowRoot.querySelectorAll('.animated-section__description-text')];
          const video = this.shadowRoot.getElementById('video')
          const videoData = this.videoData;
          const videoMotion = this.motionVideo;

          const options = {
            threshold: 0.8,
          };
    /* eslint-disable-next-line */
      function callBack(entries, observer) {
        if (entries[0].isIntersecting) {
          picture.classList.add('move_left');
          description.forEach((item)=>{
            item.classList.add('move_ascension__animation')
          })
          if(videoData){
              if(videoMotion){
                return null
              }
              else if(video.hasAttribute('ended')){
                video.pause();
              } else {
                setTimeout(function() {
                  video.play();
                  video.setAttribute('ended', '');
                }, 2000);
              }
            
          }        
          }
        }
      
    
  
    const animationObserver  = new IntersectionObserver(callBack, options);
    animationObserver.observe(section);
  }
  }

  firstUpdated() {
    window.innerWidth < 768 ? null : this.animationPicture();
  }


  get renderDesktopView() {
    const positionTextReverese = { reverseText: this.positionText === 'after' };
    return  html`
    <div class="animated-section ${classMap(positionTextReverese)}">
            ${this.title && html`
            <kw-title class="title animated-section__description-text">
                <h3>${this.subtitle}</h3>
                <h2>${this.title}</h2> 
            </kw-title>
            `}
           <p  class=" text animated-section__description-text">
                ${this.descriptionText}
            </p> 
            ${this.urlLink && html`
              <a
                class="link  animated-section__description-text link--raised link--text-large"
                target="_blank"
                href="${this.urlLink.href}">
                ${this.urlLink.content}
            </a>
            `}
        ${this.imageData && html`<img class="animated-section__picture-animation media" src="${this.imageData.src}" alt="${this.imageData.alt}" />
        `}
        ${this.videoData &&  html`
          <video class="animated-section__picture media"  muted >
            <source src="${this.videoData.src}" type="${this.videoData.type}">
           </video>
          `}
  </div> 
    `;
  }

  // ToDo add the functionality to start animation with view the component
  render() {
    return html` ${this.renderDesktopView}
    `;
  }
}


