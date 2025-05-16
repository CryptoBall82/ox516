// src/components/ai/rule-interpretation.tsx
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ruleInterpretationAssistant, type RuleInterpretationAssistantOutput } from '@/ai/flows/rule-interpretation-assistant';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function RuleInterpretation() {
  const [rulebook, setRulebook] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<RuleInterpretationAssistantOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     if (!rulebook.trim()) {
      setError("Please specify the rulebook.");
      return;
    }
    if (!question.trim()) {
      setError("Please enter a question about the rule.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const result = await ruleInterpretationAssistant({ rulebook, question });
      setAnswer(result);
    } catch (err) {
      console.error("Error with rule interpretation assistant:", err);
      setError("Failed to get an interpretation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="hover:shadow-accent/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Rule Interpretation Assistant</CardTitle>
        <CardDescription>Get help with specific rule interpretations from a designated rulebook.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="rulebook-name">Rulebook Name</Label>
            <Input
              id="rulebook-name"
              value={rulebook}
              onChange={(e) => setRulebook(e.target.value)}
              placeholder="e.g., NFHS Baseball Rules 2023"
              className="bg-input text-foreground placeholder:text-muted-foreground"
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="interpretation-question">Question about the Rule</Label>
            <Textarea
              id="interpretation-question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., Explain the infield fly rule in context of runners on 1st and 2nd, 1 out."
              rows={3}
              className="bg-input text-foreground placeholder:text-muted-foreground"
              disabled={isLoading}
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isLoading ? 'Interpreting...' : 'Get Interpretation'}
          </Button>
        </CardFooter>
      </form>
      {answer && (
        <CardContent className="mt-4 border-t pt-4">
          <h4 className="font-semibold text-lg mb-2 text-accent">AI Response:</h4>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4 bg-muted/30">
            <pre className="whitespace-pre-wrap text-sm">{answer.answer}</pre>
          </ScrollArea>
        </CardContent>
      )}
    </Card>
  );
}
