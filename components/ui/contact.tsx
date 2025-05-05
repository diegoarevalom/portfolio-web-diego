import intersectionObserver from '@/hooks/intersectionObserver';
import React, { useEffect } from 'react'
import { Tabs, TabsContent } from './tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Label } from './label';
import { Input } from './input';
import { Button } from './button';
import Image from 'next/image';


interface ContactProps {
  ref: React.RefObject<HTMLElement | null>;
}


function Contact({ ref }: ContactProps) {
  const [, isVisible] = intersectionObserver({ threshold: 0.5 });
  useEffect(() => {
    if (isVisible) {
      console.log('Contact section is visible');
    }
  }, [isVisible]);

  return (
    <section ref={ref} id='contact' className='min-h-screen flex items-center justify-center relative'>
      <div className='flex flex-col lg:flex-row items-center justify-between w-full px-8 lg:px-16'>
        <div className='flex flex-col items-start px-8 lg:px-16'>
          <h2 className='text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r leading-right'
            style={{
              backgroundImage: 'linear-gradient(to right, #fef08a, #86efac)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}>Contact to me!</h2>
          <p className='text-gray-400 text-lg max-w-lg mb-6'>
            Feel free to reach out to me for any collaboration, project inquiries, or just to say hi!
            I&apos;m always open to discussing new ideas and opportunities to create something amazing together.
          </p>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsContent value="account">
              <Card className='bg-gray-300'>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you&apos;re done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className='flex flex-col-3 w-full gap-6 px-8 '>
          <div>
            <Image src="/instagram.svg" alt="instagram logo " width='10' height='10' className='h-10 w-10 transform hover:scale-90' onClick={() => window.location.href = 'https://instagram.com/diegoarevalom'} />
          </div>
          <div>
            <Image src="/linkedin.svg" alt="linkedin logo " width='10' height='10' className='h-10 w-10 transform hover:scale-90' onClick={() => window.location.href = 'https://www.linkedin.com/in/diegoarévalo/'} />
          </div>
          <div>
            <Image src="/github.svg" alt="github logo " width='10' height='10' className='h-10 w-10 transform hover:scale-90' onClick={() => window.location.href = 'https://github.com/diegoarevalom'} />
          </div>
        </div>

      </div>
    </section >
  )
}

export default Contact