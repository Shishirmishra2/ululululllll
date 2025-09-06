"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Quiz() {
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(""));
  const options = ["O(n)", "O(log n)", "O(n log n)", "O(1)"];
  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-[100vh] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-6xl font-retro">Quiz</h1>
            <p className="text-xl">Data Structure & Algorithms</p>
          </div>
          <Badge
            variant="secondary"
            className="text-2xl px-4 py-2 rounded-full">
            09:59
          </Badge>
        </div>
        <div className="max-h-[70vh] overflow-y-auto">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card
              key={i}
              className="mb-6 bg-purple-800/50 border-none rounded-xl p-4 text-white">
              <CardHeader className="p-0 mb-4">
                <CardTitle>
                  {i + 1}. What is the time complexity of searching an element
                  in a balanced Binary Search Tree (BST)?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <RadioGroup
                  value={answers[i]}
                  onValueChange={(v) => handleChange(i, v)}>
                  {options.map((opt, j) => (
                    <div key={j} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={opt} id={`q${i}-opt${j}`} />
                      <Label htmlFor={`q${i}-opt${j}`}>{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => console.log(answers)}
            variant={"secondary"}
            className="h-12 w-60">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
