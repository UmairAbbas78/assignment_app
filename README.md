### ⏱ Development Time Breakdown

| Task                                                     | Duration   |
| -------------------------------------------------------- | ---------- |
| 🚀 Frontend Setup                                        | 1.5 hours  |
| &nbsp;&nbsp;&nbsp;&nbsp;• Set up frontend structure      |            |
| &nbsp;&nbsp;&nbsp;&nbsp;• Installed necessary libraries  |            |
| &nbsp;&nbsp;&nbsp;&nbsp;• Created frontend pages         |            |
| 🛠 Backend & Database Setup                               | 45 minutes |
| &nbsp;&nbsp;&nbsp;&nbsp;• Configured backend environment |            |
| &nbsp;&nbsp;&nbsp;&nbsp;• Set up database                |            |
| &nbsp;&nbsp;&nbsp;&nbsp;• Created auth routes            |            |
| 🔗 Frontend-Backend Integration                          | 1.5 hours  |

**Total Time:** ~3.75 hours

### Task 2

1.  Outline the initial steps you would take to transition the
    frontend/backend to support an offline-first approach.
    > 
        Initial steps will be to identify the features that must work offline like edits and displayed data.
        Implement local storage or indexed database.
    
2.  Drawing from your own experience with offline functionalities,
    what challenges have you encountered when implementing or
    maintaining offline modes?
    > There can be situations where frontend and backend are out of sync causing confusion for the user. also indexed data can be ineffecient in terms of performance
3.  How did you overcome these challenges, or what solutions did
    you implement?
    > 
        We can solve this by making a queue of the apis. 
        we can show optimistic results for example rendering what would happen if the api was a success and roll back if it fails
4.  Are there any particular tools, libraries, or practices you've found
    especially helpful or problematic in this context?
    >
        Theres redux toolkit. and upon research I found Dexie.js
5.  Are there any emerging technologies or trends that might
    influence how we think about offline experiences?
    > 
        there are progressive web app which means web applications that work like a mobile application
        and service workers are being developed that can improve offline functionalities in future
