import image1 from "../public/static/lighthous3.jpg";
import image2 from "../public/static/windmill-skerries-dublin2.jpg";
import image3 from "../public/static/skerries-dragon2.jpg";
import image4 from "../public/static/sunset.jpg";

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
