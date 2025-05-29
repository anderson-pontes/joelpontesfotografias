// app/gallery/page.tsx
"use client"; // Necessário para useState e manipulação de eventos no cliente

import { useState } from 'react';
import Image from 'next/image';
// import type { Metadata } from 'next'; // Metadata em client components é diferente, geralmente definido no page.tsx pai ou layout se estático, ou via generateMetadata se dinâmico no servidor. Para simplicidade, o título virá do layout.tsx ou pode ser setado no document.title via useEffect.

// Exemplo de dados da galeria (substitua pelas suas imagens e dados)
// Coloque as imagens na pasta /public/gallery/ por exemplo
interface Photo {
  id: number;
  src: string; // Caminho relativo a /public
  alt: string;
  category: string;
  width: number; // Largura original da imagem
  height: number; // Altura original da imagem
}

const photos: Photo[] = [
  { id: 1, src: '/gallery/photo1.jpg', alt: 'Descrição da Foto 1', category: 'Paisagem', width: 1920, height: 1280 },
  { id: 2, src: '/gallery/photo2.jpg', alt: 'Descrição da Foto 2', category: 'Retrato', width: 1280, height: 1920 },
  { id: 3, src: '/gallery/photo3.jpg', alt: 'Descrição da Foto 3', category: 'Paisagem', width: 1920, height: 1080 },
  { id: 4, src: '/gallery/photo4.jpg', alt: 'Descrição da Foto 4', category: 'Evento', width: 1080, height: 1920 },
  { id: 5, src: '/gallery/photo5.jpg', alt: 'Descrição da Foto 5', category: 'Retrato', width: 1920, height: 1280 },
  { id: 6, src: '/gallery/photo6.jpg', alt: 'Descrição da Foto 6', category: 'Natureza', width: 1280, height: 1920 },
  // Adicione mais fotos...
];


export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden'; // Impede scroll do body quando modal aberto
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restaura scroll do body
  };

  // Opcional: Definir título da página dinamicamente em Client Components
  // useEffect(() => {
  //   document.title = "Galeria | Nome do Fotógrafo";
  // }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Galeria de Fotos
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Explore uma coleção dos meus melhores trabalhos.
        </p>
      </header>

      {/* Galeria de Fotos - Usando CSS Grid com Masonry (simples) */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 lg:gap-8">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group mb-4 sm:mb-6 lg:mb-8 break-inside-avoid bg-dark-surface rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:shadow-orange-500/30 hover:shadow-2xl hover:scale-[1.02]"
            onClick={() => openModal(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width} // Fornecer dimensões ajuda Next/Image a evitar CLS
              height={photo.height}
              className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end p-4">
              <p className="text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {photo.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Lightbox Simples */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-dark-card p-2 sm:p-4 rounded-lg shadow-2xl max-w-4xl max-h-[90vh] w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="object-contain max-w-full max-h-[80vh] sm:max-h-[85vh] rounded"
              // quality={90} // Pode ajustar a qualidade para o lightbox
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-3 md:right-3 text-white bg-gray-800/70 hover:bg-gray-700 rounded-full p-2 text-2xl leading-none z-[101]"
              aria-label="Fechar"
            >
              &times;
            </button>
            <p className="text-center text-gray-300 mt-2 text-sm px-2">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}