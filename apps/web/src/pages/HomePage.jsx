import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageCircle, Droplets, Shield, Leaf, Sprout, ShieldCheck, Droplet, Wind, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BenefitIcon from '@/components/BenefitIcon.jsx';
import ProductShowcase from '@/components/ProductShowcase.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const features = [{
    icon: Sprout,
    title: 'Plant-Based Bioplastic',
    description: 'Terbuat dari bahan nabati alami yang dapat diperbaharui, mengurangi ketergantungan pada minyak bumi.'
  }, {
    icon: ShieldCheck,
    title: 'Strong & Durable',
    description: 'Dirancang dengan teknologi khusus untuk memberikan kekuatan maksimal saat membawa beban berat.'
  }, {
    icon: Droplet,
    title: 'Leak Resistant',
    description: 'Struktur material yang padat mencegah kebocoran, aman untuk berbagai jenis kebutuhan.'
  }, {
    icon: Wind,
    title: 'Eco-Friendly',
    description: 'Dapat terurai secara alami kembali ke alam tanpa meninggalkan residu mikroplastik berbahaya.'
  }];

  return <>
      <Helmet>
        <title>NUSAEON - Kantong Bioplastik Ramah Lingkungan</title>
        <meta name="description" content="Solusi pengaganti plastik konvensional untuk kebutuhan sampah, laundry, dan dapur. Kunjungi www.nusaeon.co.id" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* NEW HERO SECTION */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background overflow-hidden">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text & CTA */}
                <motion.div className="flex flex-col justify-center order-1" initial={{
                opacity: 0,
                x: -30
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6
              }}>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 text-foreground tracking-tight">
                    Kantong Bioplastik Ramah Lingkungan
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-10 max-w-lg">
                    Solusi pengganti plastik konvensional untuk kebutuhan sampah, laundry, dan dapur.
                  </p>

                  {/* Benefit Icons */}
                  <div className="flex flex-col sm:flex-row gap-6 mb-12">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-3 rounded-xl shadow-sm text-foreground">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-foreground text-lg">Tahan Air</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-3 rounded-xl shadow-sm text-foreground">
                        <Shield className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-foreground text-lg">Kuat & Tidak Mudah Bocor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-3 rounded-xl shadow-sm text-foreground">
                        <Leaf className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-foreground text-lg">Ramah Lingkungan</span>
                    </div>
                  </div>

                  <Button asChild size="lg" className="w-fit btn-whatsapp font-bold text-lg h-14 px-8 rounded-xl">
                    <a href="https://wa.me/628111477006" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-6 w-6" />
                      Hubungi Kami via WhatsApp
                    </a>
                  </Button>
                </motion.div>

                {/* Right Column: Product Image */}
                <motion.div className="relative order-2" initial={{
                opacity: 0,
                x: 30
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }}>
                  <div className="relative w-full aspect-[4/3] lg:aspect-square flex items-center justify-center">
                    <img src="https://horizons-cdn.hostinger.com/5e313b32-1ec7-4ffa-89c7-dc508bdc300c/2dc533879f3fdaa1849c62f6a0f4b839.png" alt="Kantong Bioplastik Hitam 100L NUSAEON - Biodegradable, Eco-Friendly, Plant-Based, Heavy Duty & Strong, Leak Resistant" className="w-full h-full object-contain object-center drop-shadow-2xl" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* PRODUK KAMI SECTION */}
          <section className="py-24 bg-card relative">
            <div className="container-custom">
              <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}>
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">
                    Produk Kami
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Pilihan varian bioplastik berkualitas tinggi yang dirancang khusus untuk memenuhi kebutuhan spesifik Anda.
                  </p>
                </div>
                
                <Button asChild variant="ghost" className="w-fit group text-primary hover:text-primary/80 hover:bg-primary/5 font-semibold">
                  <Link to="/products">
                    Lihat Semua Produk
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              <ProductShowcase />
            </div>
          </section>

          {/* FEATURES/BENEFITS SECTION */}
          <section className="py-24 bg-background">
            <div className="container-custom">
              <motion.div className="mb-16" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Mengapa Memilih Kami?</h2>
                <p className="text-lg text-foreground/80 max-w-2xl">
                  Komitmen kami dalam memberikan kualitas terbaik sekaligus menjaga kelestarian lingkungan bumi.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }}>
                    <BenefitIcon icon={feature.icon} title={feature.title} description={feature.description} layout="vertical" />
                  </motion.div>)}
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <Leaf className="absolute -top-10 -left-10 h-64 w-64 text-secondary rotate-45" />
              <Leaf className="absolute -bottom-20 right-10 h-80 w-80 text-secondary -rotate-12" />
            </div>

            <div className="container-custom relative z-10 text-center">
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
                  Tertarik menggunakan produk Nusaeon?
                </h2>
                <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-10 text-balance">
                  Hubungi kami sekarang untuk informasi lebih lanjut atau pemesanan. Tim kami siap membantu mencarikan solusi kemasan terbaik untuk Anda.
                </p>
                <Button asChild size="lg" className="btn-whatsapp font-bold text-lg h-14 px-8 rounded-xl">
                  <a href="https://wa.me/628111477006" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat WhatsApp Sekarang
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}