'use server';

/**
 * @fileOverview An AI agent for answering questions based on official rulebooks.
 *
 * - askRulebookQuestion - A function that handles the question answering process.
 * - RulebookQuestionInput - The input type for the askRulebookQuestion function.
 * - RulebookQuestionOutput - The return type for the askRulebookQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RulebookQuestionInputSchema = z.object({
  question: z.string().describe('The question to be answered based on the rulebooks.'),
});
export type RulebookQuestionInput = z.infer<typeof RulebookQuestionInputSchema>;

const RulebookQuestionOutputSchema = z.object({
  answer: z.string().describe('The reasoned answer to the question based on the rulebooks.'),
});
export type RulebookQuestionOutput = z.infer<typeof RulebookQuestionOutputSchema>;

export async function askRulebookQuestion(input: RulebookQuestionInput): Promise<RulebookQuestionOutput> {
  return askRulebookQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rulebookQuestionPrompt',
  input: {schema: RulebookQuestionInputSchema},
  output: {schema: RulebookQuestionOutputSchema},
  prompt: `You are an expert on official rulebooks. Answer the following question based on your knowledge of the rulebooks. Provide a reasoned explanation for your answer.\n\nQuestion: {{{question}}}`,
});

const askRulebookQuestionFlow = ai.defineFlow(
  {
    name: 'askRulebookQuestionFlow',
    inputSchema: RulebookQuestionInputSchema,
    outputSchema: RulebookQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
