import { Coffee, Croissant, Clock, MapPin } from 'lucide-react'

const Index = () => {
  const menuItems = [
    {
      name: "Espresso",
      description: "Rich and aromatic single shot of espresso",
      price: "$3.50"
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: "$4.50"
    },
    {
      name: "Avocado Toast",
      description: "Sourdough bread with avocado, cherry tomatoes, and feta",
      price: "$8.50"
    },
    {
      name: "Blueberry Muffin",
      description: "Freshly baked with organic blueberries",
      price: "$3.75"
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Brew & Bites</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Artisanal coffee and fresh pastries in the heart of the city
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Our Story</h2>
            <p className="text-stone-600 mb-6">
              Founded in 2015, Brew & Bites started as a small coffee cart and has grown into a beloved neighborhood cafe. 
              We source our beans directly from sustainable farms and bake all our pastries fresh daily.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Coffee className="text-amber-600 mr-2" size={24} />
                <span className="text-stone-700">Specialty Coffee</span>
              </div>
              <div className="flex items-center">
                <Croissant className="text-amber-600 mr-2" size={24} />
                <span className="text-stone-700">Fresh Pastries</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-amber-600 mr-2" size={24} />
                <span className="text-stone-700">Open Daily</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-amber-600 mr-2" size={24} />
                <span className="text-stone-700">Downtown Location</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Coffee preparation" 
              className="rounded-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Cafe interior" 
              className="rounded-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Pastries" 
              className="rounded-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Coffee beans" 
              className="rounded-lg h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-stone-800">{item.name}</h3>
                  <span className="text-amber-600 font-medium">{item.price}</span>
                </div>
                <p className="text-stone-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Visit Us</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-stone-700">Address</h3>
                <p className="text-stone-600">123 Coffee Street, Downtown</p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Hours</h3>
                <p className="text-stone-600">Monday - Friday: 7am - 7pm</p>
                <p className="text-stone-600">Saturday - Sunday: 8am - 6pm</p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Contact</h3>
                <p className="text-stone-600">hello@brewandbites.com</p>
                <p className="text-stone-600">(123) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="h-96 w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215018125487!2d-73.9878449245256!3d40.7484409713896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689784291071!5m2!1sen!2sus" 
              className="w-full h-full rounded-lg border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;