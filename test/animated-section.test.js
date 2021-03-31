/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from "@open-wc/testing";
import '../animated-section';
import sinon from 'sinon';

describe('AnimatedSection', () => {

  it('should have the basic template no video', async () => {
    const el = await fixture(
      html`
      <animated-section>
      <div class="div-hidden">
          <h2 data-id="sectionTitle">SECTION-TITLE</h2>
            <h3 data-id="sectionSubTitle">SUBTITLE</h3>
            <p data-id="sectionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum aliquam iure sapiente, repellat totam veritatis beatae, praesentium eos voluptatem facilis! Ad doloribus cum, quod possimus laborum minus in sequi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae laudantium deserunt id hic quam aliquam, iste consequatur asperiores, itaque mollitia error modi! Nisi quo voluptate cumque, obcaecati esse a iusto.</p>
            <img data-id="sectionImage" src="/demo/assets/default.png" alt="IMAGE" />
            <a data-id="sectionLink" href="/">SECTION-LINK</a>
          </div>
    </animated-section>
      `
    );
    const base = el.shadowRoot.querySelector('.animated-section');
    expect(base).not.to.be.null;
  });

  it('should have the basic template with video', async () => {
    window.innerWidth = 300;
    const el = await fixture(
      html`
      <animated-section animation="true">
      <div class="div-hidden">
          <h2 data-id="sectionTitle">SECTION-TITLE</h2>
            <p data-id="sectionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum aliquam iure sapiente, repellat totam veritatis beatae, praesentium eos voluptatem facilis! Ad doloribus cum, quod possimus laborum minus in sequi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae laudantium deserunt id hic quam aliquam, iste consequatur asperiores, itaque mollitia error modi! Nisi quo voluptate cumque, obcaecati esse a iusto.</p>
            <img data-id="sectionNoVideoMobile" src="/demo/assets/400x200default.png" alt="IMAGE" />
            <video data-id="sectionVideo" src="/demo/assets/gifmundokairos.mp4" alt="video mimundo" type="video/mp4" ></video>
          </div>
    </animated-section>
      `
    );
    const base = el.shadowRoot.querySelector('.animated-section');
    const mediaElement = el.shadowRoot.querySelector('.animated-section__picture-animation').tagName;
    expect(mediaElement).to.equal('IMG')
    expect(base).not.to.be.null;
  });

  it('should have the basic template with video in mobile', async () => {
    const el = await fixture(
      html`
      <animated-section>
      <div class="div-hidden">
          <h2 data-id="sectionTitle">SECTION-TITLE</h2>
            <p data-id="sectionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum aliquam iure sapiente, repellat totam veritatis beatae, praesentium eos voluptatem facilis! Ad doloribus cum, quod possimus laborum minus in sequi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae laudantium deserunt id hic quam aliquam, iste consequatur asperiores, itaque mollitia error modi! Nisi quo voluptate cumque, obcaecati esse a iusto.</p>
            <video data-id="sectionVideo" src="/demo/assets/gifmundokairos.mp4" alt="video mimundo" type="video/mp4" ></video>
          </div>
    </animated-section>
      `
    );
    const base = el.shadowRoot.querySelector('.animated-section');
    const mediaElement = el.shadowRoot.querySelector('.animated-section__picture-animation').tagName;
    expect(base).not.to.be.null;
    expect(mediaElement).to.equal('VIDEO')

  });

  it('should have animation', async () => {
   window.innerWidth = 1200;
    const el = await fixture(
      html`
      <animated-section animation="true" position-text="before">
      <div class="div-hidden">
          <h2 data-id="sectionTitle">SECTION-TITLE</h2>
            <p data-id="sectionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum aliquam iure sapiente, repellat totam veritatis beatae, praesentium eos voluptatem facilis! Ad doloribus cum, quod possimus laborum minus in sequi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae laudantium deserunt id hic quam aliquam, iste consequatur asperiores, itaque mollitia error modi! Nisi quo voluptate cumque, obcaecati esse a iusto.</p>
            <img data-id="sectionNoVideoMobile" src="/demo/assets/400x200default.png" alt="IMAGE" />
            <video data-id="sectionVideo" src="/demo/assets/gifmundokairos.mp4" alt="video mimundo" type="video/mp4" ></video>
          </div>
    </animated-section>
      `
    );

    const base = el.shadowRoot.querySelector('.animated-section');

    const spy = sinon.spy();
    el.animationPicture();
    expect(spy.called);
    expect(base).not.to.be.null;

  });

  it('should have the basic template no video', async () => {
    const el = await fixture(
      html`
      <animated-section>
      <div class="div-hidden">
          <h2 data-id="sectionTitle">SECTION-TITLE</h2>
            <h3 data-id="sectionSubTitle">SUBTITLE</h3>
            <p data-id="sectionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum aliquam iure sapiente, repellat totam veritatis beatae, praesentium eos voluptatem facilis! Ad doloribus cum, quod possimus laborum minus in sequi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae laudantium deserunt id hic quam aliquam, iste consequatur asperiores, itaque mollitia error modi! Nisi quo voluptate cumque, obcaecati esse a iusto.</p>
            <img data-id="sectionImage" src="/demo/assets/default.png" alt="IMAGE" />
            <a data-id="sectionLink" href="/">SECTION-LINK</a>
          </div>
    </animated-section>
      `
    );
    await expect(el).shadowDom.to.be.accessible();
  });

});
