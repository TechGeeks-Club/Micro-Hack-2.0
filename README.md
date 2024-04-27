# Micro-Hack-2.0


## Project Overview

### Purpose

this project is our solution for the second problem of `Micro HAck` Hackathon , our solution aims to help teams , companies , organaisaitions and even scientific clubs in managing operations across different locations.

### Key Features

- task management
    - asign tasks for team or a member
    - real time communication avbout the task
- real time chat
    - teams chat
    - project/event chat
    - tallky wallky

### Technologies Used
- **PostSQL | sqlite( for dev ) :** DBMS
- **Django  :** backend ramework
- **React   :** fronend framework
- **Redis   :** message broker (for django channels)

## Branching Convention
We follow a branching convention to manage our codebase effectively. The convention is as follows:

- `main`: The main branch that represents the production-ready code.
- `dev`: The development branch where new features are integrated and tested.
- `feature/[b/f]-your-feature`: Branches  for developing new features. ex: `feature/f-leaderboard-points`
- `bugfix/[b/f]-your-bugfix`: Branches  for fixing bugs. ex: `bugfix/b-upload-file`
- `refactor/[b/f]-your-refactor`: Branches for refactoring existing code to improve readability, maintainability, or performance.Ex:`refactor/b-database-optimization`
- `conf/[b/f]-your-conf`: Branches  for conficurations . `conf/b-django-chanels`
- `hotfix/[b/f]-your-hotfix`: Branches created for critical bug fixes in the production code. These branches are created from the `main` branch and merged back into it once the hotfix is complete.

When creating a new branch, make sure to give it a descriptive name that reflects the purpose of the branch. For example, if you are working on a feature to add user authentication, you can create a branch named `feature/b-user-authentication`.

It is important to follow this branching convention to ensure a smooth and organized development process. By using separate branches for different features and bug fixes, we can easily track changes, collaborate effectively, and maintain a stable codebase.

## Architecture
### Overview
Our project follows a modern, scalable architecture designed to handle both traditional HTTP requests and real-time communication through WebSockets. The architecture consists of several key components:

1. **Django Backend**:
   - The Django backend serves as the core of our application, handling HTTP requests, routing, and business logic.
   - It utilizes the Django ORM for database interactions, providing an easy-to-use interface for working with data models.

2. **Django REST Framework (DRF)**:
   - Django REST Framework extends Django to facilitate the creation of RESTful APIs.
   - It handles serialization/deserialization of data, authentication, and request/response handling.
   - DRF's powerful features make it easy to build robust APIs for our frontend to interact with.

3. **React Frontend (Work in Progress)**:
   - The React frontend provides the user interface for our application.
   - While still a work in progress, it leverages React's component-based architecture for building interactive UIs.
   - The frontend communicates with the backend API via HTTP requests, fetching and sending data as needed.

4. **Django Channels Integration**:
   - Django Channels is integrated into our project to handle WebSocket connections.
   - This allows for real-time communication between clients and the server, enabling features like instant messaging, live updates, and notifications.
   - Custom consumers and channels are implemented to manage WebSocket connections and handle various events asynchronously.

### Communication Protocols

- **HTTP**:
  - Used for traditional client-server communication in the REST API.
  - Clients make HTTP requests to the backend to perform CRUD operations, authentication, etc.

- **WebSockets**:
  - Utilized by Django Channels for bidirectional, full-duplex communication.
  - WebSocket connections enable real-time updates and notifications, providing a seamless user experience.


## Installation

### Prerequisites

Before installing the project, ensure you have the following prerequisites installed:

- Python (>=version 3.9)
- Node.js and npm (for React frontend)
- PostgreSQL (or any other supported database)
- Redis (for Django Channels)

### Setting Up the Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo.git
    cd your-repo
    ```

2. Create a virtual environment:
    ```bash
    python -m venv env
    ```

3. Activate the virtual environment:
    - On Windows:
        ```bash
        .\env\Scripts\activate
        ```
    - On macOS and Linux:
        ```bash
        source env/bin/activate
        ```

4. Install Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```

5. Set up the database:
    - Create a PostgreSQL database and configure its credentials in `settings.py`.
    - Run database migrations:
        ```bash
        python manage.py makemigrations
        python manage.py migrate
        ```

6. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

### Setting Up the Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

### Setting Up Django 

1. Install Redis server:
    - For macOS:
        ```bash
        brew install redis
        ```
    - For Ubuntu/Debian:
        ```bash
        sudo apt-get install redis-server
        ```

2. Start the Redis server:
    ```bash
    docker run -p 6379:6379  redis:latest
    ```


4. Run the Django Channels server:

    ```bash
    uvicorn src.asgi:application --host 0.0.0.0 --port 8000

    ```

Now, you should have both the Django backend and React frontend running locally. You can access the frontend at `http://localhost:3000` and interact with the API endpoints provided by the Django backend.



## Django REST API Documentation



### Tasks Endpoints

#### Endpoint: `/api/tasks/`
- **Purpose**: Retrieve all tasks.
- **HTTP Method**: GET
- **View**: `ListTasks`
- **Permissions Required**: User must be authenticated.
- **Serializer**: `TaskSerializer`

#### Endpoint: `/api/tasks/<int:pk>/`
- **Purpose**: Retrieve a single task by its ID.
- **HTTP Method**: GET
- **View**: `GetTask`
- **Permissions Required**: User must be authenticated.
- **Serializer**: `TaskSerializer`

#### Endpoint: `/api/tasks/my_tasks/<int:event_id>/`
- **Purpose**: Retrieve tasks assigned to the user for a specific event.
- **HTTP Method**: GET
- **Parameters**:
  - `event_id`: ID of the event for which tasks are requested.
- **View**: `user_tasks_view`
- **Permissions Required**: User must be authenticated.


### Events Endpoints

#### Endpoint: `/api/events/`
- **Purpose**: Retrieve all events or create a new event.
- **HTTP Methods**:
  - `GET`: Retrieve all events.
  - `POST`: Create a new event.
- **Serializer**: `EventSerializers`
- **Permissions Required**: User must be authenticated.

#### Endpoint: `/api/events/<int:pk>/`
- **Purpose**: Retrieve, update, or delete a specific event by its ID.
- **HTTP Methods**:
  - `GET`: Retrieve a specific event.
  - `PUT`: Update a specific event.
  - `DELETE`: Delete a specific event.
- **Serializer**: `EventSerializers`
- **Permissions Required**: User must be authenticated.

#### Endpoint: `/api/events/my_events/`
- **Purpose**: Retrieve events targeted to the user.
- **HTTP Method**: GET
- **Permissions Required**: User must be authenticated.



### Auth Endpoints

#### Endpoint: `/auth/token/login/`
- **Purpose**: Obtain an authentication token.
- **HTTP Method**: POST
- **Request Body**: JSON containing `username` and `password`.
- **Response**: JSON containing the authentication token.
- **Permissions Required**: None

#### Endpoint: `/auth/token/logout/`
- **Purpose**: Invalidate an authentication token.
- **HTTP Method**: POST
- **Request Headers**: Authorization header with the format `Bearer <token>`.
- **Response**: None
- **Permissions Required**: User must be authenticated


### User Profile Endpoint

#### Endpoint: `/api/profile/me/`
- **Purpose**: Retrieve profile data of the authenticated user.
- **HTTP Method**: GET
- **Permissions Required**: User must be authenticated.
- **Response**: JSON containing the profile data of the authenticated user.




