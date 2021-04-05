import { html, LitElement } from 'lit-element';
import { AnimatedSectionStyles } from './animated-section-style';
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
       * Image data of the section
       * @property
       * @type Array
       *
       */
      imageData: {
        type: Array,
      },
      /**
       * Video data of the section
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
    this.videoData = dataSection.sectionVideo;
    this.imageVideoData = dataSection.sectionNoVideoMobile;
    this.urlLink = dataSection.sectionLink;
    this.motionVideo = matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  

  animationPicture() {
    const section = this.shadowRoot.querySelector('.animated-section');
    const picture =this.shadowRoot.querySelector('.animated-section__picture-animation');
    const description = [...this.shadowRoot.querySelectorAll('.animated-section__description-text')];
    const video = this.shadowRoot.getElementById('videoSection');
    const classAnimatedPicture = `move-${this.positionText}`;
    
    const options = {
      threshold: 0.8,
    };

  function callBack(entries, observer) {
    if (entries[0].isIntersecting) {
      picture.classList.add(classAnimatedPicture);
      description.forEach((item)=>{
        item.classList.add('move_ascension__animation');
      })

      if(video){
          if(this.motionVideo){
            return null
          }
          else if(video.hasAttribute('ended')){
            video.pause();
            console.log('start')
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

  firstUpdated() {
    if(window.innerWidth > 768 && this.animation){
      this.animationPicture();
    }
  }

  renderVideoOptions() {
    const addOpacity = this.animation ? 'no_opacity' : '' ; 
    if(this.imageVideoData && window.innerWidth < 768){
        return html `<img class="animated-section__picture-animation media-${this.positionText} ${addOpacity}"
        part="section-media" src="${this.imageVideoData.src}" alt="${this.imageVideoData.alt}" />`
    } else {
        return html `
        <video id="videoSection" class="animated-section__picture-animation media-${this.positionText} ${addOpacity}" 
        part="section-media" muted >
            <source src="${this.videoData.src}" type="${this.videoData.type}">
        </video>`
    }
  }

  render() {
    const addOpacity = this.animation ? 'no_opacity' : '' ; 
    return  html`
      <div class="animated-section">
        ${this.title && html`
          <div class="title-${this.positionText} animated-section__description-text ${addOpacity}">
              ${this.subtitle ? html`<h3 part="section-subtitle">${this.subtitle}</h3>`: ''}
              <h2 part="section-title">${this.title}</h2> 
          </div> `}
        <p class="text-${this.positionText} animated-section__description-text ${addOpacity}"
        part="section-description">
            ${this.descriptionText}
        </p> 
        ${this.urlLink && html`
          <a
            class="link-${this.positionText}  animated-section__description-text link--text ${addOpacity}"
            part="section-link"
            target="_blank"
            href="${this.urlLink.href}">
            ${this.urlLink.content}
        </a>
        `}
      ${this.imageData && html`
        <img class="animated-section__picture-animation media-${this.positionText} ${addOpacity}" 
        part="section-media"
        src="${this.imageData.src}" alt="${this.imageData.alt}" />
      `}
      ${this.videoData ? this.renderVideoOptions() : '' }
    </div> 
    `;
  }
}


