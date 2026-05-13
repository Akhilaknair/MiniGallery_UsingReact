# Image Gallery Pagination UI

## Concepts Practiced

- React Components
- Props
- useState Hook
- useEffect Hook
- API Fetching with Axios
- Array Mapping
- Conditional Rendering
- Pagination
- JSX
- Flexbox
- Responsive Design
- Tailwind CSS

---

## Features

- Fetches images dynamically from the Picsum API
- Displays image cards with author names
- Pagination with Next and Prev buttons
- Loading state while fetching data
- Responsive gallery layout
- Clickable images that open in a new tab

---

## Technologies Used

- React
- Axios
- Tailwind CSS
- Lorem Picsum API

---

## Screenshot

<p align="center">
  <img src="./screenshots/preview.png" alt="Project Screenshot" width="900"/>
</p>

---

## API Used

```bash
https://picsum.photos/v2/list?page=1&limit=15
```
---

## Components Overview

### App.jsx

- Handles API requests using Axios
- Manages pagination state
- Displays image cards dynamically
- Shows loading state while fetching data

### Card.jsx

- Receives image data using props
- Displays image and author name
- Redirects to image source on click

---

## Preview

- Dynamic image gallery
- Smooth pagination
- Responsive UI
- Modern dark theme
