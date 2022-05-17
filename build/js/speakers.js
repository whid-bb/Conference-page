import Shuntaro from '../img/speakers/Shuntaro-Furukawa.webp';
import Sundar from '../img/speakers/Sundar-Pichai.webp';
import Susan from '../img/speakers/Susan-Wojcicki.webp';
import Tara from '../img/speakers/Tara-Reed.webp';
import Tristan from '../img/speakers/Tristan-Harris.webp';
import Vanessa from '../img/speakers/Vanessa-Guthrie.webp';

const fspeakers = [
  {
    header: 'Featured Speakers',
  },
  {
    name: 'Shuntaro Furukawa',
    img: Shuntaro,
    credentials: 'CEO, Nintendo',
    description:
      'Shuntaro Furukawa is Nintendo’s sixth global president and has been with the company for 27 years. In 2020, he oversaw the launch of Animal Crossing: New Horizons — which became an island of calm and human connection during the pandemic — and last year his company followed that with the launch of the Nintendo Switch OLED.',
    credit: 'Nintendo',
  },
  {
    name: 'Sundar Pichai',
    img: Sundar,
    credentials: 'CEO, Google and Alphabet',
    description:
      'Sundar Pichai is the CEO of both Alphabet, Inc. and Google, which puts him in a seat of power in the universe of technology like no other. In 2021, he told the Times of India that while other companies may be focusing on AI, the future of Google is timeless: Search.',
    credit: 'Google',
  },
  {
    name: 'Susan Wojcicki',
    img: Susan,
    credentials: 'CEO, YouTube',
    description:
      'With her elemental role in the creation of Google, the development of AdSense and Google Analytics, and her current position as the CEO of YouTube, Susan Wojcicki is a household name for anyone who follows technology. Last year, she received a “Free Expression” award from the Freedom Forum Institute for the impact YouTube has on protecting free speech around the world.',
    credit: 'YouTube',
  },
  {
    name: 'Tara Reed',
    img: Tara,
    credentials: 'Founder and CEO, Apps Without Code',
    description:
      'Tara Reed is a pioneer of no-code development and the founder of Apps Without Code. Her adventures started when she created an app — Kollecto — which matches people with art, without writing a single line of code. Her “no-code university” has now taught 150,000 people who have no coding background how to create apps.',
    credit: 'LinkedIn',
  },
  {
    name: 'Tristan Harris',
    img: Tristan,
    credentials: 'Co-founder, The Center for Humane Technology',
    description:
      'As president and cofounder of the Center for Humane Technology, Tristan Harris devotes his time to contemplating ways technology can be more humane. His podcasts, courses, research, and toolkits are designed to help people reclaim their attention in the face of tools that are engineered to distract.',
    credit: 'Humanetech',
  },
  {
    name: 'Vanessa Guthrie',
    img: Vanessa,
    credentials: 'Head of Snap Originals, Snap',
    description:
      'Snap Inc. — the company behind SnapChat — is making big efforts to develop original, short-form, mobile content to keep the attention of its teen and early-20s demographic and Vanessa Guthrie is leading this charge. She took on the role of Head of Original content in July of 2021, and has been building out shows at a dizzying rate since then.',
    credit: 'Snap',
  },
];

const speakerSection = document.getElementById('featured-speakers');
let speakersSectionContent = '';

fspeakers.forEach((speaker, i) => {
  if (!speaker.header) {
    speakersSectionContent += `
        <div class="section-box-content">
            <div class="sc-ico-container">
                <div class="ss-speaker-img">
                    <div class="fs-bg-img"></div>
                    <img src="${speaker.img}" alt="Image of ${speaker.name}">
                </div>
            </div>
            <div class="speaker-desc">
            <div class="sd-name-container">
            <h3>${speaker.name}</h3>
            <h4>${speaker.credentials}</h4>
            </div>
                <p>
                    ${speaker.description.substring(0, 100)}...<br>
                    <button class="speaker-read-more" data-speaker-read=${i}>(read more)</button>
                </p>
            </div>
        </div>        
        `;
  } else if (speaker.header) {
    speakersSectionContent += `
      <div class="section-head">
            <h2>${speaker.header}</h2>
        </div>
      `;
  }
});

speakerSection.insertAdjacentHTML('afterbegin', speakersSectionContent);

console.log(speakersSectionContent);
