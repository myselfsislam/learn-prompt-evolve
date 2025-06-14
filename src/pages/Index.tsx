
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
      description: "Master prompting for Claude, ChatGPT, Gemini, Perplexity, and more AI services"
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Interactive Tutorials",
      description: "Step-by-step guides with real examples and hands-on practice"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Advanced Techniques",
      description: "Chain-of-thought, few-shot learning, role-based prompting, and more"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-orange-600" />,
      title: "Best Practices",
      description: "Industry standards, optimization strategies, and proven methodologies"
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
            Master AI Prompt Engineering
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Prompt Engineering</span> Expert
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the art and science of prompt engineering across all major AI platforms. Discover advanced techniques, 
            best practices, and get hands-on experience with interactive tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              onClick={() => navigate('/best-practices')}
            >
              Explore Best Practices <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-2 hover:bg-gray-50"
              onClick={() => navigate('/prompt-curator')}
            >
              Prompt Curator <Edit3 className="w-5 h-5 ml-2" />
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
              Discover prompt engineering techniques for all major AI services and their latest models
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

        {/* Learning Path */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-16 border-0 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Learning Journey</h2>
            <p className="text-lg text-gray-600">Follow our structured path from beginner to expert</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fundamentals</h3>
              <p className="text-gray-600">Discover the basics of prompt structure, clarity, and effectiveness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Techniques</h3>
              <p className="text-gray-600">Master chain-of-thought, few-shot prompting, and complex reasoning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Level</h3>
              <p className="text-gray-600">Optimize for specific use cases and build production-ready prompts</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Prompt Engineering?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of developers and researchers improving their AI interactions</p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            onClick={() => navigate('/best-practices')}
          >
            Get Started <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
