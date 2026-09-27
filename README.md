# 🏋️ FitLog

FitLog is a modern and responsive workout management application built with **Next.js**. It allows users to browse workouts, view detailed exercise information, save workouts for later, and create and manage their personal daily workout plan.

## 🚀 Technologies Used

- **Next.js** – React framework for building the application
- **React** – Component-based UI development
- **TypeScript** – Provides type safety and improved developer experience
- **Tailwind CSS** – Utility-first framework for creating responsive and modern interfaces
- **FitLog API** – Provides workout and exercise data

## ✨ Key Features

### 1. 🏋️ Browse Workouts

Users can explore a collection of different workouts through an organized and easy-to-use interface. Each workout provides important information at a glance, including:

- Workout name
- Targeted muscle groups
- Required equipment
- Difficulty level
- Duration
- Calories
- Rating
- Workout image

This allows users to quickly understand each workout and choose exercises that match their preferences and fitness needs.

### 2. 📋 Workout Details

Each workout has a dedicated **Workout Details** page where users can view complete information about a selected exercise.

The details page includes:

- Large workout image
- Workout description
- Targeted muscle groups
- Equipment required
- Difficulty level
- Sets
- Repetitions
- Duration
- Calories
- Rating

This gives users a clear understanding of an exercise before adding it to their workout plan or saving it for later.

### 3. ➕ Add to Today's Plan

Users can add their preferred workouts to their personal **Today's Plan**, creating a customized list of exercises they want to complete during the day.

Workouts can be added from the workout listing or individual workout details page using the **Add to Today's Plan** option.

The Today's Plan section keeps selected workouts organized in one place, allowing users to easily review their planned exercises. Each workout can display important information such as:

- Workout name
- Workout image
- Muscle group
- Difficulty
- Duration
- Calories
- Sets
- Reps

This feature makes it easier to organize daily workouts, keep track of planned exercises, and maintain a personalized fitness routine without repeatedly searching through the entire workout collection.

### 4. 🔖 Save for Later

Users can save interesting or favorite workouts to a dedicated **Saved Later** section for future reference.

This allows users to bookmark workouts without immediately adding them to Today's Plan. Saved workouts can be accessed later from one convenient location, making it easier to revisit exercises when planning future workouts.

Users can also remove workouts from the Saved Later section when they are no longer needed, helping them maintain an organized collection of saved exercises.

### 5. ✅ Manage Your Plan

The **Today's Plan** section allows users to manage their selected workouts efficiently.

Users can:

- Mark workouts as completed
- Remove workouts from their plan
- Review their planned exercises
- Keep track of workouts they have already completed

Toast notifications provide immediate feedback when actions are performed, helping users understand whether an operation was successful.

This makes the workout planning process more interactive and gives users better control over their daily fitness routine.

### 6. 📱 Responsive Design

FitLog is designed to provide a smooth experience across different screen sizes and devices.

The application adapts its:

- Navigation
- Workout cards
- Images
- Buttons
- Workout details
- Today's Plan
- Saved Later section
- Spacing and layouts

to work effectively across **mobile phones, tablets, laptops, and desktop computers**.

Responsive design ensures that users can comfortably browse workouts and manage their fitness plans regardless of the device they are using.

## 🔗 API

FitLog uses the following API to retrieve workout and exercise data:

### All Workouts

`https://api.abcz.workers.dev/api/fitlog`

### Single Workout

`https://api.abcz.workers.dev/api/fitlog/:id`

The API provides the workout information used throughout the application, including exercise details, images, categories, difficulty, duration, calories, ratings, and other workout-related data.

## 📌 Project Goal

The goal of **FitLog** is to provide a simple, modern, and user-friendly platform for discovering workouts and organizing them into a personalized daily fitness plan.

The application combines workout discovery, detailed exercise information, daily planning, saved workouts, and workout management into one convenient interface.
