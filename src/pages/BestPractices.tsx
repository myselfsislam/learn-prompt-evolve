
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, AlertTriangle, XCircle, Lightbulb, Target, Code, Brain, Users, Zap, BookOpen } from 'lucide-react';

const BestPractices = () => {
  const fundamentalPrinciples = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Clarity and Specificity",
      description: "Be precise about what you want the AI to do",
      good: "Write a 500-word blog post about sustainable gardening practices for beginners, including 5 specific tips with examples",
      bad: "Write about gardening",
      tips: [
        "Use specific numbers and constraints",
        "Define the scope clearly",
        "Specify the target audience",
        "Include desired format and structure"
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-green-600" />,
      title: "Context and Background",
      description: "Provide necessary context for better understanding",
      good: "You are a senior financial advisor. Explain compound interest to a 25-year-old starting their career, focusing on long-term retirement planning",
      bad: "Explain compound interest",
      tips: [
        "Set the AI's role or persona",
        "Provide background information",
        "Explain the situation or use case",
        "Mention relevant constraints or considerations"
      ]
    },
    {
      icon: <Code className="w-6 h-6 text-purple-600" />,
      title: "Structure and Format",
      description: "Clearly specify the desired output format",
      good: "Format your response as: 1. Problem statement, 2. Three solutions with pros/cons, 3. Recommended approach with reasoning",
      bad: "Give me some solutions",
      tips: [
        "Use numbered lists or bullet points",
        "Specify sections and headers",
        "Request specific formats (JSON, markdown, etc.)",
        "Include examples of desired output"
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-orange-600" />,
      title: "Examples and Demonstrations",
      description: "Show don't just tell - provide concrete examples",
      good: "Translate these phrases to French, maintaining the formal tone: 'Good morning, sir' → 'Bonjour, monsieur'. Now translate: 'Thank you for your assistance'",
      bad: "Translate to French maintaining formal tone",
      tips: [
        "Provide 1-3 clear examples",
        "Show input-output pairs",
        "Demonstrate the desired style or tone",
        "Use examples that match your use case"
      ]
    }
  ];

  const advancedTechniques = [
    {
      category: "Chain-of-Thought",
      description: "Guide the AI through step-by-step reasoning",
      example: `Solve this step by step:
Problem: A company's revenue increased by 25% in Q1, then decreased by 10% in Q2. If Q2 revenue was $45,000, what was the original revenue?

Let me work through this step by step:
1. Let's call the original revenue 'x'
2. After Q1 increase: x × 1.25
3. After Q2 decrease: (x × 1.25) × 0.9 = $45,000
4. Solve for x...`,
      benefits: ["Better reasoning quality", "Transparent logic", "Fewer errors", "Educational value"]
    },
    {
      category: "Few-Shot Learning",
      description: "Teach through multiple examples",
      example: `Extract key information in this format:
Name: [Full Name] | Role: [Job Title] | Company: [Organization]

Example 1: "Dr. Sarah Johnson, the Chief Technology Officer at InnovaTech Solutions, will speak at the conference."
Output: Name: Dr. Sarah Johnson | Role: Chief Technology Officer | Company: InnovaTech Solutions

Example 2: "We interviewed Mark Chen, Senior Data Scientist from TechCorp Industries."
Output: Name: Mark Chen | Role: Senior Data Scientist | Company: TechCorp Industries

Now extract from: "Lisa Rodriguez, the Marketing Director at Global Dynamics, announced the new campaign."`,
      benefits: ["Pattern recognition", "Consistent formatting", "Reduced ambiguity", "Better accuracy"]
    },
    {
      category: "Role-Based Prompting",
      description: "Assign specific personas or expertise roles",
      example: `You are a senior UX researcher with 10 years of experience in e-commerce platforms. 

Analyze this user feedback and provide actionable insights:
"The checkout process is confusing. I couldn't find the shipping options and the payment form kept giving errors."

Consider:
- User journey mapping
- Pain point identification  
- Conversion impact
- Recommended improvements`,
      benefits: ["Domain expertise", "Appropriate tone", "Relevant insights", "Professional perspective"]
    },
    {
      category: "Constraint-Based Prompting",
      description: "Set clear boundaries and requirements",
      example: `Write a product description with these constraints:
- Length: Exactly 150 words
- Tone: Professional but approachable
- Must include: key features, benefits, target audience
- Avoid: Technical jargon, superlatives like "best" or "amazing"
- Format: Two paragraphs with bullet points for features`,
      benefits: ["Controlled output", "Meets requirements", "Consistent quality", "Reduced iterations"]
    }
  ];

  const providerSpecific = {
    claude: {
      name: "Anthropic Claude",
      color: "bg-orange-500",
      strengths: ["Constitutional AI", "Long conversations", "Ethical reasoning", "Complex analysis"],
      tips: [
        "Use <thinking> tags for complex reasoning",
        "Leverage Claude's constitutional training for ethical scenarios",
        "Take advantage of large context windows for document analysis",
        "Use clear role definitions for consistent persona"
      ],
      example: `<thinking>
The user is asking for a comparison between two marketing strategies. I should analyze both approaches systematically, considering pros/cons, costs, and effectiveness.
</thinking>

I'll analyze both marketing strategies for your software product...`
    },
    openai: {
      name: "OpenAI GPT",
      color: "bg-green-500",
      strengths: ["Function calling", "Code generation", "Creative tasks", "Multimodal capabilities"],
      tips: [
        "Use system messages effectively for persistent instructions",
        "Leverage function calling for structured outputs",
        "Optimize temperature settings for different tasks",
        "Use clear delimiters for different sections"
      ],
      example: `System: You are a technical documentation expert. Always provide code examples and explain concepts clearly.

User: Explain how to implement user authentication in a React app.`
    },
    gemini: {
      name: "Google Gemini",
      color: "bg-blue-500",
      strengths: ["Multimodal input", "Long context", "Code understanding", "Real-time information"],
      tips: [
        "Combine text with images for richer context",
        "Use structured prompts for complex reasoning",
        "Leverage its code analysis capabilities",
        "Take advantage of the large context window"
      ],
      example: `Analyze this code snippet and the accompanying diagram [image uploaded] to explain the system architecture. Focus on:
1. Data flow patterns
2. Potential bottlenecks
3. Security considerations
4. Scalability recommendations`
    }
  };

  const commonMistakes = [
    {
      mistake: "Vague Instructions",
      description: "Being too general or ambiguous about requirements",
      example: "❌ Make this better",
      solution: "✅ Improve this email's clarity by making it more concise, adding a clear call-to-action, and using a more professional tone"
    },
    {
      mistake: "No Context",
      description: "Failing to provide necessary background information",
      example: "❌ How should I handle this situation?",
      solution: "✅ I'm a team lead dealing with a conflict between two developers over code review feedback. How should I mediate this professionally?"
    },
    {
      mistake: "Overwhelming Complexity",
      description: "Asking for too much in a single prompt",
      example: "❌ Create a complete business plan, marketing strategy, financial projections, and implementation timeline for my startup",
      solution: "✅ Help me create an executive summary for my SaaS startup, focusing on the problem, solution, and target market (2 paragraphs max)"
    },
    {
      mistake: "No Output Format",
      description: "Not specifying how you want the response structured",
      example: "❌ Tell me about renewable energy",
      solution: "✅ Explain renewable energy in a table format with columns for: Type, How it works, Pros, Cons, Current adoption rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prompt Engineering Best Practices</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master the art of crafting effective prompts with proven techniques, common patterns, and platform-specific optimizations
          </p>
        </div>

        <Tabs defaultValue="fundamentals" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="providers">AI Providers</TabsTrigger>
            <TabsTrigger value="mistakes">Common Mistakes</TabsTrigger>
          </TabsList>

          <TabsContent value="fundamentals">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Fundamental Principles</h2>
                <p className="text-gray-600">Core concepts that apply to all prompt engineering scenarios</p>
              </div>
              
              {fundamentalPrinciples.map((principle, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      {principle.icon}
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{principle.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-semibold text-green-700">Good Example</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-sm">
                          {principle.good}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-600" />
                          <span className="font-semibold text-red-700">Poor Example</span>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-md p-4 text-sm">
                          {principle.bad}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-700">Key Tips:</h4>
                      <ul className="space-y-1">
                        {principle.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-blue-500 mt-1">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Advanced Techniques</h2>
                <p className="text-gray-600">Sophisticated methods for complex prompting scenarios</p>
              </div>

              {advancedTechniques.map((technique, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{technique.category}</CardTitle>
                    <CardDescription>{technique.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-700">Example Implementation:</h4>
                      <div className="bg-gray-50 border rounded-md p-4 font-mono text-sm whitespace-pre-wrap">
                        {technique.example}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-700">Benefits:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {technique.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="providers">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Provider-Specific Optimization</h2>
                <p className="text-gray-600">Tailored strategies for different AI platforms</p>
              </div>

              <div className="grid gap-8">
                {Object.entries(providerSpecific).map(([key, provider]) => (
                  <Card key={key} className={`border-l-4 border-l-${provider.color.replace('bg-', '')}`}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-6 h-6 rounded-full ${provider.color}`}></div>
                        <CardTitle className="text-xl">{provider.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-700">Key Strengths:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {provider.strengths.map((strength, index) => (
                            <Badge key={index} variant="outline" className="justify-start">
                              {strength}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-700">Optimization Tips:</h4>
                        <ul className="space-y-2">
                          {provider.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-700">Example Pattern:</h4>
                        <div className="bg-gray-50 border rounded-md p-4 font-mono text-sm whitespace-pre-wrap">
                          {provider.example}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mistakes">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Common Mistakes to Avoid</h2>
                <p className="text-gray-600">Learn from these frequent pitfalls in prompt engineering</p>
              </div>

              <div className="grid gap-6">
                {commonMistakes.map((mistake, index) => (
                  <Card key={index} className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                        <CardTitle className="text-lg text-red-700">{mistake.mistake}</CardTitle>
                      </div>
                      <CardDescription>{mistake.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm">
                            {mistake.example}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-green-50 border border-green-200 rounded-md p-3 text-sm">
                            {mistake.solution}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Reference */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Quick Reference Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700">Before Sending Your Prompt:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          Is my request specific and clear?
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          Have I provided necessary context?
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          Did I specify the output format?
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          Are my constraints clearly defined?
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700">For Better Results:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-yellow-500 mt-0.5" />
                          Include 1-2 examples when possible
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-yellow-500 mt-0.5" />
                          Break complex tasks into steps
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-yellow-500 mt-0.5" />
                          Specify your role or the AI's role
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-yellow-500 mt-0.5" />
                          Test and iterate your prompts
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BestPractices;
