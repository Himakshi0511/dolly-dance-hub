import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [danceForm, setDanceForm] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create query object
    const query = {
      id: Date.now().toString(),
      name,
      age,
      danceForm,
      timestamp: new Date().toISOString(),
      status: 'new' as const
    };

    // Save to localStorage for admin dashboard
    const existingQueries = localStorage.getItem('contactQueries');
    const queries = existingQueries ? JSON.parse(existingQueries) : [];
    queries.unshift(query); // Add new query at the beginning
    localStorage.setItem('contactQueries', JSON.stringify(queries));

    // Here you would typically send the data to your backend
    toast({
      title: "Registration Successful!",
      description: `Thank you ${name}! We'll contact you soon about ${danceForm} classes.`,
    });

    // Reset form
    setName('');
    setAge('');
    setDanceForm('');
  };

  return (
    <Card className="w-full max-w-md mx-auto border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Start Your Journey
        </CardTitle>
        <CardDescription className="text-center text-gray-600">
          Fill in your details to join our dance community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium text-gray-700">
              Age
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="5"
              max="100"
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">
              Choose Your Dance Form
            </Label>
            <RadioGroup value={danceForm} onValueChange={setDanceForm}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bollywood" id="bollywood" />
                <Label htmlFor="bollywood" className="text-sm text-gray-600">
                  Bollywood
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="freestyle" id="freestyle" />
                <Label htmlFor="freestyle" className="text-sm text-gray-600">
                  Freestyle
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bellydance" id="bellydance" />
                <Label htmlFor="bellydance" className="text-sm text-gray-600">
                  Belly Dance
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="classical" id="classical" />
                <Label htmlFor="classical" className="text-sm text-gray-600">
                  Classical
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="folk" id="folk" />
                <Label htmlFor="folk" className="text-sm text-gray-600">
                  Folk
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 font-semibold"
          >
            Join Now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;