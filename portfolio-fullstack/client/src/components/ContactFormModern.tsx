import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '../lib/validations';
import { useContactMutation } from '../hooks/useContact';
import clsx from 'clsx';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const mutation = useContactMutation();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await mutation.mutateAsync(data);
      reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'flavio@example.com',
      href: 'mailto:flavio@example.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+54 (381) XXX-XXXX',
      href: 'tel:+54381XXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Tucumán, Argentina',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-police-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-police-light mb-4">
            Ponte en <span className="text-police-gold">Contacto</span>
          </h2>
          <p className="text-lg text-police-light opacity-70 max-w-2xl mx-auto">
            Estoy disponible para proyectos y colaboraciones. No dudes en contactarme.
          </p>
        </div>

        {/* Información de contacto */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <a
                key={info.label}
                href={info.href}
                className="p-6 bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 rounded-lg hover:border-opacity-40 hover:bg-opacity-20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-police rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all">
                  <Icon className="w-6 h-6 text-police-gold" />
                </div>
                <h3 className="text-police-gold font-bold mb-2 uppercase tracking-wider text-sm">
                  {info.label}
                </h3>
                <p className="text-police-light">{info.value}</p>
              </a>
            );
          })}
        </div>

        {/* Formulario de contacto */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 rounded-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-police-gold font-bold mb-2">
                  Nombre Completo *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={clsx(
                    'w-full px-4 py-3 bg-police-dark border rounded-lg text-police-light focus:outline-none focus:ring-2 focus:ring-police-gold transition-all',
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-police-gold border-opacity-30 focus:border-opacity-50'
                  )}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-police-gold font-bold mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={clsx(
                    'w-full px-4 py-3 bg-police-dark border rounded-lg text-police-light focus:outline-none focus:ring-2 focus:ring-police-gold transition-all',
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-police-gold border-opacity-30 focus:border-opacity-50'
                  )}
                  placeholder="tu.email@ejemplo.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Asunto */}
              <div>
                <label htmlFor="subject" className="block text-police-gold font-bold mb-2">
                  Asunto *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className={clsx(
                    'w-full px-4 py-3 bg-police-dark border rounded-lg text-police-light focus:outline-none focus:ring-2 focus:ring-police-gold transition-all',
                    errors.subject
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-police-gold border-opacity-30 focus:border-opacity-50'
                  )}
                  placeholder="Asunto del mensaje"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-police-gold font-bold mb-2">
                  Mensaje *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className={clsx(
                    'w-full px-4 py-3 bg-police-dark border rounded-lg text-police-light focus:outline-none focus:ring-2 focus:ring-police-gold transition-all resize-none',
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-police-gold border-opacity-30 focus:border-opacity-50'
                  )}
                  placeholder="Escribe tu mensaje aquí..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Mensajes de estado */}
              {mutation.isSuccess && (
                <div className="p-4 bg-green-500 bg-opacity-10 border border-green-500 rounded-lg text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
                </div>
              )}

              {mutation.isError && (
                <div className="p-4 bg-red-500 bg-opacity-10 border border-red-500 rounded-lg text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <span>{mutation.error?.message || 'Error al enviar el mensaje'}</span>
                </div>
              )}

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={mutation.isPending}
                className={clsx(
                  'w-full py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2',
                  mutation.isPending
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-police hover:shadow-lg hover:shadow-police-gold/50'
                )}
              >
                {mutation.isPending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="text-white">Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-white" />
                    <span className="text-white">Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
