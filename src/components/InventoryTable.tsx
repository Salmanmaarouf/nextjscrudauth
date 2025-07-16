"use client";

import React, { useState } from "react";


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Combobox } from './ui/combo-box';
  
const cars = [
  {
    id: "1",
    make: "BMW",
    model: "M3",
    price: "80000",
    mileage: "50000",
    category: "performance", 
  },
  {
    id: "2",
    make: "Tesla",
    model: "Model 3",
    price: "60000",
    mileage: "10000",
    category: "electric",
  },
];

  
  export default function InventoryTable() {
    const [selectedCategory, setSelectedCategory] = useState("");
    return (
      <div className="w-full">
        <div className="flex items-center gap-2 py-4">
          <div className="relative max-w-sm w-full">
          <Input placeholder="Filter plants..." className="pl-10" />
          <Search className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2" />
          <Combobox value={selectedCategory} onChange={(val) => setSelectedCategory(val)}/>
          </div>
        
        </div>
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Car_ID</TableHead>
              <TableHead>Make</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Mileage</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.make}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.price}</TableCell>
                <TableCell>{car.mileage}</TableCell>
                <TableCell>{car.category}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-4">
                      <h1>Edit Button</h1>
                      <h1>Delete Button</h1>

                  </div>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
     
    );
  }
  
