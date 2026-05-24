
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import OrderForm from '@/components/OrderForm.jsx';
import SuccessMessage from '@/components/SuccessMessage.jsx';

function ContactOrderPage() {
  const [submittedOrder, setSubmittedOrder] = useState(null);

  const whatsappNumbers = [
    {
      number: '+62 878-8178-7788',
      link: 'https://wa.me/62878817877788',
      label: 'Primary',
      isPrimary: true
    },
    {
      number: '+62 857-1021-6756',
      link: 'https://wa.me/62857102167756',
      label: 'Secondary',
      isPrimary: false
    }
  ];

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp (Primary)',
      value: '+62 878-8178-7788',
      link: 'https://wa.me/62878817877788',
      isWhatsApp: true
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp (Secondary)',
      value: '+62 857-1021-6756',
      link: 'https://wa.me/62857102167756',
      isWhatsApp: true
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'shesan@nusaeon.co.id',
      link: 'mailto:shesan@nusaeon.co.id',
      isWhatsApp: false
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Jakarta, Indonesia',
      link: null,
      isWhatsApp: false
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM',
      link: null,
      isWhatsApp: false
    }
  ];

  const emailPurposes = [
    {
      email: 'shesan@nusaeon.co.id',
      purpose: 'General Inquiries & Customer Service',
      description: 'Use this email for general questions, product information, and customer support. Our team responds within 24 hours.'
    },
    {
      email: 'sales@nusaeon.co.id',
      purpose: 'Order Confirmations & Sales Follow-up',
      description: 'For order confirmations, sales inquiries, bulk pricing, and sales-related follow-ups. We provide personalized support for your orders.'
    },
    {
      email: 'info@nusaeon.co.id',
      purpose: 'Corporate Information & Business Partnerships',
      description: 'For corporate inquiries, business partnerships, media requests, and strategic collaborations. Connect with our business development team.'
    }
  ];

  const handleOrderSuccess = (order) => {
    setSubmittedOrder(order);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Contact & Order - NUSAEON Sustainable Packaging</title>
        <meta name="description" content="Get in touch with NUSAEON to discuss your sustainable packaging needs. Submit an order inquiry and our team will contact you shortly via www.nusaeon.co.id" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 pt-32 lg:pt-40 bg-muted">
            <div className="container-custom mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-black mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  Contact & Order
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Ready to make the switch to sustainable packaging? Get in touch with us today and help build a greener future.
                </p>
              </motion.div>

              {submittedOrder ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl mx-auto"
                >
                  <SuccessMessage order={submittedOrder} />
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-border shadow-md">
                      <CardHeader className="bg-card border-b border-border pb-6 pt-8">
                        <CardTitle className="text-2xl font-bold">Submit an Order Inquiry</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-8">
                        <OrderForm onSuccess={handleOrderSuccess} />
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <Card className="border-border shadow-md">
                      <CardHeader className="bg-card border-b border-border pb-6 pt-8">
                        <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-8 space-y-6">
                        {contactInfo.map((info, index) => (
                          <motion.div
                            key={`${info.title}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-5"
                          >
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${info.isWhatsApp ? 'bg-green-100 dark:bg-green-900/30' : 'bg-secondary/10'}`}>
                              <info.icon className={`h-6 w-6 ${info.isWhatsApp ? 'text-green-600 dark:text-green-400' : 'text-secondary'}`} />
                            </div>
                            <div className="flex flex-col items-start">
                              <p className="text-sm font-bold text-muted-foreground mb-1 uppercase tracking-wider">
                                {info.title}
                              </p>
                              {info.link ? (
                                <a 
                                  href={info.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`${info.isWhatsApp ? 'btn-whatsapp' : 'text-base font-medium hover:text-primary transition-colors duration-200'} ${info.isWhatsApp ? 'px-4 py-2 mt-1 rounded-lg font-bold text-sm inline-flex items-center gap-2' : ''}`}
                                >
                                  {info.isWhatsApp && <MessageCircle className="h-4 w-4" />}
                                  {info.value}
                                </a>
                              ) : (
                                <p className="text-base font-medium">{info.value}</p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="bg-primary text-primary-foreground border-none shadow-xl">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold mb-4 text-white">Quick WhatsApp Contact</h3>
                        <p className="text-sm text-primary-foreground/80 mb-6">
                          Choose your preferred WhatsApp number to chat with our team directly:
                        </p>
                        <div className="space-y-3">
                          {whatsappNumbers.map((wa) => (
                            <a
                              key={wa.number}
                              href={wa.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 group"
                            >
                              <div className="flex items-center gap-3">
                                <MessageCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                                <div>
                                  <p className="font-bold text-white">{wa.number}</p>
                                  <p className="text-xs text-primary-foreground/70">{wa.label}</p>
                                </div>
                              </div>
                              <span className="text-white/60 group-hover:text-white transition-colors">→</span>
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              )}
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container-custom mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Email Information</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the right email address for your inquiry
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {emailPurposes.map((item, index) => (
                  <motion.div
                    key={item.email}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg border-border group">
                      <CardContent className="p-8">
                        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Mail className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-balance text-foreground">{item.purpose}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                          {item.description}
                        </p>
                        <a 
                          href={`mailto:${item.email}`}
                          className="inline-flex items-center px-4 py-2.5 bg-secondary/10 text-secondary-foreground rounded-lg font-bold text-sm hover:bg-secondary hover:text-white transition-colors duration-200"
                        >
                          {item.email}
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactOrderPage;
