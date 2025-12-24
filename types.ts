export interface AIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "16:9";
  fallbackSrc?: string;
}

export interface ClinicalDataPoint {
  name: string;
  control: number;
  experimental: number;
}
