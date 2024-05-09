import { Story } from "../types/story";

export function preloadImages(imageUrls:Story[]) {
    const promises:any = [];
    
    imageUrls.forEach(({thumbnailUrl,url}) => {
      const promise = new Promise((resolve, reject) => {
        const mainImg = new Image();
        mainImg.onload = () => resolve(url);
        mainImg.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        mainImg.src = url;

        const thumbNailImg = new Image();
        thumbNailImg.onload = () => resolve(url);
        thumbNailImg.onerror = () => reject(new Error(`Failed to load image: ${thumbnailUrl}`));
        thumbNailImg.src = thumbnailUrl;


      });
      
      promises.push(promise);
    });
    
    return Promise.all(promises);
  }
  
  