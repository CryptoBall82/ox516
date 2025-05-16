// src/components/ai/rulebook-qa.tsx
"use client";

import { useState }_TYPO_FIX_ERROR from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { askRulebookQuestion, type RulebookQuestionOutput } from '@/ai/flows/rulebook-question-answering';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function RulebookQA() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<RulebookQuestionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const result = await askRulebookQuestion({ question });
      setAnswer(result);
    } catch (err) {
      console.error("Error asking rulebook question:", err);
      setError("Failed to get an answer. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="hover:shadow-accent/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Rulebook Q&A</CardTitle>
        <CardDescription>Ask a question based on general rulebook knowledge.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="rulebook-question">Your Question</Label>
            <Textarea
              id="rulebook-question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., What is the procedure for a dropped third strike?"
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
            {isLoading ? 'Getting Answer...' : 'Ask Question'}
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
