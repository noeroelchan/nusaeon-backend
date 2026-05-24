import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Leaf, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
function AboutUsPage() {
  const values = [{
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Every decision we make prioritizes environmental impact and long-term ecological health.'
  }, {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in product quality and customer service.'
  }, {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'Investing in research and development to improve our sustainable solutions.'
  }, {
    icon: Target,
    title: 'Partnership Focus',
    description: 'Building lasting relationships with clients, suppliers, and communities.'
  }];
  const metrics = [{
    value: '2024',
    label: 'Founded'
  }, {
    value: '47%',
    label: 'Year-over-year growth'
  }, {
    value: '23',
    label: 'Countries served'
  }, {
    value: '94%',
    label: 'Customer satisfaction'
  }];
  return <>
      <Helmet>
        <title>About Us - NUSAEON Sustainable Packaging</title>
        <meta name="description" content="Learn about NUSAEON's mission to revolutionize packaging through sustainable cassava-based solutions. Visit www.nusaeon.co.id to learn more." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative py-20 pt-32 lg:pt-40 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1612758456015-3d41b5d04c8b" alt="About NUSAEON" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
            </div>

            <div className="container-custom mx-auto relative z-10">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance" style={{
                letterSpacing: '-0.02em'
              }}>
                  About NUSAEON
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Solusi pengganti plastik konvensional untuk kebutuhan sampah, laundry, dan dapur yang ramah lingkungan.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container-custom mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5
              }}>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Our Mission</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Innovating sustainable packaging solutions from cassava to reduce global plastic waste and create a circular economy for packaging materials.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Our Vision</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To become the global leader in biodegradable packaging, making sustainable choices accessible and affordable for businesses worldwide.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5
              }}>
                  <div className="grid grid-cols-2 gap-6">
                    {metrics.map((metric, index) => <motion.div key={metric.label} initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}>
                        <Card className="h-full border-border bg-card hover:shadow-md transition-shadow">
                          <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                            <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                              {metric.value}
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">
                              {metric.label}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>)}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="container-custom mx-auto">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Values</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => <motion.div key={value.title} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    <Card className="h-full hover:-translate-y-1 transition-transform duration-300">
                      <CardContent className="p-8">
                        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                          <value.icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-balance text-foreground">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container-custom mx-auto">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Leadership</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Visionary leadership driving sustainable innovation
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }}>
                <Card className="overflow-hidden border-border bg-card">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="aspect-square lg:aspect-auto overflow-hidden bg-muted">
                        <img src="https://horizons-cdn.hostinger.com/5e313b32-1ec7-4ffa-89c7-dc508bdc300c/2f7334079c860ce706cd72a8f5ed6f1b.jpg" alt="Sesan Nazar Kanin, Chief Executive Officer" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4">
                          <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold tracking-wide uppercase bg-secondary/20 text-secondary-foreground rounded-full">
                            Chief Executive Officer
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black mb-6 text-balance">
                          Shesan Nazar Kanin
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          With over 15 years of experience in sustainable materials and packaging innovation, Sesan leads NUSAEON with a clear vision: to transform the global packaging industry through cassava-based solutions that are both environmentally responsible and commercially viable.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          Her commitment to sustainability extends beyond business metrics. Sesan believes that true innovation means creating products that benefit not just our customers, but also the communities we serve and the planet we share. Under her leadership, NUSAEON has grown from a startup concept to a trusted partner for companies worldwide.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}
export default AboutUsPage;