"use client";

import {
  Button,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";

import { FaSearch } from "react-icons/fa";

export default function DoctorFilters() {
  return (
    <div className=" mb-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* Search */}
        <TextField className="lg:col-span-2">
          <Label>Search Doctor</Label>

          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-10" />

            <Input
              className="w-full pl-10"
              placeholder="Search by doctor name..."
            />
          </div>
        </TextField>

        {/* Specialization */}
        <Select
          name="specialization"
          placeholder="Select Specialization"
        >
          <Label>Specialization</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="all">
                All Specializations
              </ListBox.Item>

              <ListBox.Item id="cardiology">
                Cardiology
              </ListBox.Item>

              <ListBox.Item id="neurology">
                Neurology
              </ListBox.Item>

              <ListBox.Item id="dentistry">
                Dentistry
              </ListBox.Item>

              <ListBox.Item id="pediatrics">
                Pediatrics
              </ListBox.Item>

              <ListBox.Item id="dermatology">
                Dermatology
              </ListBox.Item>

              <ListBox.Item id="orthopedics">
                Orthopedics
              </ListBox.Item>

              <ListBox.Item id="gynecology">
                Gynecology
              </ListBox.Item>

              <ListBox.Item id="ophthalmology">
                Ophthalmology
              </ListBox.Item>

              <ListBox.Item id="psychiatry">
                Psychiatry
              </ListBox.Item>

              <ListBox.Item id="ent-specialist">
                ENT Specialist
              </ListBox.Item>

              <ListBox.Item id="oncology">
                Oncology
              </ListBox.Item>

              <ListBox.Item id="urology">
                Urology
              </ListBox.Item>

              <ListBox.Item id="endocrinology">
                Endocrinology
              </ListBox.Item>

              <ListBox.Item id="general-physician">
                General Physician
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        {/* Sort */}
        <Select
          name="sortBy"
          placeholder="Sort Doctors"
        >
          <Label>Sort By</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="fee">
                Consultation Fee
              </ListBox.Item>

              <ListBox.Item id="experience">
                Experience
              </ListBox.Item>

              <ListBox.Item id="rating">
                Highest Rating
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      <div className="mt-5 flex justify-end">
        <Button className="bg-sky-600 text-white px-8">
          Apply Filters
        </Button>
      </div>
    </div>
  );
}