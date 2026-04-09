# Rostering and Shift Management (FFIMS Module F4.1)

## Overview
The *Rostering and Shift Management* submodule is a core component of the Fleet and Facilities Integrated Management System (FFIMS). It is designed to automate the transition of Africa University’s Fleet and Facilities Unit (FFU) from a manual, paper-based tracking system to a digital, mobile-first solution. 

The primary purpose of this module is to manage the *weekly 5-in/5-out rotation system*, where two teams of five drivers alternate weeks of duty and rest. This system ensures adequate rest, reduces fatigue, and optimizes staff coverage for both regular bus routes and ad-hoc standby requests.

## Key Features
*   *Automated 5-in/5-out Rotation:* Manages the alternating schedule for 10 drivers, ensuring half the team is active while the other half is resting.
*   *Dynamic Shift Assignment:* Distinguishes between different duties, including *Bus Assigned* (regular staff pickup/drop-off) and *Standby Duty* (ad-hoc transport requests).
*   *University Events Integration:* Supports *bulk shift creation* for peak university periods such as Graduation or Conference weeks.
*   *Drag-and-Drop Scheduling:* An interactive interface for supervisors to reassign shifts with *real-time conflict detection* to prevent overlapping assignments or leave violations.
*   *Early Start Handover:* Specifically manages early shifts starting at *4:30 AM* for night-duty staff pickups, with automated notifications sent 24 hours in advance.
*   *Maintenance Zoning:* Maps workers to specific maintenance zones for targeted facility care.

## Technical Architecture
This submodule follows the standard FFIMS architecture:
*   *Frontend:* Built with *React.js* using a *Mobile-First Design* approach to accommodate drivers on the go.
*   *Backend:* Powered by *Node.js* and *Express.js* handling RESTful API requests.
*   *Database:* Utilizes *PostgreSQL* with the *Sequelize ORM*.
*   *UI Components:* Strictly uses shared UI elements from src/components/ui/ including *Card, Table, Badge, and Button* to maintain design consistency.

## Database Schema (Relational)
The rostering data is stored across several key tables:
*   *Rosters/Schedules:* Tracks rotation weeks, shift types, and start times.
*   *University_Events:* Stores data for bulk scheduling during major events.
*   *Zoning_Assignments:* Records the specific maintenance areas assigned to workers.
*   *Audit_Trail:* Logs every shift change, identifying who made the modification and when.

## UI/UX Standards
*   *Color-Coded Status:* Uses badges to represent shift states (e.g., *Confirmed, Pending, Leave, or Overtime Threshold*).
*   *Responsive Layout:* Optimized for smartphones with low-bandwidth friendly layouts and minimal animations for Zimbabwean network conditions.
*   *Conflict Visualization:* Managers receive high-priority warnings or "conflict glows" when assigning shifts that violate labor laws or overlap with approved leave.

## Development Workflow (Git)
Team members must follow the standard Git workflow:
1.  *Clone* the repository to your local machine.
2.  *Create a feature branch* (e.g., git checkout -b feature-roster-logic)—never work directly on the main branch.
3.  *Pull latest changes* before starting work (git pull origin master).
4.  *Stage and Commit* changes with detailed messages.
5.  *Push* to the remote branch and create a *Pull Request* for team review before merging.

## Installation & Setup
1.  Ensure *Node.js (v18+)* and *npm* are installed.
2.  Install dependencies: npm install.
3.  Configure environment variables for the PostgreSQL database in the .env file.
4.  Run the development server: npm run dev.
