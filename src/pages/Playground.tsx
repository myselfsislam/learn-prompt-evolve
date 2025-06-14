import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Save, 
  Download, 
  Upload, 
  Copy, 
  Trash2, 
  Edit3, 
  Settings, 
  FileText, 
  Folder,
  Plus,
  Search,
  Wand2,
  Code,
  Eye,
  EyeOff,
  CheckCircle,
  Info
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Prompt {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  template: string;
}

interface OptimizationChange {
  type: 'added' | 'improved' | 'structured';
  description: string;
  before?: string;
  after?: string;
}

const Playground = () => {
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [promptTitle, setPromptTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [tags, setTags] = useState('');
  const [savedPrompts, setSavedPrompts] = useState<Prompt[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [showOptimizationDialog, setShowOptimizationDialog] = useState(false);
  const [optimizationChanges, setOptimizationChanges] = useState<OptimizationChange[]>([]);
  const [originalPrompt, setOriginalPrompt] = useState('');
  const { toast } = useToast();

  const categories = [
    'general',
    'analysis',
    'creative',
    'technical',
    'business',
    'educational',
    'research'
  ];

  const promptTemplates: PromptTemplate[] = [
    {
      id: '1',
      name: 'Analysis Template',
      description: 'Structure for analytical prompts',
      category: 'analysis',
      template: `Context: [Provide background information]

Task: [Clearly define what you want analyzed]

Requirements:
1. [Specific requirement 1]
2. [Specific requirement 2]
3. [Specific requirement 3]

Output Format: [Specify desired format]

Example: [Provide example if helpful]`
    },
    {
      id: '2',
      name: 'Creative Writing',
      description: 'Template for creative content generation',
      category: 'creative',
      template: `Genre: [Specify genre]
Tone: [Define tone - formal, casual, humorous, etc.]
Audience: [Target audience]

Brief: [Creative brief or concept]

Requirements:
- Length: [Word count or length]
- Style: [Writing style preferences]
- Key elements to include: [List important elements]

Constraints: [Any limitations or restrictions]`
    },
    {
      id: '3',
      name: 'Code Review',
      description: 'Template for code analysis and review',
      category: 'technical',
      template: `Language: [Programming language]
Context: [What the code is supposed to do]

Code to Review:
\`\`\`
[Insert code here]
\`\`\`

Review Focus:
- Code quality and readability
- Performance optimization
- Security considerations
- Best practices adherence
- Bug identification

Please provide specific suggestions for improvement.`
    },
    {
      id: '4',
      name: 'Business Strategy',
      description: 'Template for business analysis and strategy',
      category: 'business',
      template: `Company/Product: [Name and brief description]
Industry: [Industry context]
Current Situation: [Current state]

Objective: [What you want to achieve]

Analysis Required:
1. Market analysis
2. Competitive landscape
3. SWOT analysis
4. Recommendations

Please provide actionable insights and strategic recommendations.`
    }
  ];

  const formatPrompt = () => {
    const lines = currentPrompt.split('\n');
    const formatted = lines.map(line => {
      const trimmed = line.trim();
      if (trimmed.endsWith(':')) {
        return `${trimmed}\n`;
      }
      if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
        return `  ${trimmed}`;
      }
      if (/^\d+\./.test(trimmed)) {
        return `${trimmed}`;
      }
      return line;
    }).join('\n');
    
    setCurrentPrompt(formatted);
    toast({
      title: "Prompt Formatted",
      description: "Your prompt has been formatted for better readability",
    });
  };

  const optimizePrompt = () => {
    const original = currentPrompt;
    setOriginalPrompt(original);
    const changes: OptimizationChange[] = [];

    // Check if prompt already has structure
    if (original.includes('Context:') && original.includes('Task:')) {
      toast({
        title: "Prompt Already Optimized",
        description: "Your prompt already has good structure",
      });
      return;
    }

    let optimized = original;
    
    // Add structure if missing
    if (!original.includes('Context:') && !original.includes('Task:')) {
      optimized = `Context: [Provide relevant background information here]

Task: ${original}

Requirements:
1. [Add specific requirements for the output]
2. [Specify desired format or structure]
3. [Include any constraints or limitations]

Example: [Provide an example of the expected output if helpful]`;

      changes.push({
        type: 'structured',
        description: 'Added structured format with Context, Task, Requirements, and Example sections',
        before: 'Unstructured prompt',
        after: 'Structured prompt with clear sections'
      });

      changes.push({
        type: 'added',
        description: 'Added Context section to provide background information',
      });

      changes.push({
        type: 'added',
        description: 'Added Requirements section with numbered list for specific output criteria',
      });

      changes.push({
        type: 'added',
        description: 'Added Example section placeholder to improve AI understanding',
      });
    }

    // Check for improvements needed
    if (original.length < 50) {
      changes.push({
        type: 'improved',
        description: 'Added detailed structure to expand the brief prompt for better AI comprehension',
      });
    }

    if (!original.includes('?') && !original.includes('Task:')) {
      changes.push({
        type: 'improved',
        description: 'Clarified the task by moving original content to Task section',
      });
    }

    setCurrentPrompt(optimized);
    setOptimizationChanges(changes);
    setShowOptimizationDialog(true);
  };

  const savePrompt = () => {
    if (!currentPrompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to save",
        variant: "destructive",
      });
      return;
    }

    const newPrompt: Prompt = {
      id: Date.now().toString(),
      title: promptTitle || `Prompt ${savedPrompts.length + 1}`,
      content: currentPrompt,
      category: selectedCategory,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setSavedPrompts([newPrompt, ...savedPrompts]);
    setPromptTitle('');
    setTags('');
    
    toast({
      title: "Prompt Saved",
      description: `"${newPrompt.title}" has been saved to your collection`,
    });
  };

  const loadPrompt = (prompt: Prompt) => {
    setCurrentPrompt(prompt.content);
    setPromptTitle(prompt.title);
    setSelectedCategory(prompt.category);
    setTags(prompt.tags.join(', '));
    setSelectedPrompt(prompt);
  };

  const deletePrompt = (promptId: string) => {
    setSavedPrompts(savedPrompts.filter(p => p.id !== promptId));
    if (selectedPrompt?.id === promptId) {
      setSelectedPrompt(null);
    }
    toast({
      title: "Prompt Deleted",
      description: "Prompt has been removed from your collection",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Prompt copied to clipboard",
    });
  };

  const exportPrompts = () => {
    const dataStr = JSON.stringify(savedPrompts, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'my-prompts.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Prompts Exported",
      description: "Your prompts have been exported as JSON",
    });
  };

  const importPrompts = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          setSavedPrompts([...savedPrompts, ...imported]);
          toast({
            title: "Prompts Imported",
            description: `Successfully imported ${imported.length} prompts`,
          });
        } catch (error) {
          toast({
            title: "Import Error",
            description: "Failed to import prompts. Please check the file format.",
            variant: "destructive",
          });
        }
      };
      reader.readAsText(file);
    }
  };

  const filteredPrompts = savedPrompts.filter(prompt =>
    prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prompt.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prompt Curator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create, format, organize, and manage your AI prompts like a professional code editor
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Prompt Editor
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsPreviewMode(!isPreviewMode)}
                    >
                      {isPreviewMode ? 'Edit' : 'Preview'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Prompt Metadata */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Prompt Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter prompt title..."
                      value={promptTitle}
                      onChange={(e) => setPromptTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    placeholder="ai, analysis, creative..."
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>

                {/* Main Editor Area */}
                <div className="relative">
                  <Label htmlFor="prompt">Prompt Content</Label>
                  {isPreviewMode ? (
                    <div className="min-h-[300px] bg-gray-50 rounded-md p-4 border font-mono text-sm whitespace-pre-wrap">
                      {currentPrompt || 'No content to preview...'}
                    </div>
                  ) : (
                    <Textarea
                      id="prompt"
                      placeholder="Enter your prompt here..."
                      value={currentPrompt}
                      onChange={(e) => setCurrentPrompt(e.target.value)}
                      rows={15}
                      className="font-mono text-sm resize-none"
                    />
                  )}
                </div>

                {/* Editor Actions */}
                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  <Button onClick={formatPrompt} variant="outline" size="sm">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Format
                  </Button>
                  <Button onClick={optimizePrompt} variant="outline" size="sm">
                    <Wand2 className="w-4 h-4 mr-2" />
                    Optimize
                  </Button>
                  <Button onClick={savePrompt} size="sm">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={() => copyToClipboard(currentPrompt)} variant="outline" size="sm">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button onClick={exportPrompts} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export All
                  </Button>
                  <label className="inline-flex">
                    <Button variant="outline" size="sm" asChild>
                      <span>
                        <Upload className="w-4 h-4 mr-2" />
                        Import
                      </span>
                    </Button>
                    <input
                      type="file"
                      accept=".json"
                      className="hidden"
                      onChange={importPrompts}
                    />
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Tabs defaultValue="saved">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="saved">My Prompts</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>

              <TabsContent value="saved" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Folder className="w-5 h-5" />
                      Saved Prompts
                    </CardTitle>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search prompts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredPrompts.length === 0 ? (
                      <p className="text-sm text-gray-500 text-center py-8">
                        {savedPrompts.length === 0 ? 'No saved prompts yet' : 'No prompts match your search'}
                      </p>
                    ) : (
                      filteredPrompts.map((prompt) => (
                        <div key={prompt.id} className="border rounded-md p-3 hover:bg-gray-50">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-sm truncate">{prompt.title}</h4>
                            <div className="flex gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => loadPrompt(prompt)}
                              >
                                <FileText className="w-3 h-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(prompt.content)}
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deletePrompt(prompt.id)}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                            {prompt.content.substring(0, 100)}...
                          </p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {prompt.category}
                            </Badge>
                            {prompt.tags.slice(0, 2).map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {prompt.tags.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{prompt.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-400">
                            {prompt.createdAt.toLocaleDateString()}
                          </p>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="templates" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Prompt Templates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                    {promptTemplates.map((template) => (
                      <div key={template.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-sm">{template.name}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setCurrentPrompt(template.template)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{template.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {template.category}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Optimization Changes Dialog */}
        <Dialog open={showOptimizationDialog} onOpenChange={setShowOptimizationDialog}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-blue-600" />
                Prompt Optimization Complete
              </DialogTitle>
              <DialogDescription>
                Here's what the Curator has improved in your prompt to make it more effective:
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-green-800">Optimization Summary</h3>
                </div>
                <p className="text-green-700 text-sm">
                  Applied {optimizationChanges.length} improvements to enhance prompt clarity and effectiveness.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Changes Made:</h4>
                {optimizationChanges.map((change, index) => (
                  <div key={index} className="border rounded-lg p-3 bg-gray-50">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge 
                            variant={
                              change.type === 'added' ? 'default' : 
                              change.type === 'improved' ? 'secondary' : 'outline'
                            }
                            className="text-xs"
                          >
                            {change.type.charAt(0).toUpperCase() + change.type.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-700">{change.description}</p>
                        {change.before && change.after && (
                          <div className="mt-2 text-xs">
                            <span className="text-red-600">Before: {change.before}</span>
                            <br />
                            <span className="text-green-600">After: {change.after}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Why These Changes Help:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Context section:</strong> Provides AI with necessary background information</li>
                  <li>• <strong>Task section:</strong> Clearly defines what you want the AI to do</li>
                  <li>• <strong>Requirements:</strong> Specifies output format and quality expectations</li>
                  <li>• <strong>Example section:</strong> Helps AI understand your desired output style</li>
                </ul>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={() => setShowOptimizationDialog(false)} className="flex-1">
                  Continue with Optimized Prompt
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setCurrentPrompt(originalPrompt);
                    setShowOptimizationDialog(false);
                    toast({
                      title: "Reverted Changes",
                      description: "Restored your original prompt",
                    });
                  }}
                >
                  Revert Changes
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Playground;
