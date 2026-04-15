# Daily Routine Tracker (Full-Stack)

A robust full-stack application designed to manage and track daily habits and schedules. This project demonstrates a decoupled architecture, using **Django REST Framework (DRF)** to serve a JSON API and **React.js** for a dynamic, responsive user interface.

## 🚀 Key Features

* **RESTful API:** Full CRUD operations for managing routines, tasks, and completion statuses.
* **Decoupled Architecture:** Clean separation of concerns between the Python backend and JavaScript frontend.
* **State Management:** Utilizes React Hooks (`useState`, `useEffect`) to synchronize frontend state with backend data.
* **Relational Database:** Optimized MySQL schema to ensure data integrity and efficient querying.
* **API Documentation:** Scalable endpoint structure ready for testing via Postman.

## 🛠 Tech Stack

### **Backend**
* **Language:** Python
* **Framework:** Django & Django REST Framework (DRF)
* **Database:** MySQL
* **Tools:** Pip, Virtualenv

### **Frontend**
* **Library:** React.js
* **HTTP Client:** Axios (for API consumption)
* **Styling:** CSS3 / Modern UI Design

---

## 📂 Project Structure

```text
├── backend/            # Django Server Logic
│   ├── routine_api/    # Project configuration
│   ├── core/           # App containing Models, Serializers, and Views
│   └── manage.py
└── frontend/           # React Application
    ├── src/
    │   ├── components/ # Habit/Task UI components
    │   └── App.js      # API integration and main logic
    └── package.json
