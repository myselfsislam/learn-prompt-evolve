
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Lightbulb, Target, Users, Zap, BookOpen, Code, Sparkles, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Multi-Provider Coverage",
      description: "Comprehensive prompting techniques for Claude, ChatGPT, Gemini, Perplexity, and more AI platforms"
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Prompt Curator",
      description: "Professional prompt editor with formatting, optimization, and organization tools"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Advanced Techniques",
      description: "Chain-of-thought, few-shot learning, role-based prompting, and optimization strategies"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-orange-600" />,
      title: "Best Practices",
      description: "Industry standards, proven methodologies, and expert-level prompting guides"
    }
  ];

  const providers = [
    { name: "Anthropic Claude", color: "bg-orange-500", models: ["Claude 4", "Claude 3.5 Sonnet", "Claude 3 Haiku"] },
    { name: "OpenAI ChatGPT", color: "bg-green-500", models: ["GPT-4.1", "GPT-4o", "O3 Mini"] },
    { name: "Google Gemini", color: "bg-blue-500", models: ["Gemini Pro", "Gemini Ultra", "Gemini Flash"] },
    { name: "Perplexity AI", color: "bg-purple-500", models: ["Sonar Large", "Sonar Small", "Sonar Huge"] },
    { name: "Meta LLaMA", color: "bg-red-500", models: ["LLaMA 3.2", "LLaMA 3.1", "Code LLaMA"] },
    { name: "Mistral AI", color: "bg-indigo-500", models: ["Mistral Large", "Mistral Medium", "Codestral"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Professional Prompt Engineering Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Prompt Engineering</span> Expert
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the art and science of prompt engineering across all major AI platforms. Create, optimize, and manage 
            your prompts with our professional curator tool and comprehensive best practices guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              onClick={() => navigate('/prompt-curator')}
            >
              Try Prompt Curator <Edit3 className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-2 hover:bg-gray-50"
              onClick={() => navigate('/best-practices')}
            >
              Explore Best Practices <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Providers Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported AI Platforms</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn effective prompting techniques for all major AI services and their latest models
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-4 h-4 rounded-full ${provider.color}`}></div>
                    <CardTitle className="text-lg">{provider.name}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {provider.models.map((model, modelIndex) => (
                      <Badge key={modelIndex} variant="secondary" className="text-xs">
                        {model}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes PromptMaster Special</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Curator</h3>
              <p className="text-gray-600">Create, format, optimize and organize your prompts like a code editor with templates and smart optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Comprehensive best practices and proven techniques used by AI professionals worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Resources</h3>
              <p className="text-gray-600">Curated collection of tools, documentation, and community resources for continuous learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
