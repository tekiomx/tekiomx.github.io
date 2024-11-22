import React from 'react';
import { Hammer, Frame, Wrench, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tekio
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Armamos, colocamos y reparamos
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfMGD6zLWUYT95j6M96pWk3OUK0TgFL8igRfIOeW6yCwr_0kQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Agenda tu servicio ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Hammer className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Armamos Muebles
              </h3>
              <p className="text-gray-600">
                Somos expertos en ensamblar cualquier tipo de mueble, desde escritorios hasta libreros
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Frame className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Colocamos
              </h3>
              <p className="text-gray-600">
                Colgamos cuadros, repisas y todo lo que necesites para decorar tu espacio
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reparaciones Menores
              </h3>
              <p className="text-gray-600">
                Solucionamos pequeños problemas del hogar para mantener tu espacio perfecto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                ¿Por qué elegir Tekio?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Expertos de Confianza</h3>
                    <p className="text-gray-600">Trabajamos con técnicos son profesionales capacitados y de confianza</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Servicio Garantizado</h3>
                    <p className="text-gray-600">Tu satisfacción es nuestra prioridad</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Precios Transparentes</h3>
                    <p className="text-gray-600">Sin sorpresas ni costos ocultos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
                alt="Experto trabajando"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Transforma tu espacio hoy mismo
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            En Tekio creemos que todas las personas merecen vivir en un espacio que les inspire y les de paz
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfMGD6zLWUYT95j6M96pWk3OUK0TgFL8igRfIOeW6yCwr_0kQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Agenda tu servicio ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">Tekio</h2>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Tekio. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;