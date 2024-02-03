import InstagramIcon from '../assets/media/instagram.svg';
import FacebookIcon from '../assets/media/facebook.svg';
import FoodImage from '../assets/media/food-1.jpg';
import DrinkImage from '../assets/media/cocktail-1.jpg';
import AtmosphereImage from '../assets/media/dining-2.jpg';

function createLogo() {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo');

  const logoMainText = document.createElement('h1');
  logoMainText.textContent = '88';
  logoMainText.classList.add('logo-maintext');

  const logoSubText = document.createElement('div');
  logoSubText.classList.add('logo-subtext');

  const logoHeadText = document.createElement('h1');
  logoHeadText.textContent = 'Charles Street';

  const logoFootText = document.createElement('h2');
  logoFootText.textContent = 'RESTAURANT';

  logoSubText.appendChild(logoHeadText);
  logoSubText.appendChild(logoFootText);

  logoContainer.appendChild(logoMainText);
  logoContainer.appendChild(logoSubText);

  return logoContainer;
}

function generateSiteLinks() {
  const links = ['Home', 'About', 'Menus', 'Special Events', 'Gift Cards', 'Contact']

  const linkList = document.createElement('ul');
  linkList.classList.add('page-links');
  
  links.forEach((link) => {
    const linkItem = document.createElement('li');
    const linkTag = document.createElement('a');
    linkTag.textContent = link;

    linkItem.appendChild(linkTag);
    linkList.appendChild(linkItem);
  });

  return linkList;
}

function generateSocialLinks() {
  const linkList = document.createElement('div');
  linkList.classList.add('social-links');

  const instagramIcon = new Image();
  instagramIcon.src = InstagramIcon;

  const facebookIcon = new Image();
  facebookIcon.src = FacebookIcon;

  linkList.appendChild(instagramIcon);
  linkList.appendChild(facebookIcon);

  return linkList;
}

function generateNav() {
  const nav = document.createElement('nav');
  nav.id = 'page-nav';

  const logo = createLogo();
  const siteLinks = generateSiteLinks();
  const socialLinks = generateSocialLinks();

  nav.appendChild(logo);
  nav.appendChild(siteLinks);
  nav.appendChild(socialLinks);

  return nav;
}

function generateHero() {
  const heroSection = document.createElement('section');
  heroSection.id = 'hero-container';

  const heroImageCaption = document.createElement('h1');
  heroImageCaption.innerHTML = 'Modern <span>&#9899;</span> Elegant <span>&#9899;</span> Inviting';

  heroSection.appendChild(heroImageCaption);

  return heroSection;
}

function generateInfoCard(imgSrc,subtext) {
  const card = document.createElement('div');
  card.classList.add('info-card');

  const image = new Image();
  image.src = imgSrc;

  const textContainer = document.createElement('div');
  textContainer.classList.add('info-text');

  const text = document.createElement('h4');
  text.textContent = subtext;

  textContainer.appendChild(text);

  card.appendChild(image);
  card.appendChild(textContainer);
  
  return card;
}

function generateInfo() {
  const infoSection = document.createElement('section');
  infoSection.id = 'info-container';

  const foodCard = generateInfoCard(FoodImage, 'Cuisine');
  const cocktailCard = generateInfoCard(DrinkImage, 'Cocktails');
  const atmosphereCard = generateInfoCard(AtmosphereImage, 'Ambiance');

  infoSection.appendChild(foodCard);
  infoSection.appendChild(cocktailCard);
  infoSection.appendChild(atmosphereCard);

  return infoSection;
}

function generatePage() {
  const header = generateNav();
  const hero = generateHero();
  const info = generateInfo();

  document.body.appendChild(header);
  document.body.appendChild(hero);
  document.body.appendChild(info);
}

export function loadPage() {

  generatePage();
  console.log('TESTING');
}