// RuleInterpretationAssistantFlow.ts
'use server';

/**
 * @fileOverview An AI agent that helps officials with rules and rule interpretations.
 *
 * - ruleInterpretationAssistant - A function that answers questions based on rulebooks.
 * - RuleInterpretationAssistantInput - The input type for the ruleInterpretationAssistant function.
 * - RuleInterpretationAssistantOutput - The return type for the ruleInterpretationAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RuleInterpretationAssistantInputSchema = z.object({
  rulebook: z.string().describe('The rulebook to use for answering questions.'),
  question: z.string().describe('The question about the rule.'),
});
export type RuleInterpretationAssistantInput = z.infer<typeof RuleInterpretationAssistantInputSchema>;

const RuleInterpretationAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the question based on the rulebook.'),
});
export type RuleInterpretationAssistantOutput = z.infer<typeof RuleInterpretationAssistantOutputSchema>;

export async function ruleInterpretationAssistant(
  input: RuleInterpretationAssistantInput
): Promise<RuleInterpretationAssistantOutput> {
  return ruleInterpretationAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ruleInterpretationAssistantPrompt',
  input: {schema: RuleInterpretationAssistantInputSchema},
  output: {schema: RuleInterpretationAssistantOutputSchema},
  prompt: `You are an expert on the following rulebook: {{{rulebook}}}.\n\nAnswer the following question based on the rulebook: {{{question}}}.`,
});

const ruleInterpretationAssistantFlow = ai.defineFlow(
  {
    name: 'ruleInterpretationAssistantFlow',
    inputSchema: RuleInterpretationAssistantInputSchema,
    outputSchema: RuleInterpretationAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
