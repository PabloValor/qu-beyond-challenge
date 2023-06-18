const getRandomImageId = (id: number = 1) => id % 10;

const goToTop = () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})

export { 
    getRandomImageId,
    goToTop
}