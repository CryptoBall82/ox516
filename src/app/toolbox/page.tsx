// src/app/toolbox/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, CloudSun, Coins, BookOpen } from "lucide-react";
import ClientIframe from "@/components/client-iframe";
import ElfsightWidget from "@/components/elfsight-widget";
import Image from "next/image";

export default function ToolboxPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-accent">Official&apos;s Toolbox</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Essential tools and resources at your fingertips.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="assigner" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 bg-card border border-border">
          <TabsTrigger value="assigner" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
            <Users className="mr-2 h-4 w-4" /> Assigner Info
          </TabsTrigger>
          <TabsTrigger value="weather" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
            <CloudSun className="mr-2 h-4 w-4" /> Weather
          </TabsTrigger>
          <TabsTrigger value="coinflip" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
            <Coins className="mr-2 h-4 w-4" /> Coin Flip
          </TabsTrigger>
          <TabsTrigger value="classroom" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
            <BookOpen className="mr-2 h-4 w-4" /> Umpire Classroom
          </TabsTrigger>
        </TabsList>

        <TabsContent value="assigner">
          <Card className="hover:shadow-accent/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Users className="text-primary"/>Assigner Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Contact details and important notices from your assigners.</p>
              <div className="p-4 border border-dashed rounded-md">
                <h4 className="font-semibold">Primary Assigner: Jane Doe</h4>
                <p>Email: jane.doe@example.com</p>
                <p>Phone: (555) 123-4567</p>
                <p className="mt-2 text-sm text-accent"><strong>Notice:</strong> Please confirm availability for playoffs by EOD Friday.</p>
              </div>
               <Image src="https://placehold.co/600x300.png" alt="Assigner Info Placeholder" width={600} height={300} className="rounded-md border border-border" data-ai-hint="contact list directory" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weather">
          <Card className="hover:shadow-accent/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CloudSun className="text-primary"/>Local Weather</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Check the forecast for your game locations.</p>
              {/* Placeholder for weather widget/info. Could be an iframe to a weather service or an API call. */}
              <div className="p-4 border border-dashed rounded-md text-center">
                <p className="text-lg font-semibold">Weather information coming soon!</p>
                <p className="text-sm text-muted-foreground">Consider embedding a weather widget here.</p>
                 <Image src="https://placehold.co/600x300.png" alt="Weather Placeholder" width={600} height={300} className="rounded-md border border-border mt-4" data-ai-hint="weather forecast map" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="coinflip">
          <Card className="hover:shadow-accent/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Coins className="text-primary"/>Coin Flip</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
               <ClientIframe 
                src="https://scratch.mit.edu/projects/1139819540/embed" 
                allowTransparency={true} 
                width="485" 
                height="402" 
                frameBorder="0" 
                scrolling="no" 
                allowFullScreen
                title="Coin Flip Game"
                className="rounded-md shadow-lg"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="classroom">
          <Card className="hover:shadow-accent/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BookOpen className="text-primary"/>Umpire Classroom</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Access training materials and videos.</p>
              <ElfsightWidget />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
