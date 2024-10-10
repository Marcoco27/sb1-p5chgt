import React from 'react'
import { ShoppingCart, Star, Book, ThumbsUp, ChevronRight } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="https://placehold.co/150x50?text=AirFryMalin" alt="AirFryMalin Logo" className="h-10" />
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#comparatif" className="text-gray-600 hover:text-blue-600">Comparatif</a></li>
              <li><a href="#guide" className="text-gray-600 hover:text-blue-600">Guide d'achat</a></li>
              <li><a href="#recettes" className="text-gray-600 hover:text-blue-600">Recettes</a></li>
              <li><a href="#blog" className="text-gray-600 hover:text-blue-600">Blog</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">AirFryMalin.fr : Votre guide expert des meilleures friteuses à air</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Découvrez, comparez et choisissez la friteuse à air parfaite pour une cuisine saine et délicieuse.</p>
            <a href="#comparatif" className="bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full text-xl hover:bg-yellow-300 transition duration-300 inline-block">Voir notre comparatif</a>
          </div>
        </section>

        <section id="comparatif" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comparatif des meilleures friteuses à air</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 border">Modèle</th>
                    <th className="p-4 border">Capacité</th>
                    <th className="p-4 border">Puissance</th>
                    <th className="p-4 border">Prix</th>
                    <th className="p-4 border">Note</th>
                    <th className="p-4 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border">Philips Airfryer XXL</td>
                    <td className="p-4 border">7L</td>
                    <td className="p-4 border">2225W</td>
                    <td className="p-4 border">199.99€</td>
                    <td className="p-4 border">
                      <div className="flex text-yellow-400">
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </div>
                    </td>
                    <td className="p-4 border">
                      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Voir l'offre</a>
                    </td>
                  </tr>
                  {/* Ajoutez d'autres lignes pour d'autres modèles */}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="guide" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comment choisir sa friteuse à air ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Critères importants :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Capacité : adaptée à la taille de votre famille</li>
                  <li>Puissance : pour une cuisson rapide et efficace</li>
                  <li>Fonctionnalités : programmes préréglés, écran digital, etc.</li>
                  <li>Facilité de nettoyage : pièces compatibles lave-vaisselle</li>
                  <li>Prix : en fonction de votre budget</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Nos conseils :</h3>
                <p>Choisissez une friteuse à air avec une capacité d'au moins 3L pour une famille de 4 personnes. Optez pour des modèles avec une puissance d'au moins 1500W pour des cuissons rapides. Privilégiez les appareils avec des programmes préréglés pour plus de facilité d'utilisation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="recettes" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Recettes spéciales friteuse à air</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RecipeCard
                title="Frites maison croustillantes"
                image="https://source.unsplash.com/random/400x300?fries"
                description="Des frites dorées et croustillantes avec 90% moins d'huile !"
              />
              <RecipeCard
                title="Poulet rôti juteux"
                image="https://source.unsplash.com/random/400x300?roasted+chicken"
                description="Un poulet parfaitement cuit, à la peau croustillante et à la chair juteuse."
              />
              <RecipeCard
                title="Légumes grillés savoureux"
                image="https://source.unsplash.com/random/400x300?grilled+vegetables"
                description="Un mélange de légumes grillés pleins de saveurs et de nutriments."
              />
            </div>
            <div className="text-center mt-8">
              <a href="#" className="text-blue-600 hover:underline">Voir toutes nos recettes</a>
            </div>
          </div>
        </section>

        <section id="blog" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Notre blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BlogPost
                title="Les 5 erreurs à éviter avec votre friteuse à air"
                image="https://source.unsplash.com/random/400x300?cooking"
                excerpt="Découvrez les erreurs courantes et comment les éviter pour tirer le meilleur parti de votre friteuse à air."
              />
              <BlogPost
                title="Friteuse à air vs Four traditionnel : le match !"
                image="https://source.unsplash.com/random/400x300?kitchen"
                excerpt="Comparaison détaillée entre la friteuse à air et le four traditionnel : avantages, inconvénients et conseils d'utilisation."
              />
            </div>
            <div className="text-center mt-8">
              <a href="#" className="text-blue-600 hover:underline">Voir tous les articles</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <img src="https://placehold.co/150x50?text=AirFryMalin" alt="AirFryMalin Logo" className="h-10 mb-4" />
              <p className="text-sm">&copy; 2023 AirFryMalin.fr. Tous droits réservés.</p>
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <ul className="flex justify-center space-x-6">
                <li><a href="#" className="hover:text-blue-400">À propos</a></li>
                <li><a href="#" className="hover:text-blue-400">Mentions légales</a></li>
                <li><a href="#" className="hover:text-blue-400">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-right">
              <div className="flex justify-end space-x-4">
                <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function RecipeCard({ title, image, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Voir la recette</a>
      </div>
    </div>
  )
}

function BlogPost({ title, image, excerpt }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Lire l'article</a>
      </div>
    </div>
  )
}

export default App