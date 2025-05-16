// src/app/schedule/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck2, Settings } from "lucide-react";
import Image from "next/image";

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-accent">Game Schedules</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Integrate your calendars to see all your assignments in one place.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="hover:shadow-accent/20 transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Image src="https://placehold.co/40x40.png" alt="Google Calendar Icon" width={40} height={40} data-ai-hint="Google Calendar logo" />
              <CardTitle>Google Calendar Integration</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Connect your Google Calendar to automatically sync your game schedules assigned through Google Calendar.
            </p>
            <Image src="https://placehold.co/600x300.png" alt="Google Calendar Placeholder" width={600} height={300} className="rounded-md border border-border" data-ai-hint="calendar interface" />
            <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <CalendarCheck2 className="mr-2 h-4 w-4" /> Connect Google Calendar
            </Button>
            <p className="text-xs text-muted-foreground text-center">Feature coming soon!</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-accent/20 transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Image src="https://placehold.co/40x40.png" alt="iCloud Calendar Icon" width={40} height={40} data-ai-hint="Apple iCloud logo" />
              <CardTitle>iCloud Calendar Integration</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Connect your iCloud Calendar to keep your Apple device schedules up-to-date with your assignments.
            </p>
            <Image src="https://placehold.co/600x300.png" alt="iCloud Calendar Placeholder" width={600} height={300} className="rounded-md border border-border" data-ai-hint="calendar app" />
            <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <CalendarCheck2 className="mr-2 h-4 w-4" /> Connect iCloud Calendar
            </Button>
            <p className="text-xs text-muted-foreground text-center">Feature coming soon!</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-6 w-6 text-accent" />
            Integration Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Manage your connected calendars and synchronization preferences here. (Placeholder for settings)
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
