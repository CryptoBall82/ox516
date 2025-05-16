// src/app/ai-assistant/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ClientIframe from "@/components/client-iframe";
// Removed RulebookQA and RuleInterpretation imports as they are no longer used
// import { RulebookQA } from "@/components/ai/rulebook-qa";
// import { RuleInterpretation } from "@/components/ai/rule-interpretation";
import { Bot } from "lucide-react";
import { DefaultHeader } from "@/components/DefaultHeader";
import { NavbarAI } from "@/components/NavbarAI";

export default function AiAssistantPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DefaultHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 pb-24"> {/* pt-24 for header, pb-24 for navbar */}
        <div className="space-y-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-accent flex items-center gap-2">
                <Bot className="h-8 w-8" /> OfficiaX AI Assistant
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Your intelligent partner for rule clarifications and interpretations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-accent/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Interactive AI Agent</CardTitle>
              <CardDescription>Chat with our AI assistant for quick help.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-[16/12] md:aspect-[16/9] lg:aspect-[16/7] w-full overflow-hidden rounded-lg border border-border">
                <ClientIframe
                  src="https://udify.app/chatbot/yMu38WVkDhy3hynm"
                  style={{ width: '100%', height: '100%', minHeight: '500px' }} // Adjusted minHeight for responsiveness
                  frameBorder="0"
                  allow="microphone"
                  title="OfficiaX AI Chatbot"
                  className="min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Removed the grid containing RulebookQA and RuleInterpretation */}
          {/* 
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            <RulebookQA />
            <RuleInterpretation />
          </div> 
          */}
        </div>
      </main>
      <NavbarAI />
    </div>
  );
}
