"use client";

import {
  Button,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function DoctorFilters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="lg:col-span-2"
        >
          <TextField>
            <Label>Search Doctor</Label>

            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-10" />

              <Input
                className="w-full pl-10"
                placeholder="Search by doctor name..."
              />
            </div>
          </TextField>
        </motion.div>

        {/* Specialization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.45 }}
        >
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
                <ListBox.Item id="all">All Specializations</ListBox.Item>
                <ListBox.Item id="cardiology">Cardiology</ListBox.Item>
                <ListBox.Item id="neurology">Neurology</ListBox.Item>
                <ListBox.Item id="dentistry">Dentistry</ListBox.Item>
                <ListBox.Item id="pediatrics">Pediatrics</ListBox.Item>
                <ListBox.Item id="dermatology">Dermatology</ListBox.Item>
                <ListBox.Item id="orthopedics">Orthopedics</ListBox.Item>
                <ListBox.Item id="gynecology">Gynecology</ListBox.Item>
                <ListBox.Item id="ophthalmology">Ophthalmology</ListBox.Item>
                <ListBox.Item id="psychiatry">Psychiatry</ListBox.Item>
                <ListBox.Item id="ent-specialist">
                  ENT Specialist
                </ListBox.Item>
                <ListBox.Item id="oncology">Oncology</ListBox.Item>
                <ListBox.Item id="urology">Urology</ListBox.Item>
                <ListBox.Item id="endocrinology">
                  Endocrinology
                </ListBox.Item>
                <ListBox.Item id="general-physician">
                  General Physician
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </motion.div>

        {/* Sort */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.45 }}
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="mt-5 flex justify-end"
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
        >
          <Button className="bg-sky-600 text-white px-8">
            Apply Filters
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}