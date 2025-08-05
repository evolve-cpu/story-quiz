import { useEffect } from "react";

export default function useGlobalImagePreloader(imageUrls = []) {
  useEffect(() => {
    if (!imageUrls.length) return;
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);
}
