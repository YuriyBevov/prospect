const hero = document.querySelector('.hero');
const windowInitialScrollY = window.scrollY;

if(hero) {
  hero.style.transform = `translateY(-${window.scrollY / 4}px)`;

  const onScrollHandler = () => {
    hero.style.transform = `translateY(-${window.scrollY / 4}px)`;
  }

  window.addEventListener('scroll', onScrollHandler);
}
