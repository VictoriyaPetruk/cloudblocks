import { useEffect, useState, RefObject } from "react";

export function useVideoLoading(
  videoRef: RefObject<HTMLVideoElement | null>,
  currentStep: number,
  mounted: boolean
) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    // Handle video loading state - only when on intro step and mounted
    if (currentStep !== -1 || !mounted) {
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoading(false);
    };

    const handleError = () => {
      setIsVideoLoading(false);
    };

    // Check if video is already loaded
    if (video.readyState >= 2) {
      setIsVideoLoading(false);
    }

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("canplaythrough", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("canplaythrough", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [currentStep, mounted, videoRef]);

  return isVideoLoading;
}

