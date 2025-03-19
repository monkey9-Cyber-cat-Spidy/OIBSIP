"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState("")
  const [fromUnit, setFromUnit] = useState("celsius")
  const [toUnit, setToUnit] = useState("fahrenheit")
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(e.target.value)
    setError(null)
  }

  const validateInput = () => {
    if (!temperature) {
      setError("Please enter a temperature value")
      return false
    }

    const numValue = Number.parseFloat(temperature)
    if (isNaN(numValue)) {
      setError("Please enter a valid number")
      return false
    }

    return true
  }

  const convertTemperature = () => {
    if (!validateInput()) return

    const temp = Number.parseFloat(temperature)
    let convertedTemp: number

    // Convert to Celsius first (if not already in Celsius)
    let tempInCelsius: number
    if (fromUnit === "celsius") {
      tempInCelsius = temp
    } else if (fromUnit === "fahrenheit") {
      tempInCelsius = (temp - 32) * (5 / 9)
    } else {
      // Kelvin
      tempInCelsius = temp - 273.15
    }

    // Convert from Celsius to target unit
    if (toUnit === "celsius") {
      convertedTemp = tempInCelsius
    } else if (toUnit === "fahrenheit") {
      convertedTemp = tempInCelsius * (9 / 5) + 32
    } else {
      // Kelvin
      convertedTemp = tempInCelsius + 273.15
    }

    // Format the result
    const unitSymbols = {
      celsius: "°C",
      fahrenheit: "°F",
      kelvin: "K",
    }

    setResult(`${convertedTemp.toFixed(2)} ${unitSymbols[toUnit as keyof typeof unitSymbols]}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md p-6 space-y-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Temperature Converter</h1>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Temperature
            </label>
            <Input
              id="temperature"
              type="text"
              placeholder="Enter temperature"
              value={temperature}
              onChange={handleTemperatureChange}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="from-unit" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                From
              </label>
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger id="from-unit">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="celsius">Celsius (°C)</SelectItem>
                  <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                  <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="to-unit" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                To
              </label>
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger id="to-unit">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="celsius">Celsius (°C)</SelectItem>
                  <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                  <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button onClick={convertTemperature} className="w-full">
            Convert
          </Button>

          {result && (
            <div className="mt-6 p-4 bg-primary/10 rounded-md">
              <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">Result:</h2>
              <p className="text-2xl font-bold text-primary">{result}</p>
            </div>
          )}
        </div>
      </Card>
    </main>
  )
}

