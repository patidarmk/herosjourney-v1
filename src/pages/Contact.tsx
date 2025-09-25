import GameHeader from '@/components/GameHeader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Twitter, Users } from 'lucide-react';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { showSuccess } from '@/utils/toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    showSuccess('Message sent! We\'ll reply soon.');
    reset();
  };

  return (
    <>
      <GameHeader />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" {...register('name')} />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Input placeholder="Your Email" type="email" {...register('email')} />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" {...register('message')} />
                    {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span>hello@shadowsthron.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span>123 Shadow Lane, Darkwood City</span>
                </div>
                <div className="flex space-x-4 pt-4 border-t">
                  <a href="#" className="p-2 hover:bg-gray-100 rounded"><Twitter className="h-5 w-5" /></a>
                  <a href="#" className="p-2 hover:bg-gray-100 rounded"><Users className="h-5 w-5" /></a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-300 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Interactive Map Placeholder (e.g., Google Maps embed)</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">We're based in the heart of indie game dev hubs, ready to collaborate!</p>
            </CardContent>
          </Card>
        </div>
        <MadeWithApplaa />
      </div>
    </>
  );
};

export default Contact;