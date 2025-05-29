// components/Footer.tsx
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-dark-card text-gray-400 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentYear} Nome do Fotógrafo. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Criado com ❤️ e Next.js
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;