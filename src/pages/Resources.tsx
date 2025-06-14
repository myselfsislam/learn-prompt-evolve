
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube, Github, BookOpen, Users, Star } from 'lucide-react';

const Resources = () => {
  const youtubeChannels = [
    {
      name: "AI Explained",
      description: "Deep dives into AI models, prompt engineering techniques, and latest research",
      subscribers: "500K+",
      speciality: "Technical Analysis",
      url: "https://youtube.com/@aiexplained-official"
    },
    {
      name: "Prompt Engineering",
      description: "Practical tutorials on advanced prompting techniques across different AI models",
      subscribers: "250K+",
      speciality: "Hands-on Tutorials",
      url: "https://youtube.com/@promptengineering"
    },
    {
      name: "Two Minute Papers",
      description: "Latest AI research papers explained in an accessible way",
      subscribers: "1.2M+",
      speciality: "Research Updates",
      url: "https://youtube.com/@TwoMinutePapers"
    },
    {
      name: "Machine Learning Street Talk",
      description: "In-depth conversations with AI researchers and practitioners",
      subscribers: "180K+",
      speciality: "Expert Interviews",
      url: "https://youtube.com/@MachineLearningStreetTalk"
    }
  ];

  const githubRepos = [
    {
      name: "Awesome Prompt Engineering",
      description: "Curated list of prompt engineering resources, papers, and tools",
      stars: "15K+",
      language: "Markdown",
      url: "https://github.com/promptslab/Awesome-Prompt-Engineering"
    },
    {
      name: "Prompt Engineering Guide",
      description: "Comprehensive guide covering prompt engineering techniques and best practices",
      stars: "35K+",
      language: "JavaScript",
      url: "https://github.com/dair-ai/Prompt-Engineering-Guide"
    },
    {
      name: "LangChain",
      description: "Framework for developing applications with language models",
      stars: "80K+",
      language: "Python",
      url: "https://github.com/langchain-ai/langchain"
    },
    {
      name: "OpenAI Cookbook",
      description: "Examples and guides for using the OpenAI API",
      stars: "45K+",
      language: "Python",
      url: "https://github.com/openai/openai-cookbook"
    }
  ];

  const learningPlatforms = [
    {
      name: "DeepLearning.AI",
      description: "Courses on AI, machine learning, and prompt engineering",
      type: "Online Courses",
      price: "Free & Paid"
    },
    {
      name: "Coursera AI Specializations",
      description: "University-level courses on AI and machine learning",
      type: "Specialization",
      price: "Subscription"
    },
    {
      name: "Hugging Face Learn",
      description: "Practical AI and NLP courses with hands-on experience",
      type: "Interactive",
      price: "Free"
    },
    {
      name: "Fast.ai",
      description: "Practical deep learning courses for coders",
      type: "Self-paced",
      price: "Free"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learning Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Curated resources to help you build expertise in prompt engineering and AI
        </p>
      </div>

      {/* YouTube Channels */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Youtube className="w-8 h-8 text-red-600" />
          <h2 className="text-2xl font-bold text-gray-900">YouTube Channels</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {youtubeChannels.map((channel, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{channel.name}</CardTitle>
                  <Badge variant="secondary">{channel.subscribers}</Badge>
                </div>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{channel.speciality}</Badge>
                  <Button variant="outline" size="sm" asChild>
                    <a href={channel.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GitHub Repositories */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Github className="w-8 h-8 text-gray-900" />
          <h2 className="text-2xl font-bold text-gray-900">GitHub Repositories</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {githubRepos.map((repo, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{repo.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{repo.stars}</span>
                  </div>
                </div>
                <CardDescription>{repo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{repo.language}</Badge>
                  <Button variant="outline" size="sm" asChild>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Platforms */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">Learning Platforms</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {learningPlatforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{platform.name}</CardTitle>
                <CardDescription>{platform.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <Badge variant="outline">{platform.type}</Badge>
                    <div className="text-sm text-gray-600">{platform.price}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8 opacity-90">
          Explore these resources and begin building your expertise in prompt engineering
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Start Learning
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
            asChild
          >
            <a href="https://discord.gg/zGWjn6ze" target="_blank" rel="noopener noreferrer">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
