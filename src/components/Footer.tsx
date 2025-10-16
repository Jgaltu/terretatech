import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#007AFF] to-[#008080] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TT</span>
              </div>
              <span className="text-xl font-bold">Terreta Tech</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Transformando Valencia con innovación y tecnología responsable.
              Somos la red de profesionales comprometidos con el futuro digital de nuestra tierra.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007AFF] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007AFF] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007AFF] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007AFF] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#pilares" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                  Nuestros Pilares
                </a>
              </li>
              <li>
                <a href="#acciones" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                  Acciones
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#hazte-socio" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                  Hazte Socio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Tecnologías</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Inteligencia Artificial</li>
              <li className="text-gray-400">Blockchain</li>
              <li className="text-gray-400">Big Data</li>
              <li className="text-gray-400">IoT</li>
              <li className="text-gray-400">Robótica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Terreta Tech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
