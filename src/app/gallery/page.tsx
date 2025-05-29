// Galeria de fotos com filtros, infinite scroll, carrossel no modal, compartilhamento e upload dinâmico

"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface Photo {
    id: number;
    src: string;
    alt: string;
    category: string;
    width: number;
    height: number;
}

const PHOTOS: Photo[] = [
    { id: 1, src: '/gallery/cardinal.jpg', alt: 'Cardeal vermelho em um galho', category: 'Pássaros', width: 1920, height: 1280 },
    { id: 2, src: '/gallery/fallow.jpg', alt: 'Gamo em um campo', category: 'Animais', width: 1280, height: 1920 },
    { id: 3, src: '/gallery/lion.jpg', alt: 'Leão majestoso', category: 'Animais Selvagens', width: 1920, height: 1080 },
    { id: 4, src: '/gallery/puffin.jpg', alt: 'Puffin em uma rocha', category: 'Aves Marinhas', width: 1080, height: 1920 },
    { id: 5, src: '/gallery/squirrel.jpg', alt: 'Esquilo em um tronco de árvore', category: 'Pequenos Animais', width: 1920, height: 1280 },
    { id: 6, src: '/gallery/fotografo.jpg', alt: 'Fotógrafo em ação', category: 'Pessoas', width: 1280, height: 1920 },
    { id: 7, src: '/gallery/cardinal.jpg', alt: 'Casamento - detalhe do ambiente', category: 'Casamento', width: 1280, height: 1920 },
    { id: 8, src: '/gallery/lion.jpg', alt: 'Casamento - paisagem e emoção', category: 'Casamento', width: 1280, height: 1920 },
    { id: 9, src: '/gallery/bride.jpg', alt: 'Noiva sorrindo', category: 'Casamento', width: 1280, height: 1920 },
    { id: 10, src: '/gallery/bride2.jpg', alt: 'Noiva com vestido branco', category: 'Casamento', width: 1280, height: 1920 },
    { id: 11, src: '/gallery/shoes.jpg', alt: 'Sapatos de casamento', category: 'Casamento', width: 1280, height: 1920 },
    { id: 12, src: '/gallery/wedding.jpg', alt: 'Casal no altar', category: 'Casamento', width: 1280, height: 1920 },
    { id: 13, src: '/gallery/cake.jpg', alt: 'Bolo de casamento', category: 'Casamento', width: 1280, height: 1920 },
    { id: 15, src: '/gallery/flowers.jpg', alt: 'Arranjo de flores para casamento', category: 'Casamento', width: 1280, height: 1920 },
    { id: 16, src: '/gallery/love.jpg', alt: 'Casal apaixonado', category: 'Casamento', width: 1280, height: 1920 },
    { id: 17, src: '/gallery/newlyweds.jpg', alt: 'Recém-casados celebrando', category: 'Formatura', width: 1280, height: 1920 },
    { id: 18, src: '/gallery/party.jpg', alt: 'Festa de casamento', category: 'Casamento', width: 1280, height: 1920 },
    { id: 19, src: '/gallery/shoes (2).jpg', alt: 'Sapatos femininos em detalhe', category: 'Casamento', width: 1280, height: 1920 },
    { id: 20, src: '/gallery/wedding22.jpg', alt: 'Momento especial no casamento', category: 'Casamento', width: 1280, height: 1920 },
    { id: 21, src: '/gallery/love.jpg', alt: 'Olhares apaixonados', category: 'Casamento', width: 1280, height: 1920 },
    { id: 22, src: '/gallery/wedding.jpg', alt: 'Altar decorado para o casamento', category: 'Casamento', width: 1280, height: 1920 },
    { id: 23, src: '/gallery/love.jpg', alt: 'Casal sorrindo', category: 'Casamento', width: 1280, height: 1920 },
    { id: 24, src: '/gallery/flowers.jpg', alt: 'Flores do buquê', category: 'Casamento', width: 1280, height: 1920 },
    { id: 25, src: '/gallery/wedding22.jpg', alt: 'Detalhes da cerimônia', category: 'Casamento', width: 1280, height: 1920 },
    { id: 26, src: '/gallery/shoes.jpg', alt: 'Sapatos no tapete', category: 'Casamento', width: 1280, height: 1920 },
    { id: 27, src: '/gallery/cake.jpg', alt: 'Bolo decorado', category: 'Casamento', width: 1280, height: 1920 },
    { id: 28, src: '/gallery/newlyweds.jpg', alt: 'Casal feliz na saída da cerimônia', category: 'Casamento', width: 1280, height: 1920 },
    { id: 29, src: '/gallery/fotografo.jpg', alt: 'Fotógrafo captando emoções', category: 'Casamento', width: 1280, height: 1920 },
    { id: 30, src: '/gallery/love.jpg', alt: 'Casal apaixonado durante a cerimônia', category: 'Casamento', width: 1280, height: 1920 },
];

const ITEMS_PER_PAGE = 12;

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
    const [visibleItems, setVisibleItems] = useState<number>(ITEMS_PER_PAGE);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const observer = useRef<IntersectionObserver | null>(null);
    const lastItemRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
                }
            });
            if (node) observer.current.observe(node);
        },
        []
    );

    const categories = useMemo(() => ["Todas", ...Array.from(new Set(PHOTOS.map((p) => p.category)))], []);

    const filteredPhotos = useMemo(() =>
        selectedCategory === "Todas" ? PHOTOS : PHOTOS.filter((p) => p.category === selectedCategory),
        [selectedCategory]
    );

    const visiblePhotos = filteredPhotos.slice(0, visibleItems);

    useEffect(() => {
        document.title = "Galeria | Joel Pontes Fotografias";
    }, []);

    const openModal = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedIndex(null);
        document.body.style.overflow = "auto";
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (selectedIndex === null) return;
        if (e.key === "ArrowRight") setSelectedIndex((i) => (i! + 1) % filteredPhotos.length);
        if (e.key === "ArrowLeft") setSelectedIndex((i) => (i! - 1 + filteredPhotos.length) % filteredPhotos.length);
        if (e.key === "Escape") closeModal();
    };

    const shareUrl = (photo: Photo) => encodeURIComponent(window.location.href + "#" + photo.id);

    return (
        <main className="container mx-auto px-4 py-16" onKeyDown={handleKeyDown} tabIndex={0}>
            <header className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Galeria de Fotos</h1>
            </header>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setSelectedCategory(cat);
                            setVisibleItems(ITEMS_PER_PAGE);
                        }}
                        className={`px-4 py-2 rounded-full border text-sm font-medium ${selectedCategory === cat ? "bg-orange-500 text-white" : "bg-neutral-800 text-gray-300"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
                <AnimatePresence>
                    {visiblePhotos.map((photo, i) => {
                        const { id, ...imageProps } = photo;
                        return (
                            <motion.div
                                key={id}
                                ref={i === visiblePhotos.length - 1 ? lastItemRef : undefined}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="group relative mb-6 break-inside-avoid overflow-hidden rounded-xl shadow-md bg-neutral-900 hover:shadow-orange-500/30 hover:scale-[1.02] transition-all cursor-pointer"
                                onClick={() => openModal(i)}
                            >
                                <Image
                                    {...imageProps}
                                    alt={photo.alt || "Imagem da galeria"}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                                <div className="absolute bottom-0 left-0 p-2 bg-black/50 text-white text-xs w-full text-center">
                                    {photo.category}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

            </section>

            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-red-400"
                        aria-label="Fechar"
                    >
                        ×
                    </button>

                    <button
                        onClick={() =>
                            setSelectedIndex((i) => (i! - 1 + filteredPhotos.length) % filteredPhotos.length)
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-50 p-2 rounded-full hover:bg-white/10"
                        aria-label="Anterior"
                    >
                        <FaArrowLeft />
                    </button>

                    <div className="max-w-[90vw] max-h-[90vh] relative">
                        <Image
                            src={filteredPhotos[selectedIndex].src}
                            alt={filteredPhotos[selectedIndex].alt}
                            width={filteredPhotos[selectedIndex].width}
                            height={filteredPhotos[selectedIndex].height}
                            className="object-contain max-h-[80vh] rounded-lg"
                        />
                        <div className="text-white text-center mt-2 text-sm">
                            {filteredPhotos[selectedIndex].alt}
                        </div>

                        {/* Ícones de compartilhamento */}
                        <div className="flex justify-center gap-4 mt-4">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl(filteredPhotos[selectedIndex])}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-500 text-xl"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href={`https://api.whatsapp.com/send?text=${shareUrl(filteredPhotos[selectedIndex])}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-green-400 text-xl"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${shareUrl(filteredPhotos[selectedIndex])}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-sky-400 text-xl"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    <button
                        onClick={() =>
                            setSelectedIndex((i) => (i! + 1) % filteredPhotos.length)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-50 p-2 rounded-full hover:bg-white/10"
                        aria-label="Próximo"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            )}



        </main>
    );
}
