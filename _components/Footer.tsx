const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-dark-card text-gray-400 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentYear} AlphaBit IA. Todos os direitos reservados.</p>
         
        </div>
      </footer>
    );
  };
  
  export default Footer;