
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Play, Copy, Save, RefreshCw, BookOpen, Lightbulb, Code, Target } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Playground = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('claude');
  const [selectedModel, setSelectedModel] = useState('');
  const [temperature, setTemperature] = useState('0.7');
  const [maxTokens, setMaxTokens] = useState('1000');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [results, setResults] = useState<{provider: string, response: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const providers = {
    claude: {
      name: 'Anthropic Claude',
      models: ['claude-3-opus-20240229', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307'],
      color: 'bg-orange-500'
    },
    openai: {
      name: 'OpenAI',
      models: ['gpt-4-turbo-preview', 'gpt-4', 'gpt-3.5-turbo'],
      color: 'bg-green-500'
    },
    gemini: {
      name: 'Google Gemini',
      models: ['gemini-pro', 'gemini-pro-vision', 'gemini-ultra'],
      color: 'bg-blue-500'
    },
    perplexity: {
      name: 'Perplexity AI',
      models: ['llama-3.1-sonar-large-128k-online', 'llama-3.1-sonar-small-128k-online'],
      color: 'bg-purple-500'
    }
  };

  const promptTemplates = [
    {
      category: 'Analysis',
      templates: [
        {
          name: 'Text Analysis',
          prompt: 'Analyze the following text and provide insights on:\n1. Main themes\n2. Tone and sentiment\n3. Key arguments\n4. Writing style\n\nText: [INSERT TEXT HERE]'
        },
        {
          name: 'Code Review',
          prompt: 'Review this code and provide feedback on:\n1. Code quality and readability\n2. Potential bugs or issues\n3. Performance optimizations\n4. Best practices\n\n```\n[INSERT CODE HERE]\n```'
        }
      ]
    },
    {
      category: 'Creative',
      templates: [
        {
          name: 'Story Writing',
          prompt: 'Write a compelling short story with the following elements:\n- Genre: [SPECIFY GENRE]\n- Main character: [DESCRIBE CHARACTER]\n- Setting: [DESCRIBE SETTING]\n- Conflict: [DESCRIBE CONFLICT]\n\nMake it engaging and approximately 500 words.'
        },
        {
          name: 'Marketing Copy',
          prompt: 'Create persuasive marketing copy for:\n- Product/Service: [DESCRIBE PRODUCT]\n- Target audience: [DESCRIBE AUDIENCE]\n- Key benefits: [LIST BENEFITS]\n- Call to action: [SPECIFY CTA]\n\nTone should be [SPECIFY TONE]'
        }
      ]
    },
    {
      category: 'Problem Solving',
      templates: [
        {
          name: 'Step-by-Step Solution',
          prompt: 'Solve this problem using a step-by-step approach:\n\nProblem: [DESCRIBE PROBLEM]\n\nPlease:\n1. Break down the problem\n2. Identify key components\n3. Provide a detailed solution\n4. Explain your reasoning\n5. Suggest alternatives if applicable'
        },
        {
          name: 'Decision Framework',
          prompt: 'Help me make a decision using a structured framework:\n\nDecision: [DESCRIBE DECISION]\n\nPlease provide:\n1. Pros and cons analysis\n2. Risk assessment\n3. Alternative options\n4. Recommendation with reasoning\n5. Implementation steps'
        }
      ]
    }
  ];

  const bestPractices = [
    {
      title: 'Be Specific',
      description: 'Use clear, specific language and provide concrete examples',
      example: 'Instead of "write about dogs", use "write a 300-word article about Golden Retriever training tips for puppies"'
    },
    {
      title: 'Set Context',
      description: 'Provide background information and specify the desired format',
      example: 'Context: You are a senior software engineer. Task: Review this Python function for a web API.'
    },
    {
      title: 'Use Examples',
      description: 'Show the AI what you want with concrete examples',
      example: 'Format the output like this: Name: John Doe, Age: 30, Role: Developer'
    },
    {
      title: 'Chain Complex Tasks',
      description: 'Break down complex requests into sequential steps',
      example: 'First analyze the data, then identify patterns, finally provide recommendations'
    }
  ];

  const simulateResponse = (provider: string, prompt: string) => {
    const responses = {
      claude: `Based on your prompt, I'll provide a thoughtful analysis. Claude's response would focus on being helpful, harmless, and honest while providing detailed reasoning for the given task.`,
      openai: `Here's my response to your request. GPT-4 would deliver a comprehensive answer that balances creativity with accuracy, following the specific instructions provided.`,
      gemini: `I'll address your prompt with Google's Gemini capabilities. The response would leverage multimodal understanding and provide structured, informative content.`,
      perplexity: `Using real-time search capabilities, here's what I found. Perplexity would provide current information with citations and sources to back up the response.`
    };
    return responses[provider as keyof typeof responses] + `\n\n[This is a simulated response for demonstration purposes. In a real implementation, this would connect to the actual ${providers[provider as keyof typeof providers].name} API.]`;
  };

  const runPrompt = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to test",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const response = simulateResponse(selectedProvider, prompt);
      const newResult = {
        provider: providers[selectedProvider as keyof typeof providers].name,
        response: response
      };
      
      setResults([newResult, ...results.slice(0, 4)]); // Keep last 5 results
      
      toast({
        title: "Success",
        description: "Prompt executed successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to execute prompt",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Text copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prompt Engineering Playground</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test and compare prompts across different AI providers in a safe, interactive environment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Prompt Input */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Prompt Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Provider Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="provider">AI Provider</Label>
                    <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select provider" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(providers).map(([key, provider]) => (
                          <SelectItem key={key} value={key}>
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${provider.color}`}></div>
                              {provider.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Select value={selectedModel} onValueChange={setSelectedModel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        {providers[selectedProvider as keyof typeof providers]?.models.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* System Prompt */}
                <div>
                  <Label htmlFor="system-prompt">System Prompt (Optional)</Label>
                  <Textarea
                    id="system-prompt"
                    placeholder="You are a helpful assistant..."
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Main Prompt */}
                <div>
                  <Label htmlFor="prompt">Your Prompt</Label>
                  <Textarea
                    id="prompt"
                    placeholder="Enter your prompt here..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={8}
                    className="font-mono"
                  />
                </div>

                {/* Parameters */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="temperature">Temperature: {temperature}</Label>
                    <Input
                      id="temperature"
                      type="range"
                      min="0"
                      max="2"
                      step="0.1"
                      value={temperature}
                      onChange={(e) => setTemperature(e.target.value)}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Focused</span>
                      <span>Creative</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="max-tokens">Max Tokens</Label>
                    <Input
                      id="max-tokens"
                      type="number"
                      value={maxTokens}
                      onChange={(e) => setMaxTokens(e.target.value)}
                      placeholder="1000"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button onClick={runPrompt} disabled={isLoading} className="flex-1">
                    {isLoading ? (
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Play className="w-4 h-4 mr-2" />
                    )}
                    {isLoading ? 'Running...' : 'Run Prompt'}
                  </Button>
                  <Button variant="outline" onClick={() => copyToClipboard(prompt)}>
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="outline">
                    <Save className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {results.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                </CardHeader>
                <CardContent>
                  {results.map((result, index) => (
                    <div key={index} className={`${index > 0 ? 'mt-6 pt-6 border-t' : ''}`}>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{result.provider}</Badge>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => copyToClipboard(result.response)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="bg-gray-50 rounded-md p-4 font-mono text-sm whitespace-pre-wrap">
                        {result.response}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Panel - Templates & Tips */}
          <div className="space-y-6">
            <Tabs defaultValue="templates">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="tips">Best Practices</TabsTrigger>
              </TabsList>

              <TabsContent value="templates" className="space-y-4">
                {promptTemplates.map((category, categoryIndex) => (
                  <Card key={categoryIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {category.templates.map((template, templateIndex) => (
                        <div key={templateIndex} className="border rounded-md p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-sm">{template.name}</h4>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setPrompt(template.prompt)}
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-3">{template.prompt}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="tips" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Best Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {bestPractices.map((practice, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-sm mb-2 text-blue-700">{practice.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{practice.description}</p>
                        <div className="bg-blue-50 rounded-md p-3 text-xs font-mono">
                          {practice.example}
                        </div>
                        {index < bestPractices.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
