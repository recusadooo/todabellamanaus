import React, { useState, useEffect } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Star, CheckCircle, Users, Award, Heart, ArrowUp, Play, Calendar, Phone, MapPin, Clock } from 'lucide-react'
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import ImageCarousel from './components/ImageCarousel'
import SmoothScroll from './components/SmoothScroll'

// Import das imagens
import heroVideo from './assets/crioharmonizacao_video_thumbnail.png'
import clinicaInterior from './assets/clinica_todabella_interior.jpeg' // Usando a imagem original sem cortes
import fotoDoutora from "./assets/dra_adriana_nova.png.png";
import clinicaInterior1 from './assets/clinica_todabella_interior.jpg' // Usando a imagem original sem cortes
import draComShade from "./assets/dra_com_shade.png";
import logotipoTodabella from './assets/logo_todabella.png'
import logoNovaSelo from './assets/logo-nova-SELO-2.png'
import antesDepois1 from './assets/crioharmonizacao_antes_depois_1.png'
import antesDepois2 from './assets/crioharmonizacao_antes_depois_2.png'
import antesDepois3 from './assets/crioharmonizacao_antes_depois_3.png'
import antesDepois4 from './assets/crioharmonizacao_antes_depois_4.png'
import posGestacao from './assets/pos_gestacao_antes_depois_1.png'
import flacidez from './assets/flacidez_antes_depois_1.png'
import lipoHp from './assets/lipo_hp_antes_depois_1.png'
import depoimento1 from './assets/depoimento1.png'
import depoimento2 from './assets/depoimento2.png'
import depoimento3 from './assets/depoimento3.png'
import depoimento4 from './assets/depoimento4.png'
import depoimento5 from './assets/depoimento5.png'
import depoimento6 from './assets/depoimento6.png'
import depoimento7 from './assets/depoimento7.png'
import depoimento8 from './assets/depoimento8.png'
import depoimento9 from './assets/depoimento9.png'
import depoimento10 from './assets/depoimento10.png'
import depoimento11 from './assets/depoimento11.png'
import depoimento12 from './assets/depoimento12.png'
import depoimento13 from './assets/depoimento13.png'
import doutora_profile from './assets/doutora_profile1.png'
import espaço1 from './assets/espaço1.jpg'
import espaço2 from './assets/espaço2.jpeg'
import espaço3 from './assets/espaço3.jpeg'
import espaço4 from './assets/espaço4.jpg'
import espaço5 from './assets/espaço5.jpg'
import espaço6 from './assets/espaço6.jpg'
import espaço7 from './assets/espaço7.jpg'
import espaço8 from './assets/espaço8.jpeg'
import silhueta from './assets/silhueta.png'
import modelaCorpo from './assets/modela_corpo.png'
import musculo from './assets/musculo.png'
import botaoWhatsapp from './assets/botao_whatsapp.png'

// Imagens para o carrossel da seção "Sobre a Todabella" - em ordem sequencial
const carouselImages = [espaço1, espaço2, espaço3, espaço4, espaço5, espaço6, espaço7, espaço8]

// Imports por categoria
import lipedema1 from './assets/lipedema1.png'

import diastase1 from './assets/diastase1.png'
import diastase2 from './assets/diastase2.png'

import gorduraCompacta1 from './assets/gordura_compacta1.png'
import gorduraCompacta2 from './assets/gordura_compacta2.png'
import gorduraCompacta3 from './assets/gordura_compacta3.png'
import gorduraCompacta4 from './assets/gordura_compacta4.png'
import gorduraCompacta5 from './assets/gordura_compacta5.png'
import gorduraCompacta6 from './assets/gordura_compacta6.png'

import abdomenLipoHd1 from './assets/abdomen_lipohd1.png'
import abdomenLipoHd2 from './assets/abdomen_lipohd2.png'
import abdomenLipoHd3 from './assets/abdomen_lipohd3.png'
import abdomenLipoHd4 from './assets/abdomen_lipohd4.png'
import abdomenLipoHd5 from './assets/abdomen_lipohd5.png'
import abdomenLipoHd6 from './assets/abdomen_lipohd6.png'

import bracos1 from './assets/braços1.png'
import bracos2 from './assets/braços2.png'

import posGestacao1 from './assets/pos_gestacao1.png'
import posGestacao2 from './assets/pos_gestacao2.png'
import posGestacao3 from './assets/pos_gestacao3.png'
import posGestacao4 from './assets/pos_gestacao4.png'

import posAbdominoplastia1 from './assets/pos_abdominoplastia1.png'
import posAbdominoplastia2 from './assets/pos_abdominoplastia2.png'
import posAbdominoplastia3 from './assets/pos_abdominoplastia3.png'

import gordura4cm1 from './assets/gordura_4cm1.png'
import gordura4cm2 from './assets/gordura_4cm2.png'
import gordura4cm3 from './assets/gordura_4cm3.png'
import gordura4cm4 from './assets/gordura_4cm4.png'
import gordura4cm5 from './assets/gordura_4cm5.png'

import flacidez1 from './assets/Flacidez1.png'
import flacidez2 from './assets/Flacidez2.png'
import flacidez3 from './assets/Flacidez3.png'
import flacidez4 from './assets/Flacidez4.png'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeTab, setActiveTab] = useState('gordura-compacta')
  const [showVideoInline, setShowVideoInline] = useState(false)
  const [currentDepoimentoIndex, setCurrentDepoimentoIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState(null)
  const [videoKey, setVideoKey] = useState(0)
  
  // Estados para funcionalidade de arrastar
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return 1
    }
    return 3
  })

  // Estado para o carrossel da seção "Sobre a Todabella"
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Atualiza quantidade de itens visíveis conforme largura da tela
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 1024 ? 1 : 3)
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)

    return () => {
      window.removeEventListener('resize', updateItemsPerView)
    }
  }, [])

  // Prevenir scroll durante o arrastar
  useEffect(() => {
    if (isDragging) {
      document.body.style.overflow = 'hidden'
      document.body.style.userSelect = 'none'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.userSelect = 'auto'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.userSelect = 'auto'
    }
  }, [isDragging])

  // Carrossel automático para a seção "Sobre a Todabella"
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 2500) // 2.5 segundos

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const nextDepoimento = () => {
    setCurrentDepoimentoIndex((prev) => {
      const maxIndex = Math.max(0, depoimentoImages.length - itemsPerView)
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevDepoimento = () => {
    setCurrentDepoimentoIndex((prev) => {
      const maxIndex = Math.max(0, depoimentoImages.length - itemsPerView)
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  // Funções para funcionalidade de arrastar
  const handleDragStart = (e) => {
    setIsDragging(true)
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX
    setStartX(clientX)
    setCurrentX(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX
    const diff = clientX - startX
    setCurrentX(clientX)
    setDragOffset(diff)
    e.preventDefault() // Prevenir scroll durante o arrastar
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    
    setIsDragging(false)
    const threshold = 50 // Mínimo de pixels para considerar um swipe
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Arrastou para a direita - ir para anterior
        prevDepoimento()
      } else {
        // Arrastou para a esquerda - ir para próximo
        nextDepoimento()
      }
    }
    
    setDragOffset(0)
  }

  const casosImages = [antesDepois1, antesDepois2, antesDepois3, antesDepois4, posGestacao, flacidez, lipoHp]
  const depoimentoImages = [depoimento1, depoimento2, depoimento3,depoimento4, depoimento5, depoimento6,depoimento7, depoimento8, depoimento9,depoimento10, depoimento11, depoimento12,depoimento13]
  
  // Arrays organizados por categoria
  const lipedemaImages = [lipedema1]
  const diastaseImages = [diastase1, diastase2]
  const gorduraCompactaImages = [gorduraCompacta1, gorduraCompacta2, gorduraCompacta3, gorduraCompacta4, gorduraCompacta5, gorduraCompacta6]
  const abdomenLipoHdImages = [abdomenLipoHd1, abdomenLipoHd2, abdomenLipoHd3, abdomenLipoHd4, abdomenLipoHd5, abdomenLipoHd6]
  const bracosImages = [bracos1, bracos2]
  const posGestacaoImages = [posGestacao1, posGestacao2, posGestacao3, posGestacao4]
  const posAbdominoplastiaImages = [posAbdominoplastia1, posAbdominoplastia2, posAbdominoplastia3]
  const gordura4cmImages = [gordura4cm1, gordura4cm2, gordura4cm3, gordura4cm4, gordura4cm5]
  const flacidezImages = [flacidez1, flacidez2, flacidez3, flacidez4]
  
  // Mapeamento de vídeos para cada imagem
  const videoMapping = {
    // Lipedema
    'lipedema1': 'mAyV5G86Me4',
    
    // Diastase
    'diastase1': 'Sh2umPUxNTk',
    'diastase2': 'wgsF3WhNyRM',
    
    // Pos Abdominoplastia
    'pos_abdominoplastia1': 'Nh_lZTuK45U',
    'pos_abdominoplastia2': 'Sh8gYBdtmRw',
    'pos_abdominoplastia3': 'QRmy4Y71njk',
    
    // Gordura Compacta
    'gordura_compacta1': 'NDgDE670fmY',
    'gordura_compacta2': '0fSrhtpo0YA',
    'gordura_compacta3': 'VMTRyF0xbBk',
    'gordura_compacta4': 'cAPgw2r6jAo',
    'gordura_compacta5': 'D1ujTbWyJT4',
    'gordura_compacta6': 'CVM_CVsmJrU',
    
    // Abdomen Lipo HD
    'abdomen_lipohd1': 'b7-DlmCQ91k',
    'abdomen_lipohd2': 'y2ksAiXRESY',
    'abdomen_lipohd3': 'IrLdgWyPvLI',
    'abdomen_lipohd4': 'W0Gge0zKMRM',
    'abdomen_lipohd5': 'edxT9I-Elhk',
    'abdomen_lipohd6': 'MP0BVO1Tlv0',
    
    // Braços
    'braços1': 'iIQPD5bgIQE',
    'braços2': 'DxTDbJ40rCE',
    
    // Pos Gestação
    'pos_gestacao1': '1E9A_cINYOY',
    'pos_gestacao2': '8D-9GGD_ves',
    'pos_gestacao3': 'w_D85yv58iU',
    'pos_gestacao4': 'ygw_CfSfq8w',
    
    // Gordura 4cm
    'gordura_4cm1': 'gCAgOtTrW2E',
    'gordura_4cm2': 'yvuKoffLNcI',
    'gordura_4cm3': 'w2WD7iwdh40',
    'gordura_4cm4': '_cW4AOK_J-0',
    'gordura_4cm5': 'koX8-JeVXds',
    
    // Flacidez
    'Flacidez1': 'uPkA3IJ0uKs',
    'Flacidez2': 'xqfyV8VP-dk',
    'Flacidez3': '9P1Mw45b66Y',
    'Flacidez4': '9NLgxfSpGB4'
  }

  // Função para obter imagens da categoria ativa
  const getActiveCategoryImages = () => {
    switch(activeTab) {
      case 'lipedema': return lipedemaImages
      case 'diastase': return diastaseImages
      case 'pos-abdominoplastia': return posAbdominoplastiaImages
      case 'gordura-compacta': return gorduraCompactaImages
      case 'abdomen-lipo-hd': return abdomenLipoHdImages
      case 'bracos': return bracosImages
      case 'pos-gestacao': return posGestacaoImages
      case 'acima-4cm': return gordura4cmImages
      case 'flacidez': return flacidezImages
      default: return []
    }
  }

  // Função para obter o nome da imagem baseado no src
  const getImageName = (src) => {
    const filename = src.split('/').pop().split('.')[0]
    return filename
  }

  // Função para verificar se a imagem tem vídeo
  const hasVideo = (src) => {
    const imageName = getImageName(src)
    return videoMapping[imageName] !== undefined
  }

  // Função para extrair ID do YouTube de uma URL
  const extractYouTubeId = (url) => {
    if (!url) return null
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md py-3 sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logoNovaSelo} 
              alt="Todabella Estética Personalizada" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <SmoothScroll to="programa" className="font-medium hover:text-pink-600 transition-colors">O Programa</SmoothScroll>
            <SmoothScroll to="resultados" className="font-medium hover:text-pink-600 transition-colors">Resultados</SmoothScroll>
            <SmoothScroll to="indicado" className="font-medium hover:text-pink-600 transition-colors">Para Quem</SmoothScroll>
            <SmoothScroll to="doutora" className="font-medium hover:text-pink-600 transition-colors">Dra. Adriana</SmoothScroll>
          </nav>
          <Button className="md:hidden">
            <Users className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-pink-50 to-pink-50 py-5 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {!showVideoInline ? (
            // Conteúdo normal do hero
            <div className="flex flex-col md:flex-row items-center animate-fade-in">
              {/* Conteúdo à esquerda */}
              <div className="md:w-1/3 mb-10 md:mb-0 md:pr-12 order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                  Descubra o Poder da<br />
                  <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-400 bg-clip-text text-transparent">Crioharmonização</span>
                </h1>
                <p className="text-xl mb-8 text-gray-600 animate-fade-in-delay">
                  Seu Corpo, Suas Regras, Sem Cirurgia Plástica!
                </p>
                
                {/* Foto da doutora - apenas mobile */}
                <div className="md:hidden mb-6 flex justify-center relative animate-fade-in-delay">
                  <img 
                    src={draComShade}
                    alt="Dra. Adriana Ferreira"
                    className="w-full object-contain [mask-image:linear-gradient(to_bottom,black_80%,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
                  />
                  <div className="absolute bottom-2 right-2 bg-white p-3 rounded-lg shadow-lg z-10">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#E0A3C4]">12.000+</p>
                      <p className="text-xs text-gray-600">Clientes Atendidos</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#FF4D88] to-[#E0A3C4] hover:from-[#e04377] hover:to-[#c58bab] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=559299039215&text=Oiii!%20Vi%20a%20Crio%20e%20gostaria%20de%20falar%20com%20uma%20atendente!!', '_blank')}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Consulta
                  </Button>
                  <Button 
                    size="lg"
                    className="bg-white border-2 border-[#FF4D88] px-8 py-4 text-lg rounded-full transition-all duration-300 hover:bg-[#FFF0F4] hover:scale-105"
                    onClick={() => {
                      setShowVideoInline(true)
                      setVideoKey(prev => prev + 1)
                    }}
                  >
                    <Play className="w-5 h-5 mr-2 text-[#FF4D88]" />
                    <span className="bg-gradient-to-r from-[#FF4D88] to-[#E0A3C4] bg-clip-text text-transparent">Assista o Vídeo</span>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 mt-8 animate-fade-in-delay-3">
                  <Badge variant="outline" className="px-4 py-2 bg-white border-green-200 text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    SEM CORTES E SEM RISCOS
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 bg-white border-pink-200 text-pink-700">
                    <Award className="w-4 h-4 mr-2" />
                    TÉCNICA EXCLUSIVA
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 bg-white border-red-200 text-red-700">
                    <Heart className="w-4 h-4 mr-2" />
                    PROCEDIMENTO SEGURO
                  </Badge>
                </div>
              </div>

              {/* Imagem da doutora à direita - apenas desktop */}
              <div className="hidden md:flex justify-center md:justify-end order-1 md:order-2 relative">
                <img 
                  src={draComShade}
                  alt="Dra. Adriana Ferreira"
                  className="w-[1000px] md:w-[1200px] lg:w-[1400px] object-contain drop-shadow-2xl animate-fade-in-delay-3 [mask-image:linear-gradient(to_bottom,black_80%,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
                />

                <div className="absolute bottom-5 right-4 bg-white p-4 rounded-lg shadow-lg z-10">
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-pink-300 via-pink-400 to-pink-400 bg-clip-text text-transparent">12.000+</p>
                    <p className="text-front-bold text-gray-900">Mulheres Transformadas</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Vídeo inline centralizado
            <div className="text-center animate-fade-in">
              <div className="mb-8">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 mb-6"
                    onClick={() => setShowVideoInline(false)}
                  >
                    <ArrowUp className="w-5 h-5 mr-2 rotate-45" />
                    Voltar ao Conteúdo
                  </Button>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Apresentação do Programa de Crioharmonização
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Assista ao vídeo explicativo sobre nossa técnica exclusiva
                </p>
              </div>
              
              {/* Container do vídeo responsivo */}
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                  <iframe
                    key={videoKey}
                    src={`https://www.youtube.com/embed/WoGkyUBBZ7g?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1`}
                    title="Apresentação do Programa de Crioharmonização"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-600 text-sm">
                  Duração: 3:45 • Clínica Todabella Manaus
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* O que é Crioharmonização */}
      <section id="programa" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              O que é o Programa de <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-400 bg-clip-text text-transparent">Crioharmonização</span>
            </h2>
            <div className="w-100 h-1 bg-pink-300 mx-auto mb-1"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={clinicaInterior1} 
                alt="Programa Crioharmonização" 
                className=" aspect-[4/3] w-155 h-140 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="w-full h-95 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl shadow-2xl hidden items-center justify-center">
                <p className="text-rose-100 text-lg font-semibold">Programa Crioharmonização</p>
              </div>
            </div>

            <div>
              <p className="text-lg mb-4 leading-relaxed">
                <strong>É um programa de harmonização corporal <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-400 bg-clip-text text-transparent">EXCLUSIVO TODABELLA</span> </strong> com duração de 120 dias.
              </p>
              <p className="text-lg mb-4 text-gray-600 leading-relaxed">
              Sabe aquela gordurinha abdominal ou aquela dobra nas costas que incomoda toda vez que você pensa em usar uma roupa mais apertadinha? Você não está sozinha — muitas mulheres passam por isso. E é justamente para ajudar nesses momentos que esse programa existe.
              </p>
              <p className="text-lg mb-4 text-gray-600 leading-relaxed">
              Em apenas 5 passos simples, você vai ver seu corpo se transformar de forma natural e progressiva. Os resultados surpreendem tanto que muitas clientes dizem que é como se tivessem feito uma cirurgia plástica — só que sem cortes e sem riscos.
              </p>  
              <p className="text-lg mb-10 text-gray-600 leading-relaxed">
              Se você também deseja dar esse passo, será um prazer receber você em nossa clínica e mostrar de perto como é possível alcançar o corpo e a autoestima que você merece.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#FF4D88] to-[#E0A3C4] hover:from-[#e04377] hover:to-[#c58bab] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                Quero me Transformar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Por que os resultados são extraordinários */}
      <section className="py-10 px-4 bg-pink-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Porque os Resultados são extraordinários?
            </h2>
            <div className="w-14 h-1 bg-pink-600 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Três pilares combinados garantem redução de medidas com segurança e resultados duradouros.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <img src={silhueta} alt="Silhueta" className="w-[67.2px] h-[67.2px]" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Tratando a gordura</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                     Vamos programar a morte da célula de gordura.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <img src={modelaCorpo} alt="Modela Corpo" className="w-[67.2px] h-[67.2px]" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Modelando o corpo</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                   Você vai produzir um colágeno de qualidade, você vai ficar magra sem ficar flácida.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <img src={musculo} alt="Músculo" className="w-[67.2px] h-[67.2px]" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Desenhando o músculo</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                   A sua musculatura ficará em evidência e assim surgirá um abdômen em formato LipoHD.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Veja o que os nossos pacientes tem a dizer
            </h2>
            <div className="w-24 h-1 bg-pink-200 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Esqueça tudo que você já viu por aí, os resultados chegam a ser comparados a uma cirurgia plástica. 
              São muitos casos de sucesso
            </p>
          </div>

          {/* Carrossel de Depoimentos */}
          <div className="mb-12">
            <div className="relative max-w-6xl mx-auto px-4">
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentDepoimentoIndex * (100 / itemsPerView)}%)` 
                  }}
                  onMouseDown={handleDragStart}
                  onMouseMove={handleDragMove}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                  onTouchStart={handleDragStart}
                  onTouchMove={handleDragMove}
                  onTouchEnd={handleDragEnd}
                >
                  {depoimentoImages.map((depoimento, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src={depoimento} 
                          alt={`Depoimento ${index + 1}`}
                          className="w-full h-[28rem] object-cover"
                          draggable={false}
                          onDragStart={(e) => e.preventDefault}
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        <div className="w-full h-[28rem] bg-gradient-to-br from-pink-100 to-pink-200 hidden items-center justify-center">
                          <p className="text-pink-600 font-semibold text-2xl">Depoimento {index + 1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Botões de navegação */}
              <button
                onClick={prevDepoimento}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Depoimento anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextDepoimento}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Próximo depoimento"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Indicadores */}
              <div className="flex justify-center mt-10 space-x-4">
                {Array.from({ length: Math.max(1, depoimentoImages.length - (itemsPerView - 1)) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDepoimentoIndex(index)}
                    className={`w-5 h-5 rounded-full transition-all duration-300 ${
                      index === currentDepoimentoIndex 
                        ? 'bg-pink-600 scale-125' 
                        : 'bg-pink-200 hover:bg-pink-400'
                    }`}
                    aria-label={`Ir para grupo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-2 text-center">Veja os casos tratados</h3>
            <p className="text-center mb-8 text-gray-600">Navegue pelos botões para ver TODOS OS CASOS</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <Button 
                onClick={() => setActiveTab('gordura-compacta')}
                className={activeTab === 'gordura-compacta' 
                  ? "bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium min-w-[140px]" 
                  : "border border-pink-600 text-pink-600 bg-white px-6 py-3 rounded-full hover:bg-pink-50 text-sm font-medium min-w-[140px]"
                }
              >
                GORDURA COMPACTA
              </Button>
              <Button 
                onClick={() => setActiveTab('lipedema')}
                className={activeTab === 'lipedema' 
                  ? "bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium min-w-[140px]" 
                  : "border border-pink-600 text-pink-600 bg-white px-4 py-2 rounded-full hover:bg-pink-50 text-sm"
                }
              >
                LIPEDEMA
              </Button>
              <Button 
                onClick={() => setActiveTab('diastase')}
                className={activeTab === 'diastase' 
                  ? "bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium min-w-[140px]" 
                  : "border border-pink-600 text-pink-600 bg-white px-4 py-2 rounded-full hover:bg-pink-50 text-sm"
                }
              >
                DIASTASE
              </Button>
              <Button 
                onClick={() => setActiveTab('pos-abdominoplastia')}
                className={activeTab === 'pos-abdominoplastia' 
                  ? "bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium min-w-[140px]" 
                  : "border border-pink-600 text-pink-600 bg-white px-4 py-2 rounded-full hover:bg-pink-50 text-sm"
                }
              >
                POS-ABDOMINOPLASTIA
              </Button>
              <Button 
                onClick={() => setActiveTab('abdomen-lipo-hd')}
                className={activeTab === 'abdomen-lipo-hd' 
                  ? "bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium min-w-[140px]" 
                  : "border border-pink-600 text-pink-600 bg-white px-4 py-2 rounded-full hover:bg-pink-50 text-sm"
                }
              >
                ABDÔMEN LIPO HD
              </Button>
              <Button 
                onClick={() => setActiveTab('bracos')}
                className={activeTab === 'bracos' 
                  ? "bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium min-w-[140px]" 
                  : "border border-pink-600 text-pink-600 bg-white px-4 py-2 rounded-full hover:bg-pink-50 text-sm"
                }
              >
                BRAÇOS
              </Button>
              <Button 
                onClick={() => setActiveTab('pos-gestacao')}
                className={activeTab === 'pos-gestacao' 
                  ? "bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium min-w-[140px]" 
                  : "border border-pink-600 text-pink-600 bg-white px-4 py-2 rounded-full hover:bg-pink-50 text-sm"
                }
              >
                POS GESTAÇÃO
              </Button>
              <Button 
                onClick={() => setActiveTab('acima-4cm')}
                className={activeTab === 'acima-4cm' 
                  ? "bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium min-w-[140px]" 
                  : "border border-pink-600 text-pink-600 bg-white px-4 py-2 rounded-full hover:bg-pink-50 text-sm"
                }
              >
                ACIMA DE 4cm
              </Button>
              <Button 
                onClick={() => setActiveTab('flacidez')}
                className={activeTab === 'flacidez' 
                  ? "bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium min-w-[140px]" 
                  : "border border-pink-600 text-pink-600 bg-white px-4 py-2 rounded-full hover:bg-pink-50 text-sm"
                }
              >
                FLACIDEZ
              </Button>
            </div>
          </div>

          {/* Categorias Section */}
          {(activeTab === 'lipedema' || activeTab === 'diastase' || activeTab === 'pos-abdominoplastia' || activeTab === 'gordura-compacta' || activeTab === 'abdomen-lipo-hd' || activeTab === 'bracos' || activeTab === 'pos-gestacao' || activeTab === 'acima-4cm' || activeTab === 'flacidez') && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {getActiveCategoryImages().map((imagem, index) => (
                <div 
                  key={index} 
                  className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    if (hasVideo(imagem)) {
                      const imageName = getImageName(imagem)
                      const videoId = videoMapping[imageName]
                      setActiveVideo(videoId)
                    }
                  }}
                >
                  <img 
                    src={imagem} 
                    alt={`${activeTab} ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {hasVideo(imagem) && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                      <div className="w-16 h-16 bg-white bg-opacity-40 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                        <Play className="w-8 h-8 text-pink-600 ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="w-full h-64 bg-gradient-to-br from-pink-100 to-pink-200 hidden items-center justify-center rounded-lg">
                    <p className="text-pink-600 font-semibold">{activeTab} {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Depoimentos Section */}
          {activeTab === 'depoimentos' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {depoimentos.map((depoimento, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-4">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold">{depoimento.nome}</h4>
                        <p className="text-sm text-gray-500">{depoimento.tempo}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{depoimento.comentario}</p>
                    <div className="flex">
                      {[...Array(depoimento.estrelas)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Para quem é indicado */}
      <section id="indicado" className="pt-12 pb-20 px-4 bg-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Pra quem é indicado o programa de CrioHarmonização?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Se você já participou de programas de emagrecimento com dietas, perdeu peso, mas não conseguiu modelar o corpo como gostaria",
              "Se você já realizou cirurgias plásticas anteriormente, mas acabou adquirindo gordurinhas extras que estão gerando insegurança",
              "Se você é uma praticante assídua de atividades físicas e ainda não alcançou resultados significativos na academia",
              "Se você é uma mamãe que deseja recuperar o corpo que tinha antes da gestação",
              "Se você procura uma alternativa real para transformar o corpo sem recorrer à cirurgia plástica.",
              "Se você deseja atingir os resultados para conquistar o corpo dos seus sonhos",
            ].map((texto, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="flex items-start p-0">
                  <CheckCircle className="w-6 h-6 text-pink-600 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{texto}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Todabella */}
      <section id="sobre" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo de texto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Sobre a <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-400 bg-clip-text text-transparent">Todabella</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nossa equipe de profissionais altamente qualificados e experientes está comprometida em proporcionar uma experiência segura, acolhedora e personalizada para cada cliente.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">TECNOLOGIA DE PONTA</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Na Harmonização Corporal, estamos comprometidos com a inovação contínua. Estamos constantemente explorando novas tecnologias e técnicas para aprimorar nossos serviços e oferecer aos nossos clientes a melhor experiência possível.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">PACIENTES</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nossos serviços são respaldados por evidências científicas e testemunhos de clientes satisfeitos, garantindo resultados tangíveis e duradouros.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carrossel de imagens */}
            <div className="relative mt-8">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={image}
                        alt={`Todabella ${index + 1}`}
                        className="w-full h-[28.8rem] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Indicadores */}
              <div className="flex justify-center space-x-2 mt-6">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlideIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlideIndex ? 'bg-pink-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conheça a Dra. Adriana */}
      <section id="doutora" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={doutora_profile} 
                alt="Dra. Adriana Ferreira" 
                className="w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 [mask-image:linear-gradient(to_bottom,black_80%,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="w-full h-96 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl shadow-2xl hidden items-center justify-center">
                <p className="text-pink-700 text-xl font-semibold"> <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-400 bg-clip-text text-transparent">Dra. Adriana Ferreira</span></p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Conheça a <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-400 bg-clip-text text-transparent">Dra. Adriana Ferreira</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fisioterapeuta no ramo da estética há 13 anos, empresária e CEO da Clínica de Estética Todabella, 
                reconhecida na Capital de Manaus como especialista na área de Harmonização corporal, onde hoje, 
                já são mais de <strong>12.000 pacientes transformados.</strong>
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>Criadora do programa de Crioharmonização Corporal Exclusivo Todabella,</strong> método 
                revolucionário e que permite a realização do seu sonho pessoal.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#FF4D88] to-[#E0A3C4] hover:from-[#e04377] hover:to-[#c58bab] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=559299039215&text=Oiii!%20Vi%20a%20Crio%20e%20gostaria%20de%20falar%20com%20uma%20atendente!!', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar com a Dra. Adriana
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Botão flutuante do WhatsApp */}
      <div className="fixed bottom-12 right-12 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=559299039215&text=Oiii!%20Vi%20a%20Crio%20e%20gostaria%20de%20falar%20com%20uma%20atendente!!"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110 animate-bounce"
        >
          <img 
            src={botaoWhatsapp} 
            alt="WhatsApp" 
            className="w-16 h-16 rounded-full shadow-2xl"
          />
        </a>
      </div>

      {/* Seta animada no meio da tela */}
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-8 z-40">
        <div className="animate-bounce">
          <ArrowUp className="w-8 h-8 text-pink-400 opacity-60 rotate-180" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-pink-200  text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="md:col-span-2">
              <img 
                src={logotipoTodabella} 
                alt="Todabella" 
                className="h-16 w-auto mb-6 -mt-8"
              />
              <div className="flex space-x-4 mb-4 -mt-2">
                <a
                  href="https://www.instagram.com/todabellamanaus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/todabellaesteticapersonalizada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@todabellamanaus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <FaTiktok className="w-6 h-6" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=559299039215&text=Oiii!%20Gostaria%20de%20falar%20com%20uma%20atendente!!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-800 text-bold text-lg mb-4 text-base -mt-2">
                Transformando vidas através da Crioharmonização Corporal. 
                Mais de 12.000 clientes atendidos e muitas vidas transformadas.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-lg text-gray-900">Localização</h3>
              <ul className="space-y-1">
                <li className="flex items-center text-base text-gray-800">
                  <MapPin className="w-8 h-8 mr-2 -ml-2" />
                  <a
                    href="https://share.google/jJguOF0CRQhKqUf4C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    R. Mem de Sá, 470 - Dom Pedro, Manaus - AM, 69040-700
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="https://share.google/jJguOF0CRQhKqUf4C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Ver no Mapa
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-lg text-gray-900">Contato</h3>
              <ul className="space-y-1">
                <li className="flex items-center text-base text-gray-800"><Phone className="w-4 h-4 mr-2" /> (92) 9903-9215</li>
                <li className="flex items-center text-base text-gray-800"><Clock className="w-4 h-4 mr-2" /> Seg-Sex: 9h às 20h, <br/> Sábado: 8h às 13h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-4 text-center text-gray-400">
            <p className="text-sm">&copy; 2024 Todabella Manaus. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>



      {/* Modal de Vídeo */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors text-2xl font-bold"
            >
              ✕ Fechar
            </button>
            <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1`}
                title="Vídeo"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#FF4D88] to-[#E0A3C4] hover:from-[#e04377] hover:to-[#c58bab] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default App

