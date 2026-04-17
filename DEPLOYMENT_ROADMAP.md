# 🗺️ Tinder Clone: Linux Deployment Roadmap

This guide outlines the steps required to move the project from a Windows environment to a Linux laptop and ensure all systems (Database, Backend, and Frontend) are fully operational.

---

## 🚀 Phase 1: Environment Preparation

_Prepare the Linux system before copying the code._

- [ ] **Install Docker & Docker Compose**: Essential for the PostgreSQL database and pgAdmin.
- [ ] **Install Python 3.11+**: Required for the FastAPI backend.
- [ ] **Install Node.js (v18+) & NPM**: Required for the React frontend.
- [ ] **Transfer Project**: Copy the `Praktyki-Solve` folder to your Linux machine.

---

## ⚙️ Phase 2: Backend Infrastructure

_Set up the database and the server._

### 1. Docker Initialization

- Navigate to the `/backend` folder.
- Run `docker-compose up -d`.
- **Verification**: Run `docker ps` to ensure the `db` and `pgadmin` containers are running.

### 2. Linux Virtual Environment

- **Crucial**: Do NOT copy the `venv` folder from Windows.
- Run `python3 -m venv venv`.
- Run `source venv/bin/activate`.
- Run `pip install -r requirements.txt`.

### 3. Database Seeding

- Run `python seed.py`.
- **Goal**: This populates the database with 15+ users and photos so the app is ready for testing.

### 4. Server Launch

- Run `uvicorn app.main:app --reload`.
- **Verification**: Visit `http://localhost:8000/docs` to confirm the API is active.

---

## 🎨 Phase 3: Frontend Integration

_Connect the UI to the running engine._

### 1. Dependency Installation

- Navigate to the `/tinder-clone` folder.
- Run `npm install`.

### 2. Syntax Audit (Critical)

- Open the following files:
  - `src/services/api.ts`
  - `src/components/MainView/MainView.tsx`
  - `src/components/Pairs/Pairs.tsx`
- **Verification**: Ensure there are **NO** double brackets (e.g., replace `<<<divdivdiv` with `<div>` and `useState<<<UserUserUser[]>>` with `useState<<UserUser[]>`).

### 3. Frontend Launch

- Run `npm run dev`.
- **Verification**: Open `http://localhost:5173/` in your browser.

---

## ✅ Phase 4: Final Quality Assurance

_Verify the core Tinder experience._

- [ ] **Layout**: Confirm the app is locked to `100vh` with no scrolling.
- [ ] **Data**: Confirm real names and photos from the database are displaying.
- [ ] **Swiping**: Test dragging cards Right (Like) and Left (Nope).
- [ ] **Rewind**: Test the yellow button to restore the last swiped user.
- [ ] **Matches**: Verify the Matches view correctly lists mutual likes.

---

## 🚩 Troubleshooting Guide for Linux

| Issue                   | Solution                                                           |
| :---------------------- | :----------------------------------------------------------------- |
| **Permission Denied**   | Use `chmod +x <<filenamefilename>` or `sudo` for Docker commands.  |
| **ModuleNotFoundError** | Ensure you ran `source venv/bin/activate` in the current terminal. |
| **Connection Refused**  | Check if Docker containers are running: `docker-compose ps`.       |
| **PARSE_ERROR**         | Check for double brackets `<<< >> >>` in TSX files.                |
