
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Copy, Brain } from 'lucide-react';

const ChainOfThought = () => {
  const navigate = useNavigate();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate('/tutorials')} 
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tutorials
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Chain-of-Thought Prompting</h1>
            <Badge variant="secondary">Intermediate</Badge>
          </div>
          <p className="text-lg text-gray-600">Guide AI through step-by-step reasoning processes</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What is Chain-of-Thought?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Chain-of-Thought (CoT) prompting encourages AI to break down complex problems into sequential steps, 
                improving accuracy and making the reasoning process transparent.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-6 space-y-1 text-blue-700">
                  <li>Better accuracy on complex problems</li>
                  <li>Transparent reasoning process</li>
                  <li>Easier to identify errors</li>
                  <li>More reliable outputs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Example: Math Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">❌ Without Chain-of-Thought:</h4>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="font-mono text-sm mb-2">
                      "If a store has 23 apples and sells 7 in the morning and 8 in the afternoon, how many are left?"
                    </p>
                    <p className="text-sm text-red-700">AI might jump to answer: "8 apples" (potentially wrong)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600 mb-2">✅ With Chain-of-Thought:</h4>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-mono text-sm mb-3">
                          "If a store has 23 apples and sells 7 in the morning and 8 in the afternoon, how many are left? 
                          Think step by step."
                        </p>
                        <div className="text-sm text-green-700 space-y-1">
                          <p><strong>AI Response:</strong></p>
                          <p>Step 1: Start with 23 apples</p>
                          <p>Step 2: Sold 7 in morning: 23 - 7 = 16</p>
                          <p>Step 3: Sold 8 in afternoon: 16 - 8 = 8</p>
                          <p><strong>Answer: 8 apples left</strong></p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => copyToClipboard("If a store has 23 apples and sells 7 in the morning and 8 in the afternoon, how many are left? Think step by step.")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chain-of-Thought Trigger Phrases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-3">Common Phrases:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="bg-gray-100 p-2 rounded">• "Think step by step"</li>
                    <li className="bg-gray-100 p-2 rounded">• "Let's work through this"</li>
                    <li className="bg-gray-100 p-2 rounded">• "Break this down"</li>
                    <li className="bg-gray-100 p-2 rounded">• "Show your reasoning"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Advanced Patterns:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="bg-gray-100 p-2 rounded">• "First, let me analyze..."</li>
                    <li className="bg-gray-100 p-2 rounded">• "I need to consider..."</li>
                    <li className="bg-gray-100 p-2 rounded">• "Before answering..."</li>
                    <li className="bg-gray-100 p-2 rounded">• "Let me think about this systematically"</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Practice Exercise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Create a chain-of-thought prompt for this scenario:
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                <p className="text-yellow-800">
                  "You need to plan a marketing budget of $10,000 for a new product launch across social media, email, and paid ads."
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">Example CoT Prompt:</h5>
                <p className="font-mono text-sm text-blue-700">
                  "Help me allocate a $10,000 marketing budget for a new product launch. Consider social media, email marketing, and paid ads. 
                  Think step by step: 1) Analyze each channel's effectiveness, 2) Consider our target audience, 3) Propose budget allocation with reasoning, 4) Explain expected ROI for each channel."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <p>Use trigger phrases like "think step by step" to activate reasoning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <p>Break complex problems into sequential steps</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <p>Chain-of-thought improves accuracy on analytical tasks</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <p>Visible reasoning helps identify and correct errors</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/tutorials')}
          >
            Complete Lesson & Return to Tutorials
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChainOfThought;
