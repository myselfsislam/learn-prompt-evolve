
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Copy } from 'lucide-react';

const PromptBasics = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Prompt Structure Fundamentals</h1>
            <Badge variant="default">Beginner</Badge>
          </div>
          <p className="text-lg text-gray-600">Learn the anatomy of effective prompts and basic principles</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What Makes a Good Prompt?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                A well-structured prompt has four key components:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Context:</strong> Background information the AI needs to understand</li>
                <li><strong>Task:</strong> Clear instruction about what you want the AI to do</li>
                <li><strong>Format:</strong> How you want the output structured</li>
                <li><strong>Constraints:</strong> Any limitations or requirements</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Example: Bad vs Good Prompt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">❌ Bad Prompt:</h4>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="font-mono text-sm">"Write about marketing"</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Too vague, no context or specific requirements</p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600 mb-2">✅ Good Prompt:</h4>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex justify-between items-start">
                      <p className="font-mono text-sm flex-1">
                        "You are a marketing expert helping a small coffee shop owner. Write a 3-paragraph social media strategy focusing on Instagram and Facebook. Include specific post types, posting frequency, and engagement tactics. Format as bullet points under each platform."
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => copyToClipboard("You are a marketing expert helping a small coffee shop owner. Write a 3-paragraph social media strategy focusing on Instagram and Facebook. Include specific post types, posting frequency, and engagement tactics. Format as bullet points under each platform.")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Clear role, specific task, defined format, and constraints</p>
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
                Try improving this prompt: <em>"Help me with my resume"</em>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Consider: What's your role? What specific help do you need? What format do you want? Any constraints?
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">Improved version example:</h5>
                <p className="font-mono text-sm text-blue-700">
                  "You are a career counselor. Review my software engineer resume and provide 5 specific improvements to better highlight my Python and React experience for senior developer roles. Format as numbered list with before/after examples where applicable."
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
                  <p>Always provide context and set the scene</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <p>Be specific about what you want the AI to do</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <p>Specify the desired output format</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <p>Include relevant constraints or requirements</p>
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

export default PromptBasics;
