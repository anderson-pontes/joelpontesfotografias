// app/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Para imagens otimizadas
import type { Metadata } from 'next';


import { CameraIcon, UserCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Início | Nome do Fotógrafo',
  description: 'Bem-vindo ao portfólio de [Nome do Fotógrafo]. Fotografia profissional para todas as ocasiões.',
};

// URLs de Imagem (substitua por suas imagens na pasta /public)
const heroImageUrl = '/images/hero-photographer.jpg'; // Ex: public/images/hero-photographer.jpg
const teaserImage1Url = '/images/teaser1.jpg';
const teaserImage2Url = '/images/teaser2.jpg';
const teaserImage3Url = '/images/teaser3.jpg';

// Certifique-se de ter essas imagens na pasta /public/images/

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
          priority // Carregar esta imagem com prioridade
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}
        <div className="relative z-20 p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Capturando Momentos, Criando Memórias
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Fotografia profissional que conta a sua história com paixão e arte.
          </p>
          <Link
            href="/gallery"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 inline-block"
          >
            Ver Galeria
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-dark-card">
        <div className="container mx-auto px-6 text-center">
          <UserCircleIcon className="w-16 h-16 mx-auto mb-6 text-orange-400" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sobre Mim</h2>
          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed text-lg">
            Olá! Sou [Nome do Fotógrafo], um apaixonado por contar histórias através das lentes. Com anos de experiência, especializo-me em [Seus Tipos de Fotografia], sempre buscando a luz perfeita e a emoção genuína em cada clique.
          </p>
        </div>
      </section>

      {/* Gallery Teaser Section */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="container mx-auto px-6 text-center">
          <CameraIcon className="w-16 h-16 mx-auto mb-6 text-orange-400" />
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
            className="bg-transparent border-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 transform hover:scale-105 inline-block"
          >
            Visitar Galeria Completa
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-dark-card">
        <div className="container mx-auto px-6 text-center">
          <EnvelopeIcon className="w-16 h-16 mx-auto mb-6 text-orange-400" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Entre em Contato</h2>
          <p className="max-w-xl mx-auto text-gray-300 mb-8 text-lg">
            Pronto para criar algo incrível? Envie uma mensagem e vamos conversar sobre seu projeto.
          </p>
          <a
            href="mailto:seuemail@exemplo.com"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 inline-block"
          >
            Enviar Email
          </a>
        </div>
      </section>
    </>
  );
}