"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  { id: 1, src: '/gallery/cardinal.jpg', alt: 'Cardeal Vermelho em um galho', category: 'Pássaros', width: 1920, height: 1280 },
  { id: 2, src: '/gallery/fallow.jpg', alt: 'Gamo em um campo', category: 'Animais', width: 1280, height: 1920 },
  { id: 3, src: '/gallery/lion.jpg', alt: 'Leão majestoso', category: 'Animais Selvagens', width: 1920, height: 1080 },
  { id: 4, src: '/gallery/puffin.jpg', alt: 'Puffin em uma rocha', category: 'Aves Marinhas', width: 1080, height: 1920 },
  { id: 5, src: '/gallery/squirrel.jpg', alt: 'Esquilo em um tronco de árvore', category: 'Pequenos Animais', width: 1920, height: 1280 },
  { id: 6, src: '/gallery/fotografo.jpg', alt: 'Fotógrafo em ação', category: 'Pessoas', width: 1280, height: 1920 },
  { id: 7, src: '/gallery/cardinal.jpg', alt: 'Fotógrafo em ação', category: 'Casamento', width: 1280, height: 1920 },
  { id: 8, src: '/gallery/lion.jpg', alt: 'Fotógrafo em ação', category: 'Casamento', width: 1280, height: 1920 },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    document.title = "Galeria | Joel Pontes Fotografias";
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 drop-shadow">
          Galeria de Fotos
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Explore uma coleção visual dos meus melhores trabalhos.
        </p>
      </header>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group mb-6 break-inside-avoid overflow-hidden rounded-xl shadow-lg bg-neutral-900 hover:shadow-xl hover:shadow-orange-500/30 transition-all transform hover:scale-[1.02] cursor-pointer"
            onClick={() => openModal(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={(e) => {
                console.error(`Erro ao carregar imagem: ${photo.src}`, e);
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {photo.category}
            </div>
          </div>
        ))}
        {photos.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">Nenhuma foto para exibir no momento.</p>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-neutral-900 rounded-lg p-4 shadow-2xl max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="object-contain max-w-full max-h-[80vh] rounded"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 text-xl"
              aria-label="Fechar"
            >
              &times;
            </button>
            <p className="text-center text-gray-300 mt-3 text-sm px-2">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
