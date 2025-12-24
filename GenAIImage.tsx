import React, { useState, useEffect, useRef } from 'react';
import { generateImage } from '../services/geminiService';
import { AIImageProps } from '../types';
import { ImageOff } from 'lucide-react';

export const GenAIImage: React.FC<AIImageProps> = ({ prompt, alt, className, aspectRatio = "1:1", fallbackSrc }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const hasGenerated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasGenerated.current && !src) {
          hasGenerated.current = true;
          generate();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generate = async () => {
    setLoading(true);
    setError(false);
    
    // Attempt generation (service now handles fallbacks internally)
    const generatedSrc = await generateImage(prompt, aspectRatio as "1:1" | "3:4" | "4:3" | "16:9");
    
    if (generatedSrc) {
      setSrc(generatedSrc);
    } else {
      // Last resort fallback if service returns null
      setError(true);
      if (fallbackSrc) setSrc(fallbackSrc);
    }
    setLoading(false);
  };

  return (
    <div ref={observerRef} className={`relative overflow-hidden bg-pine-900/5 ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover animate-fade-in transition-opacity duration-700" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
           {loading ? (
             <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
                <span className="sr-only">Loading...</span>
             </div>
           ) : error ? (
             <div className="flex flex-col items-center text-gray-300">
                <ImageOff className="w-8 h-8 mb-2" />
             </div>
           ) : (
             <div className="w-full h-full bg-gray-100" />
           )}
        </div>
      )}
    </div>
  );
};