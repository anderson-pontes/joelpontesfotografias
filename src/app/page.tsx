import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';


import { CameraIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: 'Início | Joel Pontes',
    description: 'Bem-vindo ao portfólio de Joel Pontes. Fotografia profissional para todas as ocasiões.',
};

const heroImageUrl = '/images/fotografo.jpg';
const teaserImage1Url = '/images/cardinal.jpg';
const teaserImage2Url = '/images/fallow.jpg';
const teaserImage3Url = '/images/lion.jpg';


export default function HomePage() {
    const teaserImages = [
        { id: 1, src: teaserImage1Url, alt: 'Exemplo de Fotografia 1' },
        { id: 2, src: teaserImage2Url, alt: 'Exemplo de Fotografia 2' },
        { id: 3, src: teaserImage3Url, alt: 'Exemplo de Fotografia 3' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section
                className="h-[70vh] md:h-[85vh] relative flex items-center justify-center text-center"
            >
                <Image
                    src={heroImageUrl}
                    alt="Fotógrafo em ação"
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                    priority
                    className="z-0"
                />
                <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}
                <div className="relative z-20 p-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-playfair">
                        Capturando Momentos, Criando Memórias
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-playfair">
                        Fotografia profissional que conta a sua história com paixão e arte.
                    </p>
                    <Link
                        href="/gallery"
                        className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 inline-block"
                    >
                        Ver Galeria
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 md:py-24 bg-dark-card">
                <div className="container mx-auto px-6 text-center">
                    <UserCircleIcon className="w-16 h-16 mx-auto mb-6 text-violet-400" />
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sobre Mim</h2>
                    <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed text-lg">
                        Olá! Sou Joel Pontes, um apaixonado por contar histórias através das lentes. Com anos de experiência, especializo-me em [Seus Tipos de Fotografia], sempre buscando a luz perfeita e a emoção genuína em cada clique.
                    </p>
                </div>
            </section>

            {/* Gallery Teaser Section */}
            <section className="py-16 md:py-24 bg-dark-bg">
                <div className="container mx-auto px-6 text-center">
                    <CameraIcon className="w-16 h-16 mx-auto mb-6 text-violet-400" />
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Um Pouco do Meu Trabalho</h2>
                    <p className="max-w-xl mx-auto text-gray-300 mb-10 text-lg">
                        Explore uma seleção dos meus trabalhos e veja a paixão em cada detalhe.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
                        {teaserImages.map((img) => (
                            <div key={img.id} className="aspect-[4/3] bg-dark-surface rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 relative">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:opacity-75 transition-opacity"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/gallery"
                        className="bg-transparent border-2 border-violet-500 hover:bg-violet-500 text-violet-500 hover:text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 transform hover:scale-105 inline-block"
                    >
                        Visitar Galeria Completa
                    </Link>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-24 bg-dark-card">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
                        Entre em Contato
                    </h2>
                    <p className="max-w-xl mx-auto text-gray-300 mb-8 text-lg">
                        Vamos transformar suas ideias em imagens inesquecíveis. Fale comigo!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {/* Botão WhatsApp */}
                        <a
                            href="https://wa.me/5591999999999?text=Olá%2C%20gostaria%20de%20fazer%20um%20orçamento%20de%20fotos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.52 3.48a12.08 12.08 0 0 0-17.07 0c-4.68 4.68-4.68 12.28 0 16.96a12.08 12.08 0 0 0 17.07 0c4.68-4.68 4.68-12.28 0-16.96zm-3.02 11.56c-.35.99-1.75 1.81-2.45 1.89-.66.07-1.48.1-4.27-.91-3.58-1.38-5.61-4.9-5.78-5.13-.17-.24-1.37-1.83-1.37-3.5 0-1.66.87-2.48 1.17-2.77.3-.29.65-.36.87-.36h.66c.21 0 .5.04.72.54.28.64.95 2.24 1.03 2.41.08.17.14.38.03.6-.11.22-.16.35-.31.54-.15.18-.31.39-.44.52-.15.15-.31.31-.14.61.17.29.76 1.26 1.64 2.04 1.13.99 2.09 1.29 2.38 1.43.29.14.46.12.63-.07.17-.18.73-.85.92-1.14.2-.29.38-.25.63-.15.26.11 1.63.77 1.91.91.28.14.47.21.54.33.07.11.07 1.01-.27 2z" />
                            </svg>
                            Falar no WhatsApp
                        </a>

                        {/* Link Instagram */}
                        <a
                            href="https://www.instagram.com/seu_usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .6 1.5 1.1.5.5.9.9 1.1 1.5.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.6 1-1.1 1.5-.5.5-.9.9-1.5 1.1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.6-1.5-1.1-.5-.5-.9-.9-1.1-1.5-.2-.5-.4-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.6-1 1.1-1.5.5-.5.9-.9 1.5-1.1.5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 0 5.6 0 4.5.2 3.6.5c-.9.3-1.7.8-2.5 1.5-.8.8-1.3 1.6-1.5 2.5C-.2 5.5 0 6.6 0 8v8c0 1.4.2 2.5.5 3.4.3.9.8 1.7 1.5 2.5.8.8 1.6 1.3 2.5 1.5.9.3 2 .5 3.4.5h8c1.4 0 2.5-.2 3.4-.5.9-.3 1.7-.8 2.5-1.5.8-.8 1.3-1.6 1.5-2.5.3-.9.5-2 .5-3.4v-8c0-1.4-.2-2.5-.5-3.4-.3-.9-.8-1.7-1.5-2.5-.8-.8-1.6-1.3-2.5-1.5C18.5.2 17.4 0 16 0H8C6.6 0 5.5.2 4.6.5c-.9.3-1.7.8-2.5 1.5-.8.8-1.3 1.6-1.5 2.5C.2 5.5 0 6.6 0 8v8c0 1.4.2 2.5.5 3.4.3.9.8 1.7 1.5 2.5.8.8 1.6 1.3 2.5 1.5.9.3 2 .5 3.4.5h8c1.4 0 2.5-.2 3.4-.5.9-.3 1.7-.8 2.5-1.5.8-.8 1.3-1.6 1.5-2.5.3-.9.5-2 .5-3.4v-8c0-1.4-.2-2.5-.5-3.4-.3-.9-.8-1.7-1.5-2.5-.8-.8-1.6-1.3-2.5-1.5C18.5.2 17.4 0 16 0H8zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
                            </svg>
                            Ver no Instagram
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
}