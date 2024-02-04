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

  const heroImage = document.createElement('div');
  heroImage.classList.add('hero-background');

  const heroImageCaption = document.createElement('h1');
  heroImageCaption.innerHTML = 'Modern <span>&#9899;</span> Elegant <span>&#9899;</span> Inviting';

  heroSection.appendChild(heroImage);
  heroSection.appendChild(heroImageCaption);

  return heroSection;
}

function generateMediaCard(imgSrc,subtext) {
  const card = document.createElement('div');
  card.classList.add('media-card');

  const image = new Image();
  image.src = imgSrc;

  const textContainer = document.createElement('div');
  textContainer.classList.add('media-text');

  const text = document.createElement('h4');
  text.textContent = subtext;

  textContainer.appendChild(text);

  card.appendChild(image);
  card.appendChild(textContainer);
  
  return card;
}

function generateMedia() {
  const mediaSection = document.createElement('section');
  mediaSection.id = 'media-container';

  const atmosphereCard = generateMediaCard(AtmosphereImage, 'Ambiance');
  const foodCard = generateMediaCard(FoodImage, 'Cuisine');
  const cocktailCard = generateMediaCard(DrinkImage, 'Cocktails');

  mediaSection.appendChild(atmosphereCard);
  mediaSection.appendChild(foodCard);
  mediaSection.appendChild(cocktailCard);

  return mediaSection;
}

function generateInfo() {
  const infoSection = document.createElement('section');
  infoSection.id = 'info-container';

  const iframe = document.createElement('iframe');
  iframe.id = 'location-iframe';
  iframe.title = '88 Charles St, Montgomery, NY 12549';
  iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.9680971088396!2d-74.2383602!3d41.52663169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dcd5e889b491b5%3A0xe838c1e5049edf0f!2s88%20Charles%20St%2C%20Montgomery%2C%20NY%2012549!5e0!3m2!1sen!2sus!4v1707002292848!5m2!1sen!2sus';
  iframe.height = 400;
  iframe.width = 400;
  iframe.allowFullscreen = '';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';

  const textContainer = document.createElement('div');
  textContainer.id = 'info-text';

  const mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Visit Us';

  const locationWrapper = document.createElement('div');
  const locationHeading = document.createElement('h2');
  locationHeading.textContent = 'Location:';
  
  const locationText = document.createElement('p');
  locationText.textContent = '88 Charles Street, Montgomery, NY 12549';

  const hoursWrapper = document.createElement('div');
  const hoursHeading = document.createElement('h2');
  hoursHeading.textContent = 'Hours:';

  const hoursText = document.createElement('p');
  hoursText.innerHTML = '12:00p - 3:00p / 4:00p - 9:00p<br>Monday, Wednesday, Thursday<br><br>12:00p - 3:00p / 4:00p - 9:00p<br>Friday<br><br>4:00p - 10:00p<br>Saturday<br><br>4:00p - 9:00p<br>Sunday';

  hoursWrapper.appendChild(hoursHeading);
  hoursWrapper.appendChild(hoursText);

  locationWrapper.appendChild(locationHeading);
  locationWrapper.appendChild(locationText);

  textContainer.appendChild(mainHeading);
  textContainer.appendChild(locationWrapper);
  textContainer.appendChild(hoursWrapper);

  infoSection.appendChild(iframe);
  infoSection.appendChild(textContainer);

  return infoSection;
}

function generateFooter() {
  const footerSection = document.createElement('footer');
  footerSection.id = 'page-foot';

  const footerText = document.createElement('p');
  footerText.innerHTML = '[2024] 88 Charles St. &#169; All Rights Reserved';

  footerSection.appendChild(footerText);

  return footerSection;
}

function generatePage() {
  const header = generateNav();
  const hero = generateHero();
  const media = generateMedia();
  const info = generateInfo();
  const footer = generateFooter();

  document.body.appendChild(header);
  document.body.appendChild(hero);
  document.body.appendChild(media);
  document.body.appendChild(info);
  document.body.appendChild(footer);
}

export function loadPage() {

  generatePage();
  console.log('TESTING');
}