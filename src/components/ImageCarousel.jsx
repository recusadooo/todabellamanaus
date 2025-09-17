import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from './ui/button'

const ImageCarousel = ({ images, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image, index) => {
    setSelectedImage({ image, index })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((categoria, index) => (
          <Button 
            key={index}
            variant={index === selectedCategory ? "default" : "outline"}
            className={index === selectedCategory ? "bg-pink-500 hover:bg-pink-600" : "border-pink-200 hover:bg-pink-50"}
            onClick={() => setSelectedCategory(index)}
          >
            {categoria}
          </Button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((imagem, index) => (
          <div 
            key={index} 
            className="relative group cursor-pointer"
            onClick={() => openModal(imagem, index)}
          >
            <img 
              src={imagem} 
              alt={`Caso tratado ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="w-full h-64 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg shadow-lg hidden items-center justify-center">
              <p className="text-pink-600 font-semibold">Imagem {index + 1}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ChevronRight className="w-6 h-6 text-pink-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage.image} 
              alt={`Caso tratado ${selectedImage.index + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageCarousel

