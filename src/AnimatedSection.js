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
       * @type String
       *
       */
      positionText: {
        type: String,
        attribute: 'position-text'

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
        attribute: 'animation', 
        reflect: true
      },
      /**
       * Animation incluide of the section
       * @property
       * @type Boolean
       *
       */
       videoMobile: {
        type: Boolean,
        attribute: 'video-mobile', 
        reflect: true
      },
    };
  }

  static get styles() {
    return [AnimatedSectionStyles];
  }

  constructor() {
    super();
    this.positionText = '';
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
    console.log(this.animation)
    const childNodes = this._HTMLChildren();
    const dataSection = childNodes[0];
    this.title = dataSection.sectionTitle;
    this.subtitle = dataSection.sectionSubTitle;
    this.descriptionText = dataSection.sectionText;
    this.imageData = dataSection.sectionImage;
    //this.imageDataTwo = dataSection.src;
    this.videoData = dataSection.sectionVideo;
    this.imageVideoData = dataSection.sectionNoVideoMobile;
    this.urlLink = dataSection.sectionLink;
    this.motionVideo = matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  

    animationPicture() {
      if (this.animation){
          const section = this.shadowRoot.querySelector('.animated-section')
          const picture =this.shadowRoot.querySelector('.animated-section__picture-animation');
          const description = [...this.shadowRoot.querySelectorAll('.animated-section__description-text')];
          const video = this.shadowRoot.getElementById('videoSection')
          const videoData = this.videoData;
          const videoMotion = this.motionVideo;
          const classAnimatedPicture= `move-${this.positionText}`
          const options = {
            threshold: 0.8,
          };
    /* eslint-disable-next-line */
      function callBack(entries, observer) {
        if (entries[0].isIntersecting) {
          picture.classList.add(classAnimatedPicture);
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
    if(window.innerWidth > 768 && this.animation){
      this.animationPicture();
    }
  }

  renderVideoOptions() {
    const addOpacity = this.animation ? 'no_opacity' : '' ; 
    if(this.imageVideoData && window.innerWidth < 768){
      return html `<img class="animated-section__picture-animation media-${this.positionText} ${addOpacity}" src="${this.imageVideoData.src}" alt="${this.imageVideoData.alt}" />`
    
    } else {
      return html `
      <video id="videoSection" class="animated-section__picture-animation media-${this.positionText} ${addOpacity}"  muted >
          <source src="${this.videoData.src}" type="${this.videoData.type}">
      </video>
      `
    }
  }

  get renderDesktopView() {
    const addOpacity = this.animation ? 'no_opacity' : '' ; 
    return  html`
    <div class="animated-section">
            ${this.title && html`
              <div class="title-${this.positionText} animated-section__description-text ${addOpacity}">
                  ${this.subtitle ? html`<h3>${this.subtitle}</h3>`: ''}
                  <h2>${this.title}</h2> 
              </div> `}
            <p class="text-${this.positionText} animated-section__description-text ${addOpacity}">
                ${this.descriptionText}
            </p> 
            ${this.urlLink && html`
              <a
                class="link-${this.positionText}  animated-section__description-text link--raised link--text-large ${addOpacity}"
                target="_blank"
                href="${this.urlLink.href}">
                ${this.urlLink.content}
            </a>
            `}
        ${this.imageData && html`
          <img class="animated-section__picture-animation media-${this.positionText} ${addOpacity}" src="${this.imageData.src}" alt="${this.imageData.alt}" />
        `}

        ${this.videoData ? this.renderVideoOptions() : '' }
  </div> 
    `;
  }

  render() {
    return html` ${this.renderDesktopView}
    `;
  }
}


