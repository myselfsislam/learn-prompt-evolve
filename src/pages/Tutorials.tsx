
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Users, CheckCircle, ArrowRight, Brain, Code, Target, Lightbulb } from 'lucide-react';

const Tutorials = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const markComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const fundamentals = [
    {
      id: 'prompt-basics',
      title: 'Prompt Structure Fundamentals',
      description: 'Learn the anatomy of effective prompts and basic principles',
      duration: '15 min',
      difficulty: 'Beginner',
      topics: ['Prompt components', 'Clear instructions', 'Context setting', 'Output formatting']
    },
    {
      id: 'clarity-precision',
      title: 'Clarity and Precision',
      description: 'Master the art of writing clear, unambiguous prompts',
      duration: '20 min',
      difficulty: 'Beginner',
      topics: ['Specific language', 'Avoiding ambiguity', 'Example integration', 'Constraint setting']
    },
    {
      id: 'context-management',
      title: 'Context Management',
      description: 'Understand how to provide optimal context for AI models',
      duration: '25 min',
      difficulty: 'Beginner',
      topics: ['Context windows', 'Information hierarchy', 'Relevant details', 'Context pruning']
    }
  ];

  const advanced = [
    {
      id: 'chain-of-thought',
      title: 'Chain-of-Thought Prompting',
      description: 'Guide AI through step-by-step reasoning processes',
      duration: '30 min',
      difficulty: 'Intermediate',
      topics: ['Reasoning chains', 'Step-by-step breakdown', 'Problem decomposition', 'Verification steps']
    },
    {
      id: 'few-shot-learning',
      title: 'Few-Shot Learning Techniques',
      description: 'Teach AI through strategic examples and patterns',
      duration: '35 min',
      difficulty: 'Intermediate',
      topics: ['Example selection', 'Pattern recognition', 'In-context learning', 'Example ordering']
    },
    {
      id: 'role-based-prompting',
      title: 'Role-Based Prompting',
      description: 'Leverage personas and roles for specialized outputs',
      duration: '25 min',
      difficulty: 'Intermediate',
      topics: ['Persona creation', 'Expert roles', 'Perspective shifting', 'Consistent character']
    },
    {
      id: 'prompt-chaining',
      title: 'Prompt Chaining & Workflows',
      description: 'Create complex multi-step AI workflows',
      duration: '40 min',
      difficulty: 'Advanced',
      topics: ['Sequential prompts', 'State management', 'Error handling', 'Output parsing']
    }
  ];

  const providerSpecific = [
    {
      id: 'claude-mastery',
      title: 'Mastering Anthropic Claude',
      description: 'Claude-specific techniques, constitutional AI, and best practices',
      duration: '45 min',
      difficulty: 'Intermediate',
      provider: 'Anthropic',
      topics: ['Constitutional AI', 'Claude reasoning', 'Safety guidelines', 'Thinking tags', 'Multi-turn conversations']
    },
    {
      id: 'chatgpt-optimization',
      title: 'ChatGPT & GPT-4 Optimization',
      description: 'Leverage OpenAI models for maximum effectiveness',
      duration: '40 min',
      difficulty: 'Intermediate',
      provider: 'OpenAI',
      topics: ['System messages', 'Function calling', 'Temperature control', 'Token optimization', 'GPT-4 capabilities']
    },
    {
      id: 'gemini-techniques',
      title: 'Google Gemini Techniques',
      description: 'Harness Gemini\'s multimodal capabilities and reasoning',
      duration: '35 min',
      difficulty: 'Intermediate',
      provider: 'Google',
      topics: ['Multimodal prompts', 'Code generation', 'Long context', 'Gemini reasoning', 'Safety features']
    },
    {
      id: 'perplexity-search',
      title: 'Perplexity AI Search Mastery',
      description: 'Master research and real-time information gathering',
      duration: '30 min',
      difficulty: 'Beginner',
      provider: 'Perplexity',
      topics: ['Search optimization', 'Source verification', 'Real-time data', 'Citation handling', 'Domain filtering']
    }
  ];

  const LessonCard = ({ lesson, category }: { lesson: any, category: string }) => {
    const isCompleted = completedLessons.includes(lesson.id);
    
    return (
      <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-lg">{lesson.title}</CardTitle>
                {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
              </div>
              <CardDescription className="mb-3">{lesson.description}</CardDescription>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {lesson.duration}
                </div>
                <Badge variant={lesson.difficulty === 'Beginner' ? 'default' : lesson.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
                  {lesson.difficulty}
                </Badge>
                {lesson.provider && (
                  <Badge variant="outline">{lesson.provider}</Badge>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-sm text-gray-700">What you'll learn:</h4>
            <div className="flex flex-wrap gap-2">
              {lesson.topics.map((topic: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
          <Button 
            className="w-full" 
            variant={isCompleted ? "outline" : "default"}
            onClick={() => markComplete(lesson.id)}
          >
            {isCompleted ? 'Review Lesson' : 'Start Lesson'} 
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    );
  };

  const totalLessons = fundamentals.length + advanced.length + providerSpecific.length;
  const progressPercentage = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prompt Engineering Tutorials</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive tutorials covering everything from basic prompt structure to advanced AI interaction techniques
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{completedLessons.length} of {totalLessons} completed</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>

        <Tabs defaultValue="fundamentals" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="fundamentals" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Fundamentals
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Advanced
            </TabsTrigger>
            <TabsTrigger value="providers" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              AI Providers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fundamentals">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Fundamental Concepts</h2>
              <p className="text-gray-600">Master the core principles of effective prompt engineering</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundamentals.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} category="fundamentals" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Advanced Techniques</h2>
              <p className="text-gray-600">Learn sophisticated prompting strategies for complex tasks</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advanced.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} category="advanced" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="providers">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Provider Mastery</h2>
              <p className="text-gray-600">Platform-specific techniques and optimizations</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providerSpecific.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} category="providers" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Learning Tips */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Learning Tips</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Practice Regularly</h4>
              <p className="text-sm text-gray-600">Consistent practice is key to mastering prompt engineering</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Test Variations</h4>
              <p className="text-sm text-gray-600">Try different approaches and compare results</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Start Simple</h4>
              <p className="text-sm text-gray-600">Begin with basic prompts before moving to complex ones</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold mb-2">Learn from Others</h4>
              <p className="text-sm text-gray-600">Study successful prompts and techniques from the community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
