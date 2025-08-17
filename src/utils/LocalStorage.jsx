
const employees =[
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Project Alpha Kickoff",
          "taskDescription": "Initial meeting to outline the scope and goals of Project Alpha.",
          "taskDate": "2025-08-16",
          "category": "Meetings"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Develop UI for Dashboard",
          "taskDescription": "Create and implement the user interface for the main dashboard.",
          "taskDate": "2025-08-18",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Review quarterly reports",
          "taskDescription": "Analyze and summarize financial reports from the last quarter.",
          "taskDate": "2025-08-15",
          "category": "Analysis"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Fix authentication bug",
          "taskDescription": "Investigate and resolve the issue with user login.",
          "taskDate": "2025-08-14",
          "category": "Bug Fix"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write project proposal",
          "taskDescription": "Draft a detailed proposal for the new marketing campaign.",
          "taskDate": "2025-08-17",
          "category": "Writing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Client presentation",
          "taskDescription": "Prepare slides and present the new features to the client.",
          "taskDate": "2025-08-20",
          "category": "Presentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Test API endpoints",
          "taskDescription": "Run automated and manual tests on all API endpoints.",
          "taskDate": "2025-08-13",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Organize team workshop",
          "taskDescription": "Plan and coordinate a workshop on agile methodologies.",
          "taskDate": "2025-08-22",
          "category": "Planning"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Customer support training",
          "taskDescription": "Conduct a training session for new customer support staff.",
          "taskDate": "2025-08-25",
          "category": "Training"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Onboard new hire",
          "taskDescription": "Assist the new employee with their initial setup and tasks.",
          "taskDate": "2025-08-12",
          "category": "Onboarding"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Deploy new feature to production",
          "taskDescription": "Failed deployment of a new feature due to a server error.",
          "taskDate": "2025-08-10",
          "category": "Deployment"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Research market trends",
          "taskDescription": "Gather data and analyze current market trends in the industry.",
          "taskDate": "2025-08-19",
          "category": "Research"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Create social media content",
          "taskDescription": "Design and schedule posts for the company's social media channels.",
          "taskDate": "2025-08-21",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "SEO optimization",
          "taskDescription": "Improve the website's search engine optimization to increase traffic.",
          "taskDate": "2025-08-24",
          "category": "SEO"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Draft email campaign",
          "taskDescription": "Write and finalize content for the upcoming email marketing campaign.",
          "taskDate": "2025-08-11",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Database migration",
          "taskDescription": "Attempted to migrate the database but encountered critical errors.",
          "taskDate": "2025-08-09",
          "category": "Database"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Code review for new feature",
          "taskDescription": "Review and provide feedback on the code for the new feature.",
          "taskDate": "2025-08-17",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Automate deployment pipeline",
          "taskDescription": "Set up a CI/CD pipeline for automated deployments.",
          "taskDate": "2025-08-23",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update documentation",
          "taskDescription": "Revise and update the project's technical documentation.",
          "taskDate": "2025-08-10",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Refactor legacy code",
          "taskDescription": "Improve the structure and readability of older code.",
          "taskDate": "2025-08-08",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Bug triage session",
          "taskDescription": "Categorize and prioritize reported bugs.",
          "taskDate": "2025-08-07",
          "category": "Bug Fix"
        }
      ]
    }
  ]

  const admin = [
    {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
    }
  ]

  export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

    export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
    
  }
  